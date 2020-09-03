import React from 'react';
import { Typography, Grid, Card } from "@material-ui/core";
import AboutMeText from './about-me-text';

const AboutMe = () => {
  return (
    <Grid container
      spacing={6}
      justify="center"
      alignItems="flex-start"
      xs={12}
    >
      <Grid item xs={11}>
        <br />
        <Typography variant="p">{AboutMeText}</Typography>
        <br />
        <br />
        <Typography variant="p">{AboutMeText}</Typography>
      </Grid>
    </Grid>
  )
}

export default AboutMe;