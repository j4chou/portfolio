import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Footer from './Footer/index';
import Home from './Home/index';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Nav from './Nav/index';
import '../styles/base.scss'

class App extends Component {
  renderMainContent = () => {
    const pathname = this.props.location.pathname.toLowerCase();

    switch (pathname) {
      case '/about': 
        return <About />;
      case '/contact':
        return <Contact />;
      case '/projects':
        return <Projects />;
    }
  }
  render() {
    return (
      <div className="App">
        <main>
        <Home />
          <div>
            { this.renderMainContent() }
          </div>
        </main>
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
