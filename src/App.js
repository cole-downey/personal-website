import React from 'react';
import './App.css';
import Header from './components/header';
import aboutMe from './containers/about-me';
import { StylesProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <StylesProvider injectFirst>
      <Header />
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <aboutMe />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;
