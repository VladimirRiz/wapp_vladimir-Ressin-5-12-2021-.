import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import { setDegrees } from "../../store/actions/degrees";
import "./header.scss";

const Header = () => {
	const dispatch = useDispatch();
	const degrees = useSelector(({ degrees }) => degrees);

	const handleChange = ({ target }) => {
		dispatch(setDegrees(target.value));
	};

	const openMenu = () => {
		document.querySelector(".header_wrapper").classList.toggle("open");
	};

	const removeClass = () => {
		document.querySelector(".header_wrapper").classList.remove("open");
	};

	return (
		<>
			<div className="header_wrapper">
				<h1 className="logo">Herolo Weather Task</h1>
				<ToggleButtonGroup
					color="primary"
					value={degrees}
					exclusive
					onChange={handleChange}
					className="switcher"
				>
					<ToggleButton value="C">C</ToggleButton>
					<ToggleButton value="F">F</ToggleButton>
				</ToggleButtonGroup>
				<nav className="nav">
					<NavLink className="nav_link" to="/" onClick={removeClass}>
						Home
					</NavLink>

					<NavLink className="nav_link" to="/favorites" onClick={removeClass}>
						Favorites
					</NavLink>
				</nav>
			</div>
			<div className="mobile_menu">
				<MenuIcon className="mobile_menu_icon" onClick={openMenu} />
			</div>
		</>
	);
};

export default Header;
