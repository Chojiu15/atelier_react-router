import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import HomeComponent from './HomeComponent';
import HtmlComponent from './HtmlComponent';
import CssComponent from './CssComponent';
import JsComponent from './JsComponent';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul style={{display:'flex', justifyContent:'space-around', listStyleType:'none'}}>
            <li>
              <NavLink activeStyle={{fontWeight:'bold'}} exact to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{fontWeight:'bold'}} to="/html"> HTML </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{fontWeight:'bold'}} to="/css"> CSS </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{fontWeight:'bold'}} to="/js"> JS </NavLink>
            </li>
          </ul>

          <Route exact path='/' component={HomeComponent}></Route>
          <Route exact path='/html' component={HtmlComponent}></Route>
          <Route exact path='/css' component={CssComponent}></Route>
          <Route exact path='/js' component={JsComponent}></Route>
          
        </div>
      </Router>
    );
  }
}

export default App;
