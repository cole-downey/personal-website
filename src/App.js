import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import { pages } from './utils/pagesList';
import { themeDark, themeLight } from './components/Theme';
import { StylesProvider, Grid, MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
  margin-top 3em;
`
function App() {
  const [dark, setDark] = useState(true);
  function toggleTheme() {
    setDark(!dark);
  }
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={(dark) ? themeDark : themeLight}>
        <CssBaseline />
        <Router>
          <Header pages={pages} themeToggle={toggleTheme} />
          <StyledGrid container justify="center">
            <Switch>
              {pages.map((page) => (
                <Route exact path={page.url} key={page.index} component={page.cont} />
              ))}
            </Switch>
          </StyledGrid>
        </Router>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
