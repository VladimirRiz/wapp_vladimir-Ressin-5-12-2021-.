import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFiveDays } from "../../store/actions/favorites";
import FiveDays from "./FiveDays";
import "./main.scss";

const Main = ({ city, wText, temperature, fiveDays }) => {
	const [fav, setFav] = useState();
	const dispatch = useDispatch();
	const favorites = useSelector(({ favorites }) => favorites);

	useEffect(() => {
		setFav(favorites);
	}, [favorites]);

	const addToFavorite = () => {
		if (fav.some((f) => f.city === city?.LocalizedName)) {
			const index = fav.findIndex((f) => f.city === city?.LocalizedName);
			fav.splice(index, 1);
		} else {
			fav.push({
				city: city?.LocalizedName,
				temperature: {
					value: temperature.Metric.Value,
					unit: temperature.Metric.Unit,
				},
				desc: wText,
			});
		}
		dispatch(setFiveDays(fav));
	};

	return (
		<div className="wrapper">
			<div className="section-first">
				<div>
					<h1>{city?.LocalizedName}</h1>
					<p>
						{temperature.Metric.Value}&deg;
						<small>{temperature.Metric.Unit}</small>
					</p>
				</div>
				<div>
					<button onClick={addToFavorite}>Click</button>
				</div>
			</div>
			<div>{wText}</div>
			<div className="days">
				<FiveDays arr={fiveDays} />
			</div>
		</div>
	);
};

export default Main;
