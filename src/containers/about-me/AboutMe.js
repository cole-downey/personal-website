import React from 'react';
import { Grid, } from "@material-ui/core";
import { BodyText } from '../../components/Typography';
import AboutMeText from './about-me-text';
import { ClickableCard } from '../../components/Card';

const AboutMe = () => {
  return (
    <Grid container
      item
      spacing={6}
      justify="flex-start"
      alignItems="stretch"
      xs={12} sm={10}
    >
      <Grid item xs={12}>
        {AboutMeText.map((paragraph) => (
          <BodyText variant="body1" paragraph>{paragraph}</BodyText>
        ))}
      </Grid>
      <Grid item xs={12}>
          <BodyText variant="h6" paragraph>{"Contact Info:"}</BodyText>
          <BodyText variant="body1" paragraph>{"Email: cdowneymm@gmail.com"}</BodyText>
          <BodyText variant="body1" paragraph>{"Phone: 208-914-4150"}</BodyText>
      </Grid>
      <Grid item xs={12} md={6}>
        <ClickableCard title="LinkedIn" description="Connect with me on LinkedIn."
            notMaterialIcon
            icon={<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
            url="https://www.linkedin.com/in/cole-downey/"
        />
      </Grid>
    </Grid>
  )
}

export default AboutMe;
