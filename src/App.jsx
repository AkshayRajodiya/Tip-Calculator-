import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Input from './Components/Input';
import Output from './Components/Output';

function App() {
  return (
    <div className="container-sm" >
      <Header className="header" />
      <Input />
      <Footer />

    </div>
  );
}

export default App;
