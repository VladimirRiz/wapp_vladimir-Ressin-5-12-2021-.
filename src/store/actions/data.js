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

export const getData = (city) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const res = await axios.get(
				`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=LBgTiVVoX2iKME7y5oM44ywuEQGDjNwL&q=${city}`
			);
			dispatch(setLoading(false));
			dispatch(setData(res.data));
		} catch (err) {
			dispatch(setLoading(false));
			dispatch(getDataFailed());
		}
	};
};
