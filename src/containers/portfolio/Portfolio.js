import React from 'react';
import { Grid } from '@material-ui/core';
import { BodyText } from '../../components/Typography';
import { ClickableCard } from '../../components/Card';

const Portfolio = () => {
    return (
        <Grid container
            spacing={6}
            justify="center"
            alignItems="flex-start"
            xs={10}
        >
            <Grid item xs={4}>
                <ClickableCard />
                <BodyText> Hello</BodyText>
            </Grid>
        </Grid>
    )
}

export default Portfolio;