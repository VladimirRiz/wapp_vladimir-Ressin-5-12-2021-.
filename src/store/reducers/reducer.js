import * as actionTypes from "../actions/actionsTypes";

const initialState = {
	data: [],
	weather: [],
	fiveDays: {},
	loading: false,
	loadingWeather: false,
	loadingfiveDays: false,
	error: false,
	favorites: [],
	degrees: "C",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_DATA:
			return {
				...state,
				data: [action.data],
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
		case actionTypes.SET_LOADING_FIVE_DAYS:
			return {
				...state,
				loadingfiveDays: action.loadingfiveDays,
			};
		case actionTypes.SET_LOADING_WEATHER:
			return {
				...state,
				loadingWeather: action.loadingWeather,
			};
		case actionTypes.SET_WEATHER:
			return {
				...state,
				weather: action.weather,
				error: false,
			};
		case actionTypes.GET_WEATHER_FAILED:
			return {
				...state,
				error: true,
			};
		case actionTypes.SET_FIVE_DAYS:
			return {
				...state,
				fiveDays: action.fiveDays,
				error: false,
			};
		case actionTypes.GET_FIVE_DAYS_FAILED:
			return {
				...state,
				error: true,
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
		default:
			return state;
	}
};

export default reducer;
