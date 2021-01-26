import React from 'react';
import { Grid } from '@material-ui/core';
import { BodyText } from '../../components/Typography';
import { ClickableCard } from '../../components/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

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
                    Click on each card to see the project
                </BodyText>
                <BodyText variant="body1">
                    Some highlights are shown below:
                </BodyText>
            </Grid>
            <Grid item xs={12}>
                <ClickableCard title={"Moodia"} 
                description={"Final project for CSCE 315. This is the biggest project I've worked on this far, with 4 other people. Moodia is a web service allowing users to view a customized Twitter timeline, with the ability to filter out Tweets based on the mood they portray. Created with React, using the Twitter, Spotify, and Google Sentiment Analysis APIs. This is a link to the deployed app. Note: we are in the process of renewing our Google Sentiment Analysis subscription, so the mood filters and the CSS may be broken currently on Moodia."}
                icon={EmojiEmotionsIcon} 
                url={"https://moodia-315.herokuapp.com/"} />
            </Grid>
            {portItems.map((item, key) => (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ClickableCard title={item.title} description={item.description} icon={GitHubIcon} key={key} url={item.url} />
                </Grid>
            ))}
            <Grid item xs={12}>
                <ClickableCard title="My GitHub" description="This is my personal GitHub, where you can find most of my portfolio."
                    icon={GitHubIcon} url="https://github.com/cole-downey" />
            </Grid>
        </Grid>
    )
}

export default Portfolio;