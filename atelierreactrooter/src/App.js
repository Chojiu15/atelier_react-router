import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import './App.css';
import CssDefinition from './CssDefinition';
import JsDefinition from './JsDefinition';
import Home from './Home';
import HtmlDefinition from './HtmlDefinition';
import Header from './Header';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/htmlDef' component={HtmlDefinition} />
					<Route path='/cssDef' component={CssDefinition} />
					<Route path='/JsDef' component={JsDefinition} />
				</Switch>
			</div>
		);
	}
}

export default App;
