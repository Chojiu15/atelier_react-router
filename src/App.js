import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <p>
      Lorsque l'on parle de «Front-End», il s'agit finalement des éléments du
      site que l'on voit à l'écran et avec lesquels on peut interagir. Ces
      éléments sont composés de HTML, CSS et de Javascript contrôlés par le
      navigateur web de l'utilisateur.
    </p>
  );
};

const HtmlDefinition = () => {
  return (
    <p>
      Langage de balisage utilisé pour la création de pages web, permettant
      notamment de définir des liens hypertextes.
    </p>
  );
};

const CssDefinition = () => {
  return (
    <p>
      Les feuilles de style en cascade, généralement appelées CSS de l'anglais
      Cascading Style Sheets, forment un langage informatique qui décrit la
      présentation des documents HTML et XML. Les standards définissant CSS sont
      publiés par le World Wide Web Consortium.
    </p>
  );
};

const JsDefinition = () => {
  return (
    <p>
      Le JavaScript est un langage informatique utilisé sur les pages web. Ce
      langage à la particularité de s'activer sur le poste client, en d'autres
      mots c'est votre ordinateur qui va recevoir le code et qui devra
      l'exécuter. C'est en opposition à d'autres langages qui sont activé côté
      serveur.
    </p>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to="/" activeStyle={{ color: "blue", fontWeight: "bold" }}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/html"
            activeStyle={{ color: "blue", fontWeight: "bold" }}
          >
            HTML
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/css"
            activeStyle={{ color: "blue", fontWeight: "bold" }}
          >
            CSS
          </NavLink>
        </li>
        <li>
          <NavLink to="/js" activeStyle={{ color: "blue", fontWeight: "bold" }}>
            JS
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/html" component={HtmlDefinition} />
        <Route path="/css" component={CssDefinition} />
        <Route path="/js" component={JsDefinition} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
