import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home.jsx';
import HtmlDefinition from './components/HtmlDefinition.jsx';
import CssDefinition from './components/CssDefinition.jsx';
import JsDefinition from './components/JsDefinition.jsx';
import styles from './components/stylus.module.css';

const MyRouter = () => {
	return (
		<Router>
			<div>
				<nav className={styles.navBar}>
					<NavLink activeClassName={styles.activeLink} to='/home'>
						Home
					</NavLink>
					<NavLink activeClassName={styles.activeLink} to='/html'>
						HTML
					</NavLink>
					<NavLink activeClassName={styles.activeLink} to='/css'>
						CSS
					</NavLink>
					<NavLink activeClassName={styles.activeLink} to='/js'>
						Javascript
					</NavLink>
				</nav>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/home' exact component={Home} />
					<Route path='/html' exact component={HtmlDefinition} />
					<Route path='/css' exact component={CssDefinition} />
					<Route path='/js' exact component={JsDefinition} />
				</Switch>
			</div>
		</Router>
	);
};

export default MyRouter;
