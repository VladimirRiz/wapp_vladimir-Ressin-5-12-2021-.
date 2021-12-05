import * as actionTypes from "./actionsTypes";

export const setFavorites = (data) => {
	return {
		type: actionTypes.SET_FAVORITE,
		payload: data,
		loading: false,
	};
};
