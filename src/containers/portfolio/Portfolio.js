import React from 'react';
import { Grid } from '@material-ui/core';
import { BodyText } from '../../components/Typography';
import { ClickableCard, VideoCard } from '../../components/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PublicIcon from '@material-ui/icons/Public';

const vidItems = [
    {
        title: "Animation P5: Cloth Simulation",
        description: "In this project, I created a realistic cloth using physics based animation. I represented the cloth as a system of particles stored in various matrices and vectors, and did implicit Euler integration to solve for the new position of each particle at every step. Since I used implicit integration, the simulation remains stable even when using larger timesteps. Additionally, all physics matrices were stored and used as sparse matrices, which significantly increased performance. Created in C++ using OpenGL.",
        url: "https://github.com/cole-downey/a5-cloth-simulation",
        vidUrl: "https://youtu.be/Hnrch0bqV00",
    },
    {
        title: "Unity P3: Spaceboarder",
        description: "This is the game I'm working on now: a 3D snowboarding game with procedurally generated terrain that wraps around into a tube. I have a dedicated page for this project, as I'm planning on working on it over a long period of time with and logging my updates. Click this card to go to the Devlog.",
        url: "/portfolio/spaceboarder",
        vidUrl: "https://youtu.be/P0HFtc_v444",
        useLink: true,
        icon: PublicIcon,
    },
    {
        title: "Unity P2: Procedural Terrain Generation",
        description: "In this project, I explored procedural terrain mesh generation. Starting with a 2D Perlin noise map, I created a 3D mesh using the noise values as heights, then created an endless terrain system that creates and deletes terrain chunks around a viewer, and finally a level of detail system that renders far away chunks with less detail, greatly increasing performance.",
        url: "https://github.com/cole-downey/terrain-generation-exploration",
        vidUrl: "https://youtu.be/5O-_e5ZfSpI",
    },
    {
        title: "OpenGL A5 - Deferred Rendering",
        description: "In this project, I implemented deferred rendering into 4 textures: position, normal, ka, and kd. Additionally, I created dynamic geometry calculated on the GPU, procedurally generated spheres, and support for multiple lights in the shaders. Written in C++ using OpenGL.",
        url: "https://github.com/cole-downey/441-A5-deferred-rendering",
        vidUrl: "https://youtu.be/Pbyhqm-oYdE",
    },
    {
        title: "Animation P4 - Inverse Kinematics",
        description: "In this project, I implemented an inverse kinematics controlled chain. I used Gradient Descent with Backtracking Line Search and Newton's Method to iterate towards an optimized solution, with the target being the user's mouse. In this demo the chain has 4 links, but my project supports any number of links. Written in C++ using OpenGL.",
        url: "https://github.com/cole-downey/a4-inverse-kinematics",
        vidUrl: "https://youtu.be/FA_N6jq8RzY",
    },
    {
        title: "Animation P3 - Blend Shape Facial Animation",
        description: "In this project, I took an input of a face mesh and a set of defined facial action units, and implemented blend shape animation. I combined settings of different facial action units to create multiple blend shapes, then interpolated through them on the GPU using a GLSL shader. Created in C++ using OpenGL and Maya.",
        url: "https://github.com/cole-downey/a3-facial-blend-shapes",
        vidUrl: "https://youtu.be/MIu0e9HAEB4",
    },
    {
        title: "Unity Project 1",
        description: "This is my first major unity project that I've made myself. I haven't thought of a good name yet, but I'm aiming for it to play like a 3D platformer roguelike. The main mechanics I've worked on so far are the platform/ block spawning, the player movement control, and enemy behavior.",
        url: "https://github.com/cole-downey/first-unity-project",
        vidUrl: "https://youtu.be/IAf3S_vx5vk",
    },
    {
        title: "OpenGL A4 - Free-Look World",
        description: "In this project, I created a 3d world and a free-look camera that responds to WASD and mouse movement, as well as a HUD and second, top - down orthogonal camera for a mini - map. Written in C++ using OpenGL.",
        url: "https://github.com/cole-downey/441-A4-free-look-camera",
        vidUrl: "https://youtu.be/nR7hdqTI1Kc",
    },
    {
        title: "OpenGL A3 - Shaders",
        description: "In this project, I wrote several vertex and fragment shaders, including a Blinn-Phong shader, a silhouette shader, and a cel shader, all of which support multiple lights and materials. Written in C++ using OpenGL.",
        url: "https://github.com/cole-downey/441-A3-shaders",
        vidUrl: "https://youtu.be/sRDT_WFnJis",
    },
    {
        title: "OpenGL A2 - Hierarchical Transforms",
        description: "In this project, I created a hierarchical robot figure with components that respond to keyboard inputs to change their rotations. Written in C++ using OpenGL.",
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
            justify="flex-start"
            alignItems="stretch"
            xs={12} sm={10}
        >
            <Grid item xs={12}>
                <BodyText variant="h6" paragraph>
                    Click on each card to see the project repo
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
                <Grid item xs={12} sm={12} md={12} lg={(vidItems.length % 2 !== 0 && key === 0) ? 6 : 6}>
                    <VideoCard title={item.title} description={item.description}
                        icon={item.hasOwnProperty('icon') ? item.icon : GitHubIcon}
                        url={item.url} vidUrl={item.vidUrl} key={key}
                        useLink={item.hasOwnProperty('useLink')}
                    />
                </Grid>
            ))}
            <Grid item xs={12}>
                <ClickableCard title={"Moodia"}
                    description={"Final project for CSCE 315. This is the biggest project I've worked on so far, with 4 other people. Moodia is a web service allowing users to view a customized Twitter timeline, with the ability to filter out Tweets based on the mood they portray. Created with React, using the Twitter, Spotify, and Google Sentiment Analysis APIs. This is a link to the deployed app. Note: we are in the process of renewing our Google Sentiment Analysis subscription, so the mood filters and the CSS may be broken currently on Moodia."}
                    icon={EmojiEmotionsIcon}
                    url={"https://moodia-315.herokuapp.com/"} />
            </Grid>
            {portItems.map((item, key) => (
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <ClickableCard title={item.title} description={item.description} icon={GitHubIcon} key={key} url={item.url} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Portfolio;