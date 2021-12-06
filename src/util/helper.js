export const celsiusToFahrenheit = (celsius) =>
	Math.floor((celsius * 9) / 5 + 32);

export const fahrenheitToCelsius = (fahrenheit) =>
	Math.floor(((fahrenheit - 32) * 5) / 9);
