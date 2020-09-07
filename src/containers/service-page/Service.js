import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const Service = () => {
    return (
        <Grid container
            spacing={6}
            justify="center"
            alignItems="flex-start"
            xs={10}
        >
            <Grid item xs={12}>
                <Typography variant="p">
                    This is my service page.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Service;