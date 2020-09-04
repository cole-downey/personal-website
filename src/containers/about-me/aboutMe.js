import React from 'react';
import { Typography, Grid } from "@material-ui/core";
import AboutMeText from './about-me-text';
import styled from 'styled-components';

const BodyText = styled(Typography)`
  color: white;
`;

const AboutMe = () => {
  return (
    <Grid container
      spacing={6}
      justify="center"
      alignItems="flex-start"
      xs={10}
    >
      <Grid item xs={12}>
        <br />
        <BodyText variant="p">{AboutMeText}</BodyText>
        <br />
        <br />
        <BodyText variant="p">{AboutMeText}</BodyText>
      </Grid>
    </Grid>
  )
}

export default AboutMe;