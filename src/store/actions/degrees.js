import * as actionTypes from "./actionsTypes";

export const setDegrees = (data) => {
	return {
		type: actionTypes.SET_DEGREES,
		payload: data,
		loading: false,
	};
};
