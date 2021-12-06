import { useSelector } from "react-redux";
import "./five-days.scss";

const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const fahrenheitToCelsius = (fahrenheit) =>
	Math.floor(((fahrenheit - 32) * 5) / 9);

const FiveDays = ({ arr }) =>
	arr?.map((data, i) => {
		const date = new Date(data.Date).toLocaleDateString("en-En", {
			weekday: "long",
		});
		return (
			<div className="card-wrapper" key={date}>
				<h3>{date.slice(0, 3)}</h3>
				<p>
					{data.Temperature.Minimum.Unit !== "F"
						? data.Temperature.Minimum.Value
						: fahrenheitToCelsius(data.Temperature.Minimum.Value)}
					&deg;
					<small>{data.Temperature.Minimum.Unit}</small>
				</p>
			</div>
		);
	});

export default FiveDays;
