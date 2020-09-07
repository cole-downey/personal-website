import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './containers/about-me/AboutMe';
import Portfolio from './containers/portfolio/Portfolio';
import Qualifications from './containers/qualifications/Qualifications';
import Service from './containers/service-page/Service';
import { StylesProvider, Grid, MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import {
  HashRouter as Router,
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
    url: '/',
    title: "Home",
    index: 0,
    cont: AboutMe,
  }, {
    url: '/about',
    title: "About Me",
    index: 1,
    cont: AboutMe,
  }, {
    url: '/portfolio',
    title: "Portfolio",
    index: 2,
    cont: Portfolio,
  }, {
    url: '/qualifications',
    title: "Qualifications",
    index: 3,
    cont: Qualifications,
  }, {
    url: '/service',
    title: "Service",
    index: 4,
    cont: Service,
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
