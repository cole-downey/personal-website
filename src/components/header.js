import React from 'react';
import { AppBar, Toolbar, Tab, Tabs } from '@material-ui/core';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

const StyledAppBar = styled(AppBar)`
  background-color: #800000;
  flex-grow: 1;
`
function getValue(pages) {
  // iterates through pages list to find which value is current
  var value = 0;
  const testPages = [{ url: '/', index: 0 }, { url: '/about', index: 1 }]
  pages.forEach(element => {
    if (element.url === window.location.pathname) {
      value = element.index;
    }
  });
  return value;
}

const Header = (props) => {
  const pages = props.pages
  return (
    <div>
      <StyledAppBar position="sticky">
        <Toolbar>
          <Tabs
            variant="fullWidth"
            value={getValue(pages)}
            centered
          >
            {pages.map((page) =>
              <Tab label={page.title} href={page.url} key={page.index} />)}
          </Tabs>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

export default Header;