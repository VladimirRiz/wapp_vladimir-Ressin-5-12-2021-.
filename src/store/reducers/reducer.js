import * as actionTypes from "../actions/actionsTypes";

const initialState = {
	data: [
		{
			Version: 1,
			Key: "215793",
			Type: "City",
			Rank: 95,
			LocalizedName: "Tel-aviv Port",
			Country: {
				ID: "IL",
				LocalizedName: "Israel",
			},
			AdministrativeArea: {
				ID: "TA",
				LocalizedName: "Tel Aviv",
			},
		},
	],
	weather: [
		{
			LocalObservationDateTime: "2021-12-05T17:56:00+02:00",
			EpochTime: 1638719760,
			WeatherText: "Some clouds",
			WeatherIcon: 36,
			HasPrecipitation: false,
			PrecipitationType: null,
			IsDayTime: false,
			Temperature: {
				Metric: {
					Value: 18.9,
					Unit: "C",
					UnitType: 17,
				},
				Imperial: {
					Value: 66,
					Unit: "F",
					UnitType: 18,
				},
			},
			MobileLink:
				"http://www.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us",
			Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/current-weather/215793?lang=en-us",
		},
	],
	fiveDays: {
		Headline: {
			EffectiveDate: "2021-12-08T13:00:00+02:00",
			EffectiveEpochDate: 1638961200,
			Severity: 4,
			Text: "Expect showery weather Wednesday afternoon through Thursday morning",
			Category: "rain",
			EndDate: "2021-12-09T13:00:00+02:00",
			EndEpochDate: 1639047600,
			MobileLink:
				"http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?lang=en-us",
			Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?lang=en-us",
		},
		DailyForecasts: [
			{
				Date: "2021-12-05T07:00:00+02:00",
				EpochDate: 1638680400,
				Temperature: {
					Minimum: {
						Value: 55,
						Unit: "F",
						UnitType: 18,
					},
					Maximum: {
						Value: 73,
						Unit: "F",
						UnitType: 18,
					},
				},
				Day: {
					Icon: 13,
					IconPhrase: "Mostly cloudy w/ showers",
					HasPrecipitation: true,
					PrecipitationType: "Rain",
					PrecipitationIntensity: "Moderate",
				},
				Night: {
					Icon: 36,
					IconPhrase: "Intermittent clouds",
					HasPrecipitation: true,
					PrecipitationType: "Rain",
					PrecipitationIntensity: "Light",
				},
				Sources: ["AccuWeather"],
				MobileLink:
					"http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=1&lang=en-us",
				Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=1&lang=en-us",
			},
			{
				Date: "2021-12-06T07:00:00+02:00",
				EpochDate: 1638766800,
				Temperature: {
					Minimum: {
						Value: 64,
						Unit: "F",
						UnitType: 18,
					},
					Maximum: {
						Value: 71,
						Unit: "F",
						UnitType: 18,
					},
				},
				Day: {
					Icon: 6,
					IconPhrase: "Mostly cloudy",
					HasPrecipitation: false,
				},
				Night: {
					Icon: 35,
					IconPhrase: "Partly cloudy",
					HasPrecipitation: false,
				},
				Sources: ["AccuWeather"],
				MobileLink:
					"http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=2&lang=en-us",
				Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=2&lang=en-us",
			},
			{
				Date: "2021-12-07T07:00:00+02:00",
				EpochDate: 1638853200,
				Temperature: {
					Minimum: {
						Value: 58,
						Unit: "F",
						UnitType: 18,
					},
					Maximum: {
						Value: 75,
						Unit: "F",
						UnitType: 18,
					},
				},
				Day: {
					Icon: 6,
					IconPhrase: "Mostly cloudy",
					HasPrecipitation: false,
				},
				Night: {
					Icon: 34,
					IconPhrase: "Mostly clear",
					HasPrecipitation: false,
				},
				Sources: ["AccuWeather"],
				MobileLink:
					"http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=3&lang=en-us",
				Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=3&lang=en-us",
			},
			{
				Date: "2021-12-08T07:00:00+02:00",
				EpochDate: 1638939600,
				Temperature: {
					Minimum: {
						Value: 57,
						Unit: "F",
						UnitType: 18,
					},
					Maximum: {
						Value: 67,
						Unit: "F",
						UnitType: 18,
					},
				},
				Day: {
					Icon: 13,
					IconPhrase: "Mostly cloudy w/ showers",
					HasPrecipitation: true,
					PrecipitationType: "Rain",
					PrecipitationIntensity: "Light",
				},
				Night: {
					Icon: 40,
					IconPhrase: "Mostly cloudy w/ showers",
					HasPrecipitation: true,
					PrecipitationType: "Rain",
					PrecipitationIntensity: "Heavy",
				},
				Sources: ["AccuWeather"],
				MobileLink:
					"http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=4&lang=en-us",
				Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=4&lang=en-us",
			},
			{
				Date: "2021-12-09T07:00:00+02:00",
				EpochDate: 1639026000,
				Temperature: {
					Minimum: {
						Value: 58,
						Unit: "F",
						UnitType: 18,
					},
					Maximum: {
						Value: 68,
						Unit: "F",
						UnitType: 18,
					},
				},
				Day: {
					Icon: 14,
					IconPhrase: "Partly sunny w/ showers",
					HasPrecipitation: true,
					PrecipitationType: "Rain",
					PrecipitationIntensity: "Light",
				},
				Night: {
					Icon: 34,
					IconPhrase: "Mostly clear",
					HasPrecipitation: false,
				},
				Sources: ["AccuWeather"],
				MobileLink:
					"http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=5&lang=en-us",
				Link: "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=5&lang=en-us",
			},
		],
	},
	loading: false,
	error: false,
	favorites: [],
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
		case actionTypes.SET_WEATHER:
			return {
				...state,
				weather: [action.data],
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
				fiveDays: [action.data],
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
				favorites: [action.payload, ...state.favorites],
			};
		default:
			return state;
	}
};

export default reducer;
