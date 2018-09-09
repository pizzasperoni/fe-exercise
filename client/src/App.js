import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import PlayerForm from './components/PlayerForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar></AppNavbar>
        <div class="container">
          <PlayerForm></PlayerForm>
        </div>
      </div> 
    );
  }
}

export default App;
