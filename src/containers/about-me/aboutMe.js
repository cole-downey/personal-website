import React from 'react';
import { Typography, Grid } from "@material-ui/core";
import AboutMeText from './about-me-text';
import styled from 'styled-components';

const BodyText = styled(Typography)`
  color: white;
  font-size: 1.5rem;
  font-weight: 100;
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
        <BodyText variant="h6">
          Note: this section will go the About Me page when the header links are active, for now it will go here
        </BodyText>
        <br />
        {AboutMeText.map((paragraph) => (
          <div>
            <BodyText variant="p">{paragraph}</BodyText>
            <br />
            <br />
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default AboutMe;