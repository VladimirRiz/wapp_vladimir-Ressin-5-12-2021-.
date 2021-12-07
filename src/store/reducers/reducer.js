import * as actionTypes from "../actions/actionsTypes";

const initialState = {
	data: [],
	loading: false,
	error: false,
	favorites: [],
	degrees: "C",
	update: false,
	name: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_DATA:
			return {
				...state,
				data: action.data,
				error: false,
			};
		case actionTypes.GET_DATA_FAILED:
			return {
				...state,
				error: true,
			};
		case actionTypes.SET_LOADING:
			return {
				...state,
				loading: action.loading,
			};
		case actionTypes.SET_FAVORITE:
			return {
				...state,
				favorites: action.payload,
			};
		case actionTypes.SET_DEGREES:
			return {
				...state,
				degrees: action.payload,
			};
		case actionTypes.SET_UPDATE:
			return {
				...state,
				update: action.payload,
			};
		case actionTypes.SET_NAME:
			return {
				...state,
				name: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
