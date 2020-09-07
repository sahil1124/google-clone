import React from 'react';

import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search'
import SearchPage from './Pages/SearchPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
