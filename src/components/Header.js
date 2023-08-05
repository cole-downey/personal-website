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
import useAnimGradient from '../hooks/use-anim-gradient.hook';

const StyledAppBar = styled(AppBar)`
  padding: 1em;

  `;
  //background: linear-gradient(77deg, rgba(63,118,255,1) 0%, rgba(163,88,153,1) 57%, rgba(255,61,58,1) 100%);

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

  // animated gradient
  const intervalDelay = 13000;
  const transitionDelay = intervalDelay * 1.25;
  const colors = useAnimGradient({ intervalDelay });
  const colorKeys = Object.keys(colors);

  return (
    <StyledAppBar position="sticky"
    style={{
      ...colors,
      transition: `
        ${colorKeys[0]} ${transitionDelay}ms linear,
        ${colorKeys[1]} ${transitionDelay}ms linear,
        ${colorKeys[2]} ${transitionDelay}ms linear
      `,
      background: `
        radial-gradient(
          circle at top left,
          var(${colorKeys[2]}),
          var(${colorKeys[1]}),
          var(${colorKeys[0]})
        )
      `,
    }}
    >
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
              indicatorColor="secondary"
            >
              {pages.map((page) => (
                (page.index >= 0) ? <StyledTab label={<Typography color="secondary" variant="h6">{page.title}</Typography>}
                  to={page.url} key={page.index} component={Link} textColor="secondary" disableRipple/> : null
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
