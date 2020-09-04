import React from 'react';
import './App.css';
import Header from './components/header';
import AboutMe from './containers/about-me/aboutMe';
import { StylesProvider, Grid, Box, MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

const pages = [
  {
    url: "/~coledowney/",
    title: "Home",
    index: 0,
    cont: <div />,
  }, {
    url: "/~coledowney/about",
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
];

// `/~coledowney${page.url}`
function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={themeDark}>
        <CssBaseline />
        <Header pages={pages} />
        <Grid container justify="center" xs={12}>
          <Router>
            <Switch>
              {pages.map((page) => (
                <Route exact path={page.url} key={page.index}>{page.cont}</Route>
              ))}
            </Switch>
          </Router>
        </Grid>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
