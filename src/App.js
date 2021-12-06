import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getData } from "./store/actions/data";
import { getWeather } from "./store/actions/weather";
import { getFiveDays } from "./store/actions/fiveDays";
import Header from "./components/Header/index";
import Main from "./components/Main/Main";
import Favorites from "./components/Favorites/Favorites";

function App() {
	const [update, setUpdate] = useState(false);
	const [fiveDayss, setFiveDays] = useState();
	const [w, setWeather] = useState([]);
	const data = useSelector(({ data }) => data);
	const weather = useSelector(({ weather }) => weather);
	const fiveDays = useSelector(({ fiveDays }) => fiveDays);
	const dispatch = useDispatch();

	useEffect(() => {
		setFiveDays(fiveDays);
	}, [fiveDays]);
	useEffect(() => {
		setWeather(weather);
	}, [weather]);

	useEffect(() => {
		console.log(data[0]?.Key, update);
		if (data[0]?.Key && update) {
			console.log("here");
			dispatch(getWeather(data[0].Key));
			dispatch(getFiveDays(data[0].Key));
			setUpdate(false);
		}
	}, [data.Key, update, dispatch]);

	const changeUpdate = () => setUpdate(true);

	useEffect(() => {
		const load = async () => {
			dispatch(getData("Tel-Aviv"));
		};
		if (!data.length) {
			load();
		}
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
								changeUpdate={changeUpdate}
								weatherIcon={w[0]?.WeatherIcon}
								city={data[0]?.AdministrativeArea}
								wText={w[0]?.WeatherText}
								temperature={w[0]?.Temperature}
								fiveDays={fiveDayss?.DailyForecasts}
							/>
						}
						path="/"
						exact
					/>
					<Route
						element={<Favorites changeUpdate={changeUpdate} />}
						path="/favorites"
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
