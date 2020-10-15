import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Main from './Main';
import DataList from './DataList';

import '../styles/normalize.css';
import '../styles/App.css';
import '../styles/all.min.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/main-page">
            <Main />
          </Route>
          <Route path="/browse-submitted-data">
            <DataList />
          </Route>
          <Redirect from="/" to="/main-page" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
