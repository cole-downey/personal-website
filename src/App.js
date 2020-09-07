import React from 'react';
import './App.css';
import Header from './components/header';
import AboutMe from './containers/about-me/aboutMe';
import { StylesProvider, Grid, MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
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
      primary: "#ffffff",
      secondary: "#222222"
    }
  }
});

const basePage = process.env.PUBLIC_URL;
const pages = [
  {
    url: `${basePage}/`,
    title: "Home",
    index: 0,
    cont: AboutMe,
  }, {
    url: `${basePage}/about`,
    title: "About Me",
    index: 1,
    cont: AboutMe,
  }, {
    url: `${basePage}/portfolio`,
    title: "Portfolio",
    index: 2,
    cont: AboutMe,
  }, {
    url: `${basePage}/qualifications`,
    title: "Qualifications",
    index: 3,
    cont: AboutMe,
  }, {
    url: `${basePage}/service`,
    title: "Service",
    index: 4,
    cont: AboutMe,
  },
];

// `/~coledowney${page.url}`
function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={themeDark}>
        <CssBaseline />
        <Router>
          <Header pages={pages} />
          <Grid container justify="center" xs={12}>
            <Switch>
              {pages.map((page) => (
                <Route exact path={page.url} key={page.index} component={page.cont} />
              ))}
            </Switch>
          </Grid>
        </Router>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
