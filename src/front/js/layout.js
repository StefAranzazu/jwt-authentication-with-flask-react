import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { CharacterDetails } from "./views/singleCharacter.jsx";
import { PlanetsDetails } from "./views/singlePlanet.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Login from "./views/login";
import Register from "./views/register";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Login />
						</Route>
						<Route exact path="/sign-up">
							<Register />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/chardetails/:thename" component={CharacterDetails} />
						<Route exact path="/pladetails/:thename" component={PlanetsDetails} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
