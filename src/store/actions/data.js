import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const setData = (data) => {
	return {
		type: actionTypes.SET_DATA,
		data: data,
		loading: false,
	};
};

const setLoading = (loading) => {
	return {
		type: actionTypes.SET_LOADING,
		loading: loading,
	};
};

export const getDataFailed = () => {
	return {
		type: actionTypes.GET_DATA_FAILED,
		error: true,
	};
};

export const setUpdate = (data) => {
	return {
		type: actionTypes.SET_UPDATE,
		payload: data,
	};
};

export const setName = (data) => {
	return {
		type: actionTypes.SET_NAME,
		payload: data,
	};
};

export const getData = (city) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const { data } = await axios.get(
				`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${actionTypes.API}&q=${city}`
			);
			const key = await data[0].Key;

			const fiveDays = await axios.get(
				`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${actionTypes.API}`
			);

			const weather = await axios.get(
				`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${actionTypes.API}`
			);

			// console.log(data, fiveDays, weather);
			// dispatch(setUpdate(true));
			dispatch(setLoading(false));
			dispatch(
				setData({
					data,
					fiveDays: fiveDays.data,
					weather: weather.data,
				})
			);
		} catch (err) {
			dispatch(setLoading(false));
			dispatch(getDataFailed());
		}
	};
};
