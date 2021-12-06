import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/actions/data";

import { celsiusToFahrenheit } from "../../util/helper";
import { useNavigate } from "react-router-dom";
import "./favorites.scss";

const Favorites = (props) => {
	const favorites = useSelector(({ favorites }) => favorites);
	const degrees = useSelector(({ degrees }) => degrees);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const updateStore = (name) => {
		// console.log(name);
		dispatch(getData(name));
		props.changeUpdate();
		navigate("/");
	};

	return (
		<div className={favorites.length ? "wrapper-fav" : ""}>
			{favorites.map((data) => (
				<div
					key={data.city}
					className="card"
					onClick={() => updateStore(data.city)}
				>
					<h3>{data.city}</h3>
					<p>
						{degrees === "F" && data.temperature.unit !== "F"
							? celsiusToFahrenheit(data.temperature.value)
							: data.temperature.value}
						&deg; <small>{degrees}</small>
					</p>
					<p>{data.desc}</p>
				</div>
			))}
		</div>
	);
};

export default Favorites;
