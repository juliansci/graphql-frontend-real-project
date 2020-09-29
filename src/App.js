import React from 'react';
import './App.css';
import Content from './components/Layout/Content';
import Header from './components/Layout/Header';
import Router from './components/Router';


function App() {
  return <div className="App">
    <Header />
    <Content>
      <Router />
    </Content>
  </div>;
}

export default App;
