import React from 'react';
import { Grid, } from "@material-ui/core";
import { BodyText } from '../../components/Typography';
import AboutMeText from './about-me-text';

const AboutMe = () => {
  return (
    <Grid container
      item
      spacing={6}
      justify="center"
      alignItems="flex-start"
      xs={10}
    >
      <Grid item xs={12}>
        {AboutMeText.map((paragraph) => (
          <BodyText variant="body1" paragraph>{paragraph}</BodyText>
        ))}
      </Grid>
    </Grid>
  )
}

export default AboutMe;