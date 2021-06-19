import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './components/LoginComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="App-header">
        <Router>
          <div>
            <LoginComponent />
          </div>

        </Router>
      </div>
      <FooterComponent />
    </div>

  );
}

export default App;
