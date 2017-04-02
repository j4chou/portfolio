import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Footer from './Footer/index';
import Home from './Home/index';
import About from './About/index';
import Contact from './Contact';
import Projects from './Projects';
import Nav from './Nav/index';
import './../styles/base.scss';
import './../styles/app.scss';

class App extends Component {

  renderMainContent = () => {
    const pathname = this.props.location.pathname.toLowerCase();

    switch (pathname) {
      case '/contact':
        this.scrollToBottom();
      case '/projects':
        return <Projects />;
      default:
        return <About />;
    }
  }

  scrollToBottom = () => {
    const main = document.getElementById('root');
    document.body.scrollTop = main.scrollHeight;
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Home />
          <Nav />
        <main>
          <div className="main-content">
            { this.renderMainContent() }
          </div>
          <Contact />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
