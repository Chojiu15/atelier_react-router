import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import './App.css';

const Home = () => {
  return (
    <p>
      Le développement web frontal (aussi appelé front-end en anglais) correspond aux productions HTML, CSS et JavaScript d’une page internet ou d’une application qu’un utilisateur peut voir et avec lesquelles il peut interagir directement.

Le principal défi du développement web frontal est de toujours s'adapter aux dernières évolutions ; les outils et les techniques de développement étant en évolution constante.

La conception des sites internet doit également être capable d’offrir une bonne ergonomie de lecture en facilitant la navigation et l’obtention d’information. Cet objectif est d’autant plus compliqué que les lecteurs utilisent maintenant différentes plateformes de format et de taille variés. Le développeur doit donc s’assurer que le site internet apparait correctement sur l’ensemble des navigateurs Web et des plateformes/appareils disponibles.
    </p>

  )
}

const HtmlDefinition = () => {
  return (
    <p>
      L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web. C’est un langage permettant d’écrire de l’hypertexte, d’où son nom. HTML permet également de structurer sémantiquement et logiquement et de mettre en forme le contenu des pages, d’inclure des ressources multimédias dont des images, des formulaires de saisie et des programmes informatiques. Il permet de créer des documents interopérables avec des équipements très variés de manière conforme aux exigences de l’accessibilité du web. Il est souvent utilisé conjointement avec le langage de programmation JavaScript et des feuilles de style en cascade (CSS). HTML est inspiré du Standard Generalized Markup Language (SGML). Il s'agit d'un format ouvert.
    </p>

  )
}

const CssDefinition = () => {
  return (
    <p>
      Les feuilles de style en cascade1, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. Les standards définissant CSS sont publiés par le World Wide Web Consortium (W3C). Introduit au milieu des années 1990, CSS devient couramment utilisé dans la conception de sites web et bien pris en charge par les navigateurs web dans les années 2000.
    </p>
  )
}

const JsDefiniton = () => {
  return (
    <p>
      JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs2 avec l'utilisation (par exemple) de Node.js3. C'est un langage orienté objet à prototype, c'est-à-dire que les bases du langage et ses principales interfaces sont fournies par des objets qui ne sont pas des instances de classes, mais qui sont chacun équipés de constructeurs permettant de créer leurs propriétés, et notamment une propriété de prototypage qui permet d'en créer des objets héritiers personnalisés. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel. JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 paquets en août 20174.

JavaScript a été créé en 1995 par Brendan Eich. Il a été standardisé sous le nom d'ECMAScript en juin 1997 par Ecma International dans le standard ECMA-262. Le standard ECMA-262 en est actuellement à sa 8e édition. JavaScript n'est depuis qu'une implémentation d'ECMAScript, celle mise en œuvre par la fondation Mozilla. L'implémentation d'ECMAScript par Microsoft (dans Internet Explorer jusqu'à sa version 9) se nomme JScript, tandis que celle d'Adobe Systems se nomme ActionScript.

Avec les technologies HTML et CSS, JavaScript est parfois considéré comme l'une des technologies cœur du World Wide Web5. Le langage JavaScript permet des pages web interactives, et à ce titre est une partie essentielle des applications web. Une grande majorité des sites web l'utilisent6, et la majorité des navigateurs web disposent d'un moteur JavaScript dédié pour l'interpréter, indépendamment des considérations de sécurité qui peuvent se poser le cas échéant.
    </p>

  )
}

const App = () => {
  return (
    <BrowserRouter>
    <ul>
      <li>
        <NavLink exact to='/' activeStyle={{color:'red', fontWeight:'bold'}}>Home</NavLink>
      </li>
      <li>
        <NavLink to='/html'activeStyle={{color:'red', fontWeight:'bold'}}>HTML</NavLink>
      </li>
      <li>
        <NavLink to='/css'activeStyle={{color:'red', fontWeight:'bold'}}>CSS</NavLink>
      </li>
      <li>
        <NavLink to='/js'activeStyle={{color:'red', fontWeight:'bold'}}>JS</NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/html' component={HtmlDefinition} />
      <Route exact path='/css' component={CssDefinition} />
      <Route exact path='/js' component={JsDefiniton} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
