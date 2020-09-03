import React from 'react';
import { AppBar, Toolbar, Tab, Tabs } from '@material-ui/core';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: #800000;
`

export default function Header() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Howdy" href="/" />
          <Tab label="About Me" href="/about" />
          <Tab label="Portfolio" />
          <Tab label="Technical Qualifications" />
          <Tab label="Service" />
        </Tabs>
      </Toolbar>
    </StyledAppBar>
  );
}