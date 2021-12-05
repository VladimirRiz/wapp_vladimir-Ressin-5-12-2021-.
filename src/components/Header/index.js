import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
	return (
		<div className="header_wrapper">
			<h1>Herolo Weather Task</h1>
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
