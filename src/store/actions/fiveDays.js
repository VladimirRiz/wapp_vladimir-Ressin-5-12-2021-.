import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const setFiveDays = (fiveDays) => {
	return {
		type: actionTypes.SET_FIVE_DAYS,
		fiveDays: fiveDays,
		loading: false,
	};
};

const setLoading = (loading) => {
	return {
		type: actionTypes.SET_LOADING_FIVE_DAYS,
		loadingfiveDays: loading,
	};
};

export const getFiveDaysFailed = () => {
	return {
		type: actionTypes.GET_FIVE_DAYS_FAILED,
		error: true,
	};
};

export const getFiveDays = (id) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const res = await axios.get(
				`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=${actionTypes.API}`
			);
			dispatch(setLoading(false));
			dispatch(setFiveDays(res.data));
		} catch (err) {
			dispatch(setLoading(false));
			dispatch(getFiveDaysFailed());
		}
	};
};
