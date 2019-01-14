import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import SearchBarContainer from './containers/form/SearchBarContainer';

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
         {/* el form */}
         <SearchBarContainer />
         {/* la tabla */}
        </div>
      </Provider> 
    );
  }
}

export default App;
