import React from 'react';
import { Grid } from '@material-ui/core';
import { BodyText } from '../../components/Typography';
import { ClickableCard } from '../../components/Card';
import GitHubIcon from '@material-ui/icons/GitHub';

const portItems = [
    {
        title: "Healthwise Mentor Project",
        description: "This is an ASP.NET Core web app with a React front-end. Connects to SQL database hosted by Microsoft Azure.",
        url: "https://github.com/cole-downey/HW-Mentor-Project",
    },
    {
        title: "Current Unity Project",
        description: "This is the main Unity project I'm working on. I started it Summer 2020 during my internship.",
        url: "https://github.com/cole-downey/first-unity-project",
    },
    {
        title: "Personal Website",
        description: "First Project for CSCE 315. Created using React with Google's material ui library.",
        url: "https://github.tamu.edu/coledowney-tamu/personal-website",
    },
]

const Portfolio = () => {
    return (
        <Grid container
            spacing={6}
            justify="flex-start"
            alignItems="stretch"
            xs={10}
        >
            <Grid item xs={12}>
                <BodyText variant="h6" paragraph>
                    Click on each card to see the repository
                </BodyText>
                <BodyText variant="body1">
                    Some highlights are shown below:
                </BodyText>
            </Grid>
            <Grid item xs={12}>
                <ClickableCard title="My GitHub" description="This is my personal GitHub, where you can find my entire portfolio."
                    icon={GitHubIcon} url="https://github.com/cole-downey" />
            </Grid>
            {portItems.map((item, key) => (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ClickableCard title={item.title} description={item.description} icon={GitHubIcon} key={key} url={item.url} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Portfolio;