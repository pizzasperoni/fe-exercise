import React, { Component } from 'react';
import FilterablePlayersTable from './components/FilterablePlayersTable'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <header>
          <h1>Player finder</h1>
        </header>
        <div className="filterable-table">
          <FilterablePlayersTable />
        </div>
      </Provider> 
    );
  }
}

export default App;
