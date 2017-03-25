import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Nav from './Nav/index';
import '../styles/base.scss'

class App extends Component {
  renderMainContent = () => {
    const pathname = this.props.location.pathname.toLowerCase();
  console.log('here?', pathname)

    switch (pathname) {
      case '/about': 
        return <About />;
      case '/contact':
        return <Contact />;
      case '/projects':
        return <Projects />;
      default: 
        return <Home />;
    }
  }
  render() {
    return (
      <div className="App">
        <main>
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
