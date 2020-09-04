import React from 'react';
import { Typography, Grid } from "@material-ui/core";
import AboutMeText from './about-me-text';
import styled from 'styled-components';

const BodyText = styled(Typography)`
  color: white;
  font-size: 1.5rem;
  font-weight: 100;
  margin-top: 1em;
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
        <BodyText variant="h6">
          Note: this section will go the About Me page when the header links are active, for now it will go here
        </BodyText>
        {AboutMeText.map((paragraph) => (
          <BodyText variant="p" paragraph>{paragraph}</BodyText>
        ))}
      </Grid>
    </Grid>
  )
}

export default AboutMe;