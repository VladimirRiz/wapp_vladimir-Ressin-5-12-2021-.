import { useSelector } from "react-redux";

const Favorites = () => {
	const favorites = useSelector(({ favorites }) => favorites);
	return (
		<>
			{favorites.map((data) => (
				<div key={data.city}>
					<h3>{data.city}</h3>
					<p>
						{data.temperature.value}&deg; <small>{data.temperature.unit}</small>
					</p>
				</div>
			))}
		</>
	);
};

export default Favorites;
