import React from 'react';
import './App.css';
import Header from './components/header';
import AboutMe from './containers/about-me/aboutMe';
import { StylesProvider, Grid } from '@material-ui/core';
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
      <Grid container xs={12}>
        <Router>
          <Switch>
            <Route path="/about">
              <AboutMe />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </StylesProvider>
  );
}

export default App;
