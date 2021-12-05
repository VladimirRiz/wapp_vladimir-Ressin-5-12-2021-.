import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const setFiveDays = (data) => {
	return {
		type: actionTypes.SET_FIVE_DAYS,
		fiveDays: data,
		loading: false,
	};
};

const setLoading = (loading) => {
	return {
		type: actionTypes.SET_LOADING,
		loading: loading,
	};
};

export const getFiveDaysFailed = () => {
	return {
		type: actionTypes.GET_FIVE_DAYS_FAILED,
		error: true,
	};
};

export const getWeather = (id) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const res = await axios.get(
				`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=LBgTiVVoX2iKME7y5oM44ywuEQGDjNwL`
			);
			dispatch(setLoading(false));
			dispatch(setFiveDays(res.data));
		} catch (err) {
			dispatch(setLoading(false));
			dispatch(getFiveDaysFailed());
		}
	};
};
