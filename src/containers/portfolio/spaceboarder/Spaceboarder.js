import React from 'react';
import { Grid } from '@material-ui/core';
import { BodyText } from '../../../components/Typography';
import { ClickableCard, VideoCard } from '../../../components/Card';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

const vidLogs = [
    {
        title: "Log 4",
        description: "I've been mostly working on a better method of checking if the player is grounded, and orienting the character to the surface normal. I also implemented a circular gravity system, and a better camera tracking system that orients itself to the local gravity. In this demo you can see the new movement system implemented into the terrain, and the new gravity and camera systems.",
        vidUrl: "https://youtu.be/P0HFtc_v444",
    },
    {
        title: "Log 3",
        description: "After playing around with a few different solutions, I finally got a character controlling system that I'm happy with. What I ended up doing is separating all the physics from the character model onto a ball. The character anchors itself to the ball position and orients itself to the ground whenever the ball is grounded. It also is what responds directly to any player input. The ball in turn, take the orientation of the player, and uses that to add appropriate forces. This new system allows the character to be much more responsive to player input, while keeping the movement smooth. Additionally, compared to the board-shaped collider, the ball collider moves much better along rough terrain.",
        vidUrl: "https://youtu.be/FXe6EPfhijM",
    },
    {
        title: "Log 2",
        description: "After finishing the terrain generation and making a simple radius shader, I started on implementing the player and basic movement controls. This piece, while not as technically complex as the terrain generation, has been the most difficult challenge so far, as character controlling is much more \"messy\" than dealing with 3D meshes. I started off by putting a collider on the board and having input spin the character in different directions, however adding an accurate hitbox on the board hasn't played as well with the physics as I had hoped. This demo shows the endless generation system in play, and my very archaic player model and movement.",
        vidUrl: "https://youtu.be/Pjh5MI8xZxw",
    },
    {
        title: "Log 1",
        description: "Starting off,  I knew I wanted to generate 3D terrain that was continuous along the Z axis and along a circle around the Z axis, creating an infinite tube of sorts. Using my previous terrain generation project as a starting point, I switched to a 3D simplex noise algorithm and converted the mesh generation into a polar coordinate system. I then set up an endless terrain and level of detail system, in a similar manner as my previous project. In this demo, I show the effects of different inputs on a single terrain chunk.",
        vidUrl: "https://youtu.be/yAg68shlLuA",
    },
];

const Spaceboarder = () => {
    return (
        <Grid container
            spacing={6}
            justify="center"
            alignItems="stretch"
            xs={12} sm={10}
        >
            <Grid item xs={12}>
                <BodyText variant="h6" paragraph>
                    Unity P3: Spaceboarder
                </BodyText>
                <BodyText variant="body1">
                    This is the game I'm working on right now!
                </BodyText>
                <BodyText variant="body1">
                    After doing my terrain generation project, I wanted to use some of the stuff I learned to make a game. I wanted to do some sort of endless snowboarding game, 
                    but a traditional mountain wouldn't really work, as I would either need to use a cone with an ever-expanding base, or an infinite, sloped plane, neithe of which would be very interesting.
                    I decided to have the terrain wrap around the top into kind of a tunnel, with gravity on all sides of the tunnel. Thus, Spaceboarder was born. 
                </BodyText>
            </Grid>
            <Grid item xs={12}>
                <ClickableCard title="Spaceboarder Repo" description="Here's the source code for this game."
                    icon={GitHubIcon} url="https://github.com/cole-downey/spaceboarder" />
            </Grid>
            {vidLogs.map((item, key) => (
                <Grid item xs={12} sm={12} md={12} lg={9}>
                    <VideoCard title={item.title} description={item.description} icon={YouTubeIcon}
                        url={item.vidUrl} vidUrl={item.vidUrl} key={key} />
                </Grid>
            ))}

        </Grid>
    )
}

export default Spaceboarder;