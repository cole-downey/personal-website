import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header() {
    return (
        <AppBar position="sticky" justify="space-between">
            <Toolbar>
                <Typography variant="h6">Howdy</Typography>
                <Typography variant="h6">About Me</Typography>
                <Typography variant="h6">Portfolio</Typography>
                <Typography variant="h6">Technical Qualifications</Typography>
                <Typography variant="h6">Service</Typography>
            </Toolbar>
        </AppBar>
    );
}