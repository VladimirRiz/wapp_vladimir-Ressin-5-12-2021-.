import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/actions/data";
import { getWeather } from "../store/actions/weather";
import { getFiveDays } from "../store/actions/fiveDays";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
	const [text, setText] = useState(``);
	const dispatch = useDispatch();
	const loading = useSelector(({ loading }) => loading);
	const data = useSelector(({ data }) => data[0]);

	const updateStore = () => {
		dispatch(getData(text));
	};

	// useEffect(() => {
	// 	if (!loading) {
	// 		dispatch(getWeather(data.Key));
	// 		dispatch(getFiveDays(data.Key));
	// 	}
	// }, [data, loading]);

	const onChange = ({ target }) => {
		setText(target.value);
	};
	return (
		<TextField
			value={text}
			onChange={onChange}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					updateStore();
				}
			}}
			InputProps={{
				className: "search",
			}}
		/>
	);
};

export default SearchBar;
