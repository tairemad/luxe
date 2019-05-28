import React from 'react';
import './App.css';

import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
