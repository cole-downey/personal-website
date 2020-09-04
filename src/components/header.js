import React from 'react';
import { AppBar, Toolbar, Tab, Tabs, Grid, withStyles } from '@material-ui/core';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
  padding: 1em;
`;

const StyledTab = styled(Tab)`
  && :hover {
    color: #262626;
  };
  && :focus {
    color: #262626;
  }
`;
const StyledTabs = styled(Tabs)`
  && :indicator {
    background-color: black;
  }
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
//tempory fix until I figure out how to change indicator color with styled components
const NewStyledTabs = withStyles({
  indicator: {
    backgroundColor: 'white',
  },
})(Tabs);

const Header = (props) => {
  const pages = props.pages
  return (
    <div>
      <StyledAppBar position="sticky">
        <Toolbar>
          <Grid xs={12}>
            <NewStyledTabs
              variant="fullWidth"
              value={getValue(pages)}
              centered
            >
              {pages.map((page) =>
                <Tab label={page.title} href={page.url} key={page.index} />)}
            </NewStyledTabs>
          </Grid>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

export default Header;