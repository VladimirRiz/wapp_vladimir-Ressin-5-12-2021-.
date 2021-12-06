import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { setDegrees } from "../../store/actions/degrees";
import "./header.scss";

const Header = () => {
	const dispatch = useDispatch();
	const degrees = useSelector(({ degrees }) => degrees);

	const handleChange = ({ target }) => {
		dispatch(setDegrees(target.value));
	};
	return (
		<div className="header_wrapper">
			<h1>Herolo Weather Task</h1>
			<ToggleButtonGroup
				color="primary"
				value={degrees}
				exclusive
				onChange={handleChange}
			>
				<ToggleButton value="C">C</ToggleButton>
				<ToggleButton value="F">F</ToggleButton>
			</ToggleButtonGroup>
			<nav className="nav">
				<NavLink className="nav_link" to="/">
					Home
				</NavLink>

				<NavLink className="nav_link" to="/favorites">
					Favorites
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
