import React from 'react';
import { Typography, Grid } from "@material-ui/core";
import { BodyText } from '../../components/Typography';
import { ClickableCard } from '../../components/Card';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';


const Landing = () => {
    return (
        <Grid container
            spacing={6}
            justify="flex-start"
            alignItems="stretch"
            xs={12} sm={10}
        >
            <Grid item xs={12}>
                <Typography variant="h3">Welcome!</Typography>
            </Grid>
            <Grid item xs={12}>
                <BodyText variant="body1">Here's a few quick navigation links:</BodyText>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <ClickableCard title="Qualifications" description="My Resume."
                    useLink
                    notMaterialIcon
                    url="./qualifications"
                    icon={<path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z" />}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <ClickableCard title="Portfolio" description="Showcase of my projects."
                    useLink
                    notMaterialIcon
                    url="./portfolio"
                    icon={<path d="M23 10h-22v-3h22v3zm-14-8c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6zm15 10h-24l2 10h20l2-10z" />}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <ClickableCard title="About Me" description="The About Me page."
                    useLink
                    url="./about"
                    icon={InfoIcon}
                />
            </Grid>
            <Grid item xs={12}>
                <BodyText variant="body1">Here's a few important external links:</BodyText>
            </Grid>
            <Grid item xs={12} md={6}>
                <ClickableCard title="LinkedIn" description="Connect with me on LinkedIn."
                    notMaterialIcon
                    icon={<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                    url="https://www.linkedin.com/in/cole-downey/"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <ClickableCard title="My GitHub" description="This is my personal GitHub, where you can find most of my portfolio."
                    icon={GitHubIcon} url="https://github.com/cole-downey" />
            </Grid>
        </Grid>
    )
};

export default Landing;