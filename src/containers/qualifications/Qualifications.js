import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const Qualifications = () => {
    return (
        <Grid container
            spacing={6}
            justify="center"
            alignItems="flex-start"
            xs={10}
        >
            <Grid item xs={12}>
                <Typography variant="p">
                    These are my qualifications.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Qualifications;