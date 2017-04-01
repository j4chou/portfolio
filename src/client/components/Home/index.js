import React from 'react';
import Header from './../Header/index';
import Icons from './../Icons/index';

const Home = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Icons />
    </div>
  );
};

export default Home;
