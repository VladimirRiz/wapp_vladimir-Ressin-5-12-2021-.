import { useDispatch, useSelector } from "react-redux";
import { setName, setUpdate } from "../../store/actions/data";
import { celsiusToFahrenheit } from "../../util/helper";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import "./favorites.scss";

const Favorites = () => {
	const favorites = useSelector(({ favorites }) => favorites);
	const degrees = useSelector(({ degrees }) => degrees);
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const updateStore = (name) => {
		// console.log(name);
		dispatch(setName(name));
		dispatch(setUpdate(true));
		if (!state.loading) {
			setTimeout(() => navigate("/"), 0);
		}
	};

	return (
		<div className={favorites.length ? "wrapper-fav" : ""}>
			{state.loading ? (
				<CircularProgress className="loading" />
			) : (
				favorites.map((data) => (
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
				))
			)}
		</div>
	);
};

export default Favorites;
