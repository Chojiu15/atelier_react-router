import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import JsDefinition from './JsDefinition';
import CssDefinition from './CssDefinition';
import HtmlDefinition from './HtmlDefinition';
import Home from './Home';

class App extends Component {
	render() {
		return (
			<Router>
				<ul className='navBar'>
					<li>
						<NavLink
							exact
							to='/'
							activeStyle={{
								fontWeight: 'bold',
								color: 'red'
							}}
						>
							home
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							to='/html'
							activeStyle={{
								fontWeight: 'bold',
								color: 'red'
							}}
						>
							html
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							to='/css'
							activeStyle={{
								fontWeight: 'bold',
								color: 'red'
							}}
						>
							Css
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							to='/javascript'
							activeStyle={{
								fontWeight: 'bold',
								color: 'red'
							}}
						>
							javascript
						</NavLink>
					</li>
				</ul>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/html' component={HtmlDefinition} />
					<Route exact path='/css' component={CssDefinition} />
					<Route exact path='/javascript' component={JsDefinition} />
				</Switch>
			</Router>
		);
	}
}

export default App;
