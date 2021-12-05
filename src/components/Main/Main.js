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
	const dispatch = useDispatch();
	const favorites = useSelector(({ favorites }) => favorites);

	useEffect(() => {
		setFav(favorites);
		if (fav?.some((f) => f.city === city?.LocalizedName)) {
			setIsFav(true);
		}
	}, [favorites, fav, city]);

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
					value: temperature.Metric.Value,
					unit: temperature.Metric.Unit,
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
				<section className="section-first">
					<div className="left">
						<img
							className="img"
							src={`https://www.accuweather.com/images/weathericons/${weatherIcon}.svg`}
							alt="weather Icon"
						/>
						<div>
							<h1>{city?.LocalizedName}</h1>
							<p>
								{temperature?.Metric?.Value}&deg;
								<small>{temperature?.Metric?.Unit}</small>
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
					<FiveDays arr={fiveDays} />
				</section>
			</div>
		</div>
	);
};

export default Main;
