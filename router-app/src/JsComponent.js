import React, {Component} from 'react';

class JsComponent extends Component {
    render() {
      return (
          <div style={{padding:'50px'}}>
          <h1>JS</h1>
          <p>Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it.

          As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has APIs for working with text, arrays, dates, regular expressions, and the DOM, but the language itself does not include any I/O, such as networking, storage, or graphics facilities. It relies upon the host environment in which it is embedded to provide these features.</p>
          <img src='https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png' alt='JS'/>
          </div>
      );
    }
  }
  
  export default JsComponent;