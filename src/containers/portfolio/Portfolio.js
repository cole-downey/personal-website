import React from 'react';
import { Grid } from '@material-ui/core';
import { BodyText } from '../../components/Typography';

const Portfolio = () => {
    return (
        <Grid container
            spacing={6}
            justify="center"
            alignItems="flex-start"
            xs={10}
        >
            <Grid item xs={12}>
                <BodyText variant="p" paragraph>
                    {window.location.hash}
                </BodyText>
            </Grid>
        </Grid>
    )
}

export default Portfolio;