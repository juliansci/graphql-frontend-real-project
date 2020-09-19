import React from 'react';
import './App.css';
import Content from './components/Layout/Content';
import Header from './components/Layout/Header';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Home />
      </Content>
    </div>
  );
}

export default App;
