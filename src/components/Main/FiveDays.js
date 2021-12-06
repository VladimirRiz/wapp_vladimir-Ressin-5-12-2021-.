import { useSelector } from "react-redux";
import { fahrenheitToCelsius } from "../../util/helper";
import "./five-days.scss";

const FiveDays = ({ arr }) => {
	const degrees = useSelector(({ degrees }) => degrees);
	return arr?.map((data, i) => {
		const date = new Date(data.Date).toLocaleDateString("en-En", {
			weekday: "long",
		});
		return (
			<div className="card-wrapper" key={date}>
				<h3>{date.slice(0, 3)}</h3>
				<p>
					{degrees === "F"
						? data.Temperature.Minimum.Value
						: fahrenheitToCelsius(data.Temperature.Minimum.Value)}
					&deg;
					<small>
						{degrees}
						{/* {data.Temperature.Minimum.Unit} */}
					</small>
				</p>
			</div>
		);
	});
};

export default FiveDays;
