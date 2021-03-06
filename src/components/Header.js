import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Grid,
  Typography,
  ButtonBase,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)`
  background: rgb(63,118,255);
  background: linear-gradient(77deg, rgba(63,118,255,1) 0%, rgba(163,88,153,1) 57%, rgba(255,61,58,1) 100%);
  padding: 1em;
  `;

const StyledTab = styled(Tab)`
  text-color: "#ffffff";
  .MuiTouchRipple-child {
    background-color: #ffffff;
  }
`;
const StyledTabs = styled(Tabs)`
`;

const Title = styled(Typography)`
  padding-left: 0.5em;
  padding-right:0.5em;
  padding-bottom: 0.15em;
`;

const StyledTitleButton = styled(ButtonBase)`
  font-weight: 300;
  font-size: 3em;
  border: 2px solid ${props => props.buttonBorder};
`;

const Header = (props) => {
  function getValue(pages) {
    // iterates through pages list to find which value is current
    var value = -1;
    pages.forEach(element => {
      if (element.url === window.location.pathname) {
        value = element.index;
      }
    });
    return value;
  }
  const pages = props.pages;
  const [value, setValue] = useState(getValue(pages));
  const handleClick = () => {
    setValue(getValue(pages));
  };
  const theme = useTheme();
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Grid container justify="center">
          <Grid item>
            <Title paragraph component={StyledTitleButton}
              color="secondary" buttonBorder={theme.palette.secondary.main} >
              Cole Downey
            </Title>
          </Grid>
          <Grid item xs={12}>
            <StyledTabs
              variant={useMediaQuery('(min-width:800px)') ? "fullWidth" : "scrollable"}
              value={value}
              centered
              scrollButtons="on"
              onClick={handleClick}
              indicatorColor="primary"
            >
              {pages.map((page) => (
                (page.index >= 0) ? <StyledTab label={<Typography color="primary" variant="button">{page.title}</Typography>}
                  to={page.url} key={page.index} component={Link} textColor="primary" disableRipple/> : null
              )
              )}
            </StyledTabs>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar >
  );
}

export default Header;
