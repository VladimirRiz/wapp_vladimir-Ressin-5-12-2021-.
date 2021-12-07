import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../store/actions/favorites";
import { Favorite } from "@material-ui/icons";
import Button from "@mui/material/Button";

import FiveDays from "./FiveDays";
import "./main.scss";
import SearchBar from "../SearchBar";

const Main = ({
	changeUpdate,
	weatherIcon,
	city,
	wText,
	temperature,
	fiveDays,
}) => {
	const [fav, setFav] = useState();
	const [isFav, setIsFav] = useState(false);
	const [w, setW] = useState(temperature);
	const [f, setF] = useState(fiveDays);
	const [value, setValue] = useState();
	const [unit, setUnit] = useState();
	const dispatch = useDispatch();
	const favorites = useSelector(({ favorites }) => favorites);
	const state = useSelector((state) => state);
	const degrees = useSelector(({ degrees }) => degrees);
	const error = useSelector(({ error }) => error);

	const isLoading = useMemo(
		() => state.loading || state.loadingWeather || state.loadingfiveDays,
		[state.loading, state.loadingWeather, state.loadingfiveDays]
	);

	useEffect(() => {
		setFav(favorites);
		if (fav?.some((f) => f.city === city)) {
			setIsFav(true);
		} else setIsFav(false);
	}, [favorites, fav, city]);

	useEffect(() => {
		setW(temperature);
		setF(fiveDays);
	}, [temperature, fiveDays, isLoading]);

	useEffect(() => {
		if (degrees === "F") {
			setValue(w?.Imperial?.Value);
			setUnit(w?.Imperial?.Unit);
		} else {
			setValue(w?.Metric?.Value);
			setUnit(w?.Metric?.Unit);
		}
	}, [degrees, w]);

	const addToFavorite = () => {
		if (fav.some((f) => f.city === city)) {
			const index = fav.findIndex((f) => f.city === city);
			fav.splice(index, 1);
			setIsFav(false);
		} else {
			setIsFav(true);
			fav.push({
				city: city,
				temperature: {
					value: w.Metric.Value,
					unit: w.Metric.Unit,
				},
				desc: wText,
			});
		}
		dispatch(setFavorites(fav));
	};

	const changeTheme = () => {
		const body = document.querySelector("body");
		body.classList.toggle("dark");
	};

	return (
		<div className="main">
			<div className="wrapper-upper">
				<SearchBar changeUpdate={changeUpdate} />
				<Button
					variant="outlined"
					onClick={changeTheme}
					className="changeThemeBtn"
				>
					Change Theme
				</Button>
			</div>
			<div className="wrapper">
				{!error ? (
					!isLoading ? (
						city ? (
							<>
								<section className="section-first">
									<div className="left">
										{weatherIcon ? (
											<img
												className="img"
												src={`https://www.accuweather.com/images/weathericons/${weatherIcon}.svg`}
												alt="weather Icon"
											/>
										) : null}
										<div>
											<h1>{city}</h1>
											<p>
												{value}&deg;
												<small>{unit}</small>
											</p>
										</div>
									</div>
									<div className="fav-wrapper">
										<Favorite className={isFav ? "fav-icon" : ""} />
										<Button onClick={addToFavorite} className="favoriteBtn">
											Add to favorite
										</Button>
									</div>
								</section>
								<section className="section-second">
									<h3>{wText}</h3>
								</section>
								<section className="section-third">
									<FiveDays arr={f} />
								</section>
							</>
						) : (
							"No data found"
						)
					) : (
						"Loading..."
					)
				) : (
					"Sorry, some error happened"
				)}
			</div>
		</div>
	);
};

export default Main;
