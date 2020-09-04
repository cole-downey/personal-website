import React from 'react';
import './App.css';
import Header from './components/header';
import AboutMe from './containers/about-me/aboutMe';
import { StylesProvider, Grid } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const pages = [
  {
    url: "/",
    title: "Home",
    index: 0,
    cont: <div />,
  }, {
    url: "/about",
    title: "About Me",
    index: 1,
    cont: <AboutMe />,
  }, {
    url: "/portfolio",
    title: "Portfolio",
    index: 2,
    cont: <AboutMe />,
  }, {
    url: "/technical-qualifications",
    title: "Technical Qualifications",
    index: 3,
    cont: <AboutMe />,
  }, {
    url: "/service",
    title: "Service",
    index: 4,
    cont: <AboutMe />,
  },
]
// `/~coledowney${page.url}`
function App() {
  return (
    <StylesProvider injectFirst>
      <Header pages={pages} />
      <Grid container xs={12}>
        <Router basename="/~coledowney">
          <Switch>
            {pages.map((page) => (
              <Route exact path={page.url} key={page.index}>{page.cont}</Route>
            ))}
          </Switch>
        </Router>
      </Grid>
    </StylesProvider>
  );
}

export default App;
