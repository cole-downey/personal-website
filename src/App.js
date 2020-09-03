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

const pages = [
  {
    url: "/~coledowney/",
    title: "Home",
    index: 0,
    cont: <div />,
  }, {
    url: `${process.env.PUBLIC_URL}/about`,
    title: "About Me",
    index: 1,
    cont: <AboutMe />,
  }, {
    url: "/~coledowney/portfolio",
    title: "Portfolio",
    index: 2,
    cont: <AboutMe />,
  }, {
    url: "/~coledowney/technical-qualifications",
    title: "Technical Qualifications",
    index: 3,
    cont: <AboutMe />,
  }, {
    url: "/~coledowney/service",
    title: "Service",
    index: 4,
    cont: <AboutMe />,
  },
]

function App() {
  return (
    <StylesProvider injectFirst>
      <Header pages={pages} />
      <Grid container xs={12}>
        <Router>
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
