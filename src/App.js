import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import NavBar from './components/layout/NavBar';
import DashBoard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import SearchBar from './components/search/SearchBar';

import backgroundImage from './pattern.png'

class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App" style={{ background: `url(${backgroundImage})`}}>
        <NavBar />
        <div className="container">
          <Switch> 
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
      </Router>
    )
  }
}

export default App;
