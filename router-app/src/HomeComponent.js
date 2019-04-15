import React, {Component} from 'react';

class HomeComponent extends Component {
    render() {
      return (
          <div style={{padding:'50px'}}>
          <h1>Home</h1>
          <p>Front-end and back-end are terms used to characterize program interfaces and services relative to the initial user of these interfaces and services. (The "user" may be a human being or a program.) A "front-end" application is one that application users interact with directly. A "back-end" application or program serves indirectly in support of the front-end services, usually by being closer to the required resource or having the capability to communicate with the required resource. The back-end application may interact directly with the front-end or, perhaps more typically, is a program called from an intermediate program that mediates front-end and back-end activities.</p>
            <img src="https://oschool.ci/wp-content/uploads/2018/03/frontend-and-backend-diagram.png" alt='frontend'/>
          </div>
      );
    }
  }
  
  export default HomeComponent;