import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import HtmlDefinition from './HtmlDefinition'
import CssDefinition from './CssDefinition'
import JsDefinition from './JsDefinition'

const home = () => {
  return <h1>No Place Like Home</h1>
}




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>

            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/HtmlDefinition/'>HTML</Link>
            </li>

            <li>
              <Link to='/CssDefinition/'>CSS</Link>
            </li>

            <li>
              <Link to='/JsDefinition/'>Javascript</Link>
            </li>

          </ul>

          <Route exact path='/' component={home} />

          <Route path='/HtmlDefinition/' component={HtmlDefinition} />

          <Route path='/CssDefinition/' component={CssDefinition} />

          <Route path='/JsDefinition/' component={JsDefinition} />

        </div>
      </Router>
    );
  }
}

export default App;
