import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const setWeather = (weather) => {
	return {
		type: actionTypes.SET_WEATHER,
		weather: weather,
		loading: false,
	};
};

const setLoading = (loading) => {
	return {
		type: actionTypes.SET_LOADING,
		loading: loading,
	};
};

export const getWeatherFailed = () => {
	return {
		type: actionTypes.GET_WEATHER_FAILED,
		error: true,
	};
};

export const getWeather = (id) => {
	return async (dispatch) => {
		try {
			// dispatch(setLoading(true));
			const res = await axios.get(
				`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=68w4it9WucrjXCWCs5TApU3PtQNOf66n`
			);
			// dispatch(setLoading(false));
			dispatch(setWeather(res.data));
		} catch (err) {
			dispatch(setLoading(false));
			dispatch(getWeatherFailed());
		}
	};
};
