import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { BodyText } from '../../components/Typography';
import { ClickableCard, VideoCard } from '../../components/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const GameTextItems = [
    {
        title: "Starseige: Deadzone",
        description: "Starseige: Deadzone is a live service extraction FPS in a procedurally generated environment, built with UE5. I worked on this game from its inception through its early access ship on Steam and the EGS. My largest responsibility was creating the merchant system, which allows players to buy, sell, and craft items from the lobby, and gives designers an intuitive way to precisely control exactly how items are generated for player selection. As the lead developer on this system, I was responsible for everything from blueprinting the UI to interfacing with our backend databases. Aside from the merchant system, I supported the team with a variety of gameplay features and bug fixes, with many of those being related to UE5's gameplay ability system.",
        url: "https://store.steampowered.com/app/2170420/Starsiege_Deadzone/",
        icon: SportsEsportsIcon,
    },
    {
        title: "Unannounced FPS Prototypes",
        description: "I was one of the key programmers on several rapid iteration prototypes that used Rogue Company's code base as a starting point. I was tasked with designing and implementing a system to allow designers to easily create a breadth of character abilites that variated from common functionality. I delivered a modular ability system that was focused around long-term versatility and ease-of-use for designers, allowing them to create a large variety (80+) of abilities in a short time with minimal programmer support and without requiring tedious work.",
        icon: SportsEsportsIcon,
    },
    {
        title: "Rogue Company",
        description: "Rogue Company is a live service third person shooter built with UE4. I worked on a wide variety of bug fixes and gameplay improvements, and lead implementation of ability reworks for 2 characters: Phantom and The Fixer.",
        url: "https://www.roguecompany.com/",
        icon: SportsEsportsIcon,
    },
]

const vidItems = [
    {
        title: "Boidwalker",
        description: "In this project, I combined the Boids algorithm, which simulates a flock of birds, with linear blend skinning to use Boids as a technique for animating a 3D character. The boid flock I created will by default, act just like a natural flock of birds, but on command, will assume the shape of a 3D mesh and even follow its animation. For performance, the boids are multithreaded and the update timestep will automatically change based on the compute time, so that the flock will move the correct speed, even if a slower processor limits its update rate. Created in C++ using OpenGL. (This demo has audio).",
        url: "https://github.com/cole-downey/a6-boidwalker",
        vidUrl: "https://youtu.be/GaANS4afdWw",
        audio: true,
    },
    {
        title: "Animation P5: Cloth Simulation",
        description: "In this project, I created a realistic cloth using physics based animation. I represented the cloth as a system of particles stored in various matrices and vectors, and did implicit Euler integration to solve for the new position of each particle at every step. Since I used implicit integration, the simulation remains stable even when using larger timesteps. Additionally, all physics matrices were stored and used as sparse matrices, which significantly increased performance. Created in C++ using OpenGL.",
        url: "https://github.com/cole-downey/a5-cloth-simulation",
        vidUrl: "https://youtu.be/Hnrch0bqV00",
    },
    {
        title: "Unity P3: Spaceboarder",
        description: "This is the personal game I've spent the longest time on and want to eventually remake in UE. It's a 3D snowboarding game with procedurally generated terrain that wraps around into a tube. I have a dedicated page for this project, as I worked on it over a long period of time with and logged my updates. Click this card to go to the Devlog.",
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
        title: "OpenGL A3 - Shaders",
        description: "In this project, I wrote several vertex and fragment shaders, including a Blinn-Phong shader, a silhouette shader, and a cel shader, all of which support multiple lights and materials. Written in C++ using OpenGL.",
        url: "https://github.com/cole-downey/441-A3-shaders",
        vidUrl: "https://youtu.be/sRDT_WFnJis",
    },
    {
        title: "Unity Project 1",
        description: "This was the first major unity project I've done. I haven't thought of a good name yet, but I'm aiming for it to play like a 3D platformer roguelike. The main mechanics I've worked on so far are the platform/ block spawning, the player movement control, and enemy behavior.",
        url: "https://github.com/cole-downey/first-unity-project",
        vidUrl: "https://youtu.be/IAf3S_vx5vk",
    },
]
/*
{
    title: "OpenGL A4 - Free-Look World",
    description: "In this project, I created a 3d world and a free-look camera that responds to WASD and mouse movement, as well as a HUD and second, top - down orthogonal camera for a mini - map. Written in C++ using OpenGL.",
    url: "https://github.com/cole-downey/441-A4-free-look-camera",
    vidUrl: "https://youtu.be/nR7hdqTI1Kc",
},
{
    title: "OpenGL A2 - Hierarchical Transforms",
    description: "In this project, I created a hierarchical robot figure with components that respond to keyboard inputs to change their rotations. Written in C++ using OpenGL.",
    url: "https://github.com/cole-downey/441-A2-hierarchical-transforms",
    vidUrl: "https://youtu.be/8a-tZvqdg9s",
},
*/

const lgTextItems = [
    {
        title: "Ray Tracer",
        description: "In this project, I created a static image ray tracer from scratch. This takes in a resolution and scene number as input, and creates a ray traced image. Features rendering for spheres, cubes, planes, and 3D meshes, several different lighting options including Blinn-Phong, reflective, and semi-reflective, and threading for performance. Created using C++.",
        url: "https://github.com/cole-downey/A6-ray-tracing",
    },
    {
        title: "Personal Website",
        description: "My personal website for business and school endeavors. Created using React and Google's @material-ui/core library.",
        url: "https://github.com/cole-downey/personal-website",
    },
]

const smTextItems = [
]
/*
{
    title: "Healthwise Mentor Project",
    description: "This is an ASP.NET Core web app with a React front-end. Connects to SQL database hosted by Microsoft Azure.",
    url: "https://github.com/cole-downey/HW-Mentor-Project",
},
*/

const Portfolio = () => {
    return (
        <Grid container
            spacing={6}
            justify="flex-start"
            alignItems="stretch"
            xs={12} sm={10}
        >
            <Grid item xs={12}>
                <BodyText><i>Click on each card to see the project repo or game page.</i></BodyText>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3">Games</Typography>
            </Grid>
            {GameTextItems.map((item, key) => (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <ClickableCard title={item.title} 
                        description={item.description} icon={item.hasOwnProperty('icon') ? item.icon : GitHubIcon} 
                        key={key} url={item.url}
                    />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Typography variant="h3">Projects</Typography>
            </Grid>
            <Grid item xs={12}>
                <ClickableCard title="My GitHub" description="This is my personal GitHub, where you can find most of my personal and school portfolio."
                    icon={GitHubIcon} url="https://github.com/cole-downey" />
            </Grid>
            {vidItems.map((item, key) => (
                <Grid item xs={12} sm={12} md={12} lg={(vidItems.length % 2 !== 0 && key === 0) ? 6 : 6}>
                    <VideoCard title={item.title} description={item.description}
                        icon={item.hasOwnProperty('icon') ? item.icon : GitHubIcon}
                        url={item.url} vidUrl={item.vidUrl} key={key}
                        useLink={item.hasOwnProperty('useLink')}
                        audio={item.hasOwnProperty('audio')}
                    />
                </Grid>
            ))}
            {lgTextItems.map((item, key) => (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <ClickableCard title={item.title} description={item.description} icon={GitHubIcon} key={key} url={item.url} />
                </Grid>
            ))}
            
            {smTextItems.map((item, key) => (
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <ClickableCard title={item.title} description={item.description} icon={GitHubIcon} key={key} url={item.url} />
                </Grid>
            ))}
        </Grid>
    )
}
/*
<Grid item xs={12}>
<ClickableCard title={"Moodia"}
description={"Final project for CSCE 315. This is the biggest project I've worked on so far, with 4 other people. Moodia is a web service allowing users to view a customized Twitter timeline, with the ability to filter out Tweets based on the mood they portray. Created with React, using the Twitter, Spotify, and Google Sentiment Analysis APIs. This is a link to the deployed app. Note: we are in the process of renewing our Google Sentiment Analysis subscription, so the mood filters and the CSS may be broken currently on Moodia."}
icon={EmojiEmotionsIcon}
url={"https://moodia-315.herokuapp.com/"} />
</Grid>
*/

export default Portfolio;