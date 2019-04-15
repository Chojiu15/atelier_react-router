import React, {Component} from 'react';

class HtmlComponent extends Component {
    render() {
      return (
          <div style={{padding:'50px'}}>
          <h1>HTML</h1>
          <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.</p>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png' alt='HTML5'/>
          </div>
      );
    }
  }
  
  export default HtmlComponent;