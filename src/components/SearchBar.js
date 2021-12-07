import { useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../store/actions/data";
import TextField from "@mui/material/TextField";

const SearchBar = (props) => {
	const [text, setText] = useState(``);
	const dispatch = useDispatch();

	const updateStore = () => {
		dispatch(getData(text));
	};

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
