import React from 'react';
import { Grid } from '@material-ui/core';
import { BodyText } from '../../components/Typography';
import { ClickableCard, VideoCard } from '../../components/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const vidItems = [
    {
        title: "Unity Project 1",
        description: "This is my first major unity project that I've made myself. I haven't thought of a good name yet, but I'm aiming for it to play like a 3D platformer roguelike. The main mechanics I've worked on so far are the platform/ block spawning, the player movement control, and enemy behavior",
        url: "https://github.com/cole-downey/first-unity-project",
        vidUrl: "https://youtu.be/IAf3S_vx5vk",
    },
    {
        title: "OpenGL A4 - Free-Look World",
        description: "In this project, I created a 3d world and a free-look camera that responds to WASD and mouse movement, as well as a HUD and second, top - down orthogonal camera for a mini - map.Written in C++ using OpenGL",
        url: "https://github.com/cole-downey/441-A4-free-look-camera",
        vidUrl: "https://youtu.be/nR7hdqTI1Kc",
    },
    {
        title: "OpenGL A3 - Shaders",
        description: "In this project, I wrote several vertex and fragment shaders, including a Blinn-Phong shader, a silhouette shader, and a cel shader, all of which support multiple lights and materials.Written in C++ using OpenGL",
        url: "https://github.com/cole-downey/441-A3-shaders",
        vidUrl: "https://youtu.be/sRDT_WFnJis",
    },
    {
        title: "OpenGL A2 - Hierarchical Transforms",
        description: "In this project, I created a hierarchical robot figure with components that respond to keyboard inputs to change their rotations.Written in C++ using OpenGL",
        url: "https://github.com/cole-downey/441-A2-hierarchical-transforms",
        vidUrl: "https://youtu.be/8a-tZvqdg9s",
    },
]

const portItems = [
    {
        title: "Healthwise Mentor Project",
        description: "This is an ASP.NET Core web app with a React front-end. Connects to SQL database hosted by Microsoft Azure.",
        url: "https://github.com/cole-downey/HW-Mentor-Project",
    },
    {
        title: "Personal Website",
        description: "My personal website for business and school endeavors. Created using React and Google's @material-ui/core library.",
        url: "https://github.com/cole-downey/personal-website",
    },
]

const Portfolio = () => {
    return (
        <Grid container
            spacing={6}
            justify="center"
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
                <ClickableCard title="My GitHub" description="This is my personal GitHub, where you can find most of my portfolio."
                    icon={GitHubIcon} url="https://github.com/cole-downey" />
            </Grid>
            {vidItems.map((item, key) => (
                <Grid item xs={12} sm={12} md={9}>
                    <VideoCard title={item.title} description={item.description} icon={GitHubIcon}
                        url={item.url} vidUrl={item.vidUrl} />
                </Grid>
            ))}
            <Grid item xs={12}>
                <ClickableCard title={"Moodia"}
                    description={"Final project for CSCE 315. This is the biggest project I've worked on this far, with 4 other people. Moodia is a web service allowing users to view a customized Twitter timeline, with the ability to filter out Tweets based on the mood they portray. Created with React, using the Twitter, Spotify, and Google Sentiment Analysis APIs. This is a link to the deployed app. Note: we are in the process of renewing our Google Sentiment Analysis subscription, so the mood filters and the CSS may be broken currently on Moodia."}
                    icon={EmojiEmotionsIcon}
                    url={"https://moodia-315.herokuapp.com/"} />
            </Grid>
            {portItems.map((item, key) => (
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ClickableCard title={item.title} description={item.description} icon={GitHubIcon} key={key} url={item.url} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Portfolio;