import React from 'react';
import { Typography, Grid, Box } from "@material-ui/core";
import { BodyText } from '../../components/Typography';

const Landing = () => {
    return (
        <Grid container
            spacing={6}
            justify="flex-start"
            alignItems="flex-start"
            xs={10}
        >
            <Grid item xs={4}>
                <BodyText>Landing Page</BodyText>
            </Grid>
        </Grid>
    )
};

export default Landing;