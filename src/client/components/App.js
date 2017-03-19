import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Footer from './Footer';
import Home from './Home';
import About from './About';

class App extends Component {
  renderMainContent = () => {
  console.log('here?')
    const pathname = this.props.location.pathname.toLowerCase();

    switch (pathname) {
      case '/about': 
        return <About />;
      default: 
        return <Home />;
    }
  }
  render() {
    return (
      <div className="App">
      <Home />
      <Footer />
      </div>
    );
  }
}

export default App;
