import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../store/actions/favorites";
import { Favorite } from "@material-ui/icons";
import Button from "@mui/material/Button";

import FiveDays from "./FiveDays";
import "./main.scss";
import SearchBar from "../SearchBar";

const Main = ({ weatherIcon, city, wText, temperature, fiveDays }) => {
	const [fav, setFav] = useState();
	const [isFav, setIsFav] = useState(false);
	const [w, setW] = useState(temperature);
	const [f, setF] = useState(fiveDays);
	const [value, setValue] = useState();
	const [unit, setUnit] = useState();
	const dispatch = useDispatch();
	const favorites = useSelector(({ favorites }) => favorites);
	const loading = useSelector(({ loading }) => loading);
	const degrees = useSelector(({ degrees }) => degrees);
	const error = useSelector(({ error }) => error);

	useEffect(() => {
		setFav(favorites);
		if (fav?.some((f) => f.city === city?.LocalizedName)) {
			setIsFav(true);
		} else setIsFav(false);
	}, [favorites, fav, city]);

	useEffect(() => {
		setW(temperature);
		setF(fiveDays);
	}, [temperature, fiveDays]);

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
		if (fav.some((f) => f.city === city?.LocalizedName)) {
			const index = fav.findIndex((f) => f.city === city?.LocalizedName);
			fav.splice(index, 1);
			setIsFav(false);
		} else {
			setIsFav(true);
			fav.push({
				city: city?.LocalizedName,
				temperature: {
					value: w.Metric.Value,
					unit: w.Metric.Unit,
				},
				desc: wText,
			});
		}
		dispatch(setFavorites(fav));
	};

	return (
		<div className="main">
			<SearchBar />

			<div className="wrapper">
				{!error ? (
					!loading ? (
						<>
							<section className="section-first">
								<div className="left">
									<img
										className="img"
										src={`https://www.accuweather.com/images/weathericons/7.svg`}
										alt="weather Icon"
									/>
									<div>
										<h1>{city?.LocalizedName}</h1>
										<p>
											{value}&deg;
											<small>{unit}</small>
										</p>
									</div>
								</div>
								<div className="fav-wrapper">
									<Favorite className={isFav ? "fav-icon" : ""} />
									<Button onClick={addToFavorite}>Add to favorite</Button>
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
