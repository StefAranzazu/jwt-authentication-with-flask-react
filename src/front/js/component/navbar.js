import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand navbar-light bg-light">
			<Link to="/" className="navbar-brand">
				<img
					src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
					width="100"
					height="60"
				/>
			</Link>
			{store.isAuthenticate ? (
				<div>
					<ul className="log navbar-nav">
						<li className="nav-item active ">
							<Link to="/" className="btn btn-outline-success float-right">
								Log in
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/sign-up" className="SingOff btn btn-outline-success float-right">
								Sign up
							</Link>
						</li>
					</ul>
				</div>
			) : (
				<>
					<div className="log navbar-nav">
						<button
							className="btn btn-primary nav-link dropdown-toggle"
							type="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites <span className="badge badge-secondary">{store.favorites.length}</span>
						</button>
						<div className={store.favorites.length > 0 ? "al dropdown-menu show" : "d-none"}>
							{store.favorites.map((value, index) => {
								return (
									<li key={index}>
										{value}
										<i className="fas fa-trash" onClick={() => actions.delFav(value)} />
									</li>
								);
							})}
						</div>
					</div>
					<div className="nav-item">
						<Link to="/" className="SingOff btn btn-outline-secondary" type="button">
							Sign Off
						</Link>
					</div>
				</>
			)}
		</nav>
	);
};
