// const days = (num) => {
//     switch(num){
//         case 0:
//             return:
//     }
// }

import "./five-days.scss";

const FiveDays = ({ arr }) =>
	arr?.map((data, i) => {
		const date = new Date(data.Date).toLocaleDateString("en-En", {
			weekday: "long",
		});
		return (
			<div className="card-wrapper" key={date}>
				<h3>{date.slice(0, 3)}</h3>
				<p>
					{data.Temperature.Minimum.Value}&deg;{" "}
					<small>{data.Temperature.Minimum.Unit}</small>
				</p>
			</div>
		);
	});

export default FiveDays;
