import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import html from "./HtmlDefinition";
import css from "./CssDefinition";
import js from "./Js";

const App = () => {
	return (
		<Router>
			<ul class='nav'>
				<li>
					<NavLink activeStyle={{ color: "purple" }} to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink activeStyle={{ color: "green" }} to='/HtmlDefinition'>
						Html
					</NavLink>
				</li>
				<li>
					<NavLink activeStyle={{ color: "yellow" }} to='/CssDefinition'>
						CSS
					</NavLink>
				</li>
				<li>
					<NavLink activeStyle={{ color: "red" }} to='/js'>
						JS
					</NavLink>
				</li>
			</ul>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/HtmlDefinition' component={html} />
				<Route path='/CssDefinition' component={css} />
				<Route path='/Js' component={js} />
			</Switch>
		</Router>
	);
};

export default App;
