import React from 'react';
import { Typography, Grid, Card } from "@material-ui/core";


const AboutMe = () => {
  return (
    <Grid container
      spacing={6}
      justify="flex-start"
      alignItems="flex-start"
      xs={12}
    >
      <Grid item xs={6}>
        <Card>
          <Typography variant="h4">Hello</Typography>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <Typography variant="h4">Hello</Typography>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <Typography variant="h4">Hello</Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AboutMe;