import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Footer from './Footer/index';
import Home from './Home/index';
import About from './About/index';
import Contact from './Contact';
import Projects from './Projects/index';
import Nav from './Nav/index';
import './../styles/base.scss';
import './../styles/app.scss';

class App extends Component {

  renderMainContent = () => {
    const pathname = this.props.location.pathname.toLowerCase();
    console.log('browserHsitory', browserHistory);
    switch (pathname) {
      case '/contact':
        this.scrollToBottom();
        return;
      case '/projects':
        return <Projects />;
      case '/about':
        return <About />;
      default:
        return <About />;
    }
  }

  scrollToBottom = () => {
    var body = document.body;
    document.body.scrollTop = body.scrollHeight;
  }

  render() {
    return (
      <div className="App">
        <Home />
          <Nav />
        <main>
          <div className="main-content">
            {this.renderMainContent()}
          </div>
          <div className='bottom-content'>
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
