import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, } from "react-router-dom";
// ES5

function Home() {
  return <h2>Home</h2>;
}
function Html() {
  return <h2>HtmlDefinition</h2>;
}
function Css() {
  return <h2>CssDefinition</h2>;
}
function Js() {
  return <h2>JsDefinition</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink activeStyle={{fontWeight: "bold", color: "Red"}} exact to="/">Home </NavLink>
              
            </li>
              <li>
              <NavLink activeStyle={{fontWeight: "bold", color: "Green"}} to="/Html/">Html</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{fontWeight: "bold", color: "Blue"}}to="/Css/">Css</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{fontWeight: "bold", color: "Grey"}}to="/Js/">Js</NavLink>
            </li>
          </ul>
        </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Html" component={Html} />
        <Route path="/Css" component={Css} />
        <Route path="/Js" component={Js} />
      </Switch>
        
      </div>
      
    </Router>
  );
}

export default AppRouter;

