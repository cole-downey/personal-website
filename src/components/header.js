import React from 'react';
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Grid,
  withStyles,
  Typography,
  ButtonBase,
  useMediaQuery
} from '@material-ui/core';
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

const Title = styled(Typography)`
  padding-left: 0.5em;
  padding-right:0.5em;
  padding-bottom: 0.15em;
`;

const StyledTitleButton = styled(ButtonBase)`
  font-weight: 100;
  font-size: 3em;
  color: #222222;
  border: 3px solid #222222;
`;

const Header = (props) => {
  const pages = props.pages
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Grid container xs={12} justify="center">
          <Grid item>
            <Title paragraph component={StyledTitleButton}>Cole Downey</Title>
          </Grid>
          <Grid item xs={12}>
            <NewStyledTabs
              variant={useMediaQuery('(min-width:800px)') ? "fullWidth" : "scrollable"}
              value={getValue(pages)}
              centered
              scrollButtons="on"
            >
              {pages.map((page) =>
                <Tab label={page.title} href={page.url} key={page.index} />)}
            </NewStyledTabs>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;