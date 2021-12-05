import * as actionTypes from "./actionsTypes";

export const setFiveDays = (data) => {
	return {
		type: actionTypes.SET_FAVORITE,
		payload: data,
		loading: false,
	};
};
