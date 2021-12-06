import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Favorites from "./components/Favorites";

function App() {
	// const [data, setData] = useState();

	// const [weather, setWeather] = useState();

	// const [fiveDays, set5days] = useState();

	const data = useSelector(({ data }) => data);
	const weather = useSelector(({ weather }) => weather);
	const fiveDays = useSelector(({ fiveDays }) => fiveDays);

	console.log(weather[0]);

	useEffect(() => {
		// const load = async () => {
		// 	const res = await axios.get(
		// 		"http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=LBgTiVVoX2iKME7y5oM44ywuEQGDjNwL&q=Tel-Aviv"
		// 	);
		// 	setData(res.data);
		// };
		// if (!data) {
		// 	load();
		// }
	}, []);

	// console.log(data);
	return (
		<BrowserRouter className="App">
			<Header />
			<div className="container">
				<Routes>
					<Route
						element={
							<Main
								weatherIcon={weather[0]?.WeatherIcon}
								city={data[0]?.AdministrativeArea}
								wText={weather[0]?.WeatherText}
								temperature={weather[0]?.Temperature}
								fiveDays={fiveDays?.DailyForecasts}
							/>
						}
						path="/"
						exact
					/>
					<Route element={<Favorites />} path="/favorites" />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
