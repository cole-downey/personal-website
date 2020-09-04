import React from 'react';
import { AppBar, Toolbar, Tab, Tabs, Grid } from '@material-ui/core';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
`;

const StyledTab = styled(Tab)`
  && :hover {
    color: black;
  };
  && :focus {
    color: black;
  }
`;
const StyledTabs = styled(Tabs)`
  && :indicator {
    background-color: black;
  };
`;
function getValue(pages) {
  // iterates through pages list to find which value is current
  var value = 0;
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
          <Grid xs={12}>
            <StyledTabs
              variant="fullWidth"
              value={getValue(pages)}
              centered
              indicatorColor="primary"
            >
              {pages.map((page) =>
                <StyledTab label={page.title} href={`/~coledowney${page.url}`} key={page.index} />)}
            </StyledTabs>
          </Grid>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

export default Header;