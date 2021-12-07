import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getData, setUpdate } from "./store/actions/data";
import Header from "./components/Header/index";
import Main from "./components/Main/Main";
import Favorites from "./components/Favorites/Favorites";

function App() {
	const [data, setData] = useState({});
	const name = useRef("Tel-Aviv");
	const dataStore = useSelector(({ data }) => data);
	const update = useSelector(({ update }) => update);
	const dispatch = useDispatch();
	const nameStore = useSelector(({ name }) => name);

	useEffect(() => {
		const load = async () => {
			dispatch(getData(name.current));
		};
		if (!Object.keys(data).length) {
			load();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (update && nameStore.length) {
			dispatch(getData(nameStore));
			dispatch(setUpdate(false));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [nameStore, update]);

	useEffect(() => {
		setData(dataStore);
	}, [dataStore]);

	return (
		<BrowserRouter className="App">
			<Header />
			<div className="container">
				{Object.keys(data).length ? (
					<Routes>
						<Route
							element={
								<Main
									// changeUpdate={changeUpdate}
									weatherIcon={data?.weather[0]?.WeatherIcon}
									city={data?.data[0]?.LocalizedName}
									wText={data?.weather[0]?.WeatherText}
									temperature={data?.weather[0]?.Temperature}
									fiveDays={data?.fiveDays?.DailyForecasts}
								/>
							}
							path="/"
							exact
						/>
						<Route element={<Favorites />} path="/favorites" />
					</Routes>
				) : null}
			</div>
		</BrowserRouter>
	);
}

export default App;
