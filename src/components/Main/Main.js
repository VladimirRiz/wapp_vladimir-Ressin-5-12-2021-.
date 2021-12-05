import FiveDays from "./FiveDays";
import "./main.scss";

const Main = ({ city, wText, temperature, fiveDays }) => {
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
					<button>Click</button>
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
