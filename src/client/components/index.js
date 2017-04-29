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

const history = [];

const getPreviousLocation = (arr) => {
  var lastPath = arr[arr.length-2];
  switch (lastPath) {
    case '/':
    case '/about':
      return <About />;
    case '/projects':
      return <Projects />;
  }
}

class App extends Component {

  scrollToBottom = () => {
    var body = document.body;
    document.body.scrollTop = body.scrollHeight;
  }

  renderMainContent = () => {
    const pathname = this.props.location.pathname.toLowerCase();
    history.push(pathname);

    switch (pathname) {
      case '/contact':
        this.scrollToBottom();
        return getPreviousLocation(history);
      case '/projects':
        return <Projects />;
      case '/about':
        return <About />;
      default:
        return <About />;
    }
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
