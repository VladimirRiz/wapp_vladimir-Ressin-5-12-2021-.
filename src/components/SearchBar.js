import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/actions/data";
import { getWeather } from "../store/actions/weather";
import { getFiveDays } from "../store/actions/fiveDays";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
	const [text, setText] = useState(``);
	const [id, setId] = useState("");
	const dispatch = useDispatch();
	const store = useSelector((state) => state);
	const key = useSelector(({ data }) => data[0].Key);

	useEffect(() => {
		setId(key);
	}, [key]);

	const updateStore = async () => {
		await dispatch(getData(text));
		if (!store.loading && !store.error) {
			await dispatch(getWeather(id));
			await dispatch(getFiveDays(id));
		}
	};

	const update = async () => {};

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
					update();
				}
			}}
		/>
	);
};

export default SearchBar;
