import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, SvgIcon } from '@material-ui/core';
import styled from 'styled-components';
import { CardText } from './Typography';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'

export const StyledCard = styled(Card)`
    background-color: transparent;
    border: 2px solid white;
    border-radius: 0;
    padding: 1em;
    padding-left: 2em;
    height: 100%
`
const StyledVideoCard = styled(Card)`
    background-color: transparent;
    border: 2px solid white;
    border-radius: 0;
    padding: 1em;
    height: 100%;
`

const FixedAspect = styled(CardMedia)`
    position: relative;
    padding-top: 56.25%;
`

const AspectPlayer = styled(ReactPlayer)`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1em;
    padding-top: 0;
`

const StyledCardActionArea = styled(CardActionArea)`
    height: 100%;
`
const StyledIcon = styled(SvgIcon)`
    font-size: 5em;
`

export const ClickableCard = (props) => {
    const [icon, title, description, url] = [props.icon, props.title, props.description, props.url];
    return (
        <StyledCardActionArea href={url} to={url}
            {... (props.useLink ? { component: Link } : { target: "_blank", rel: "noopener noreferrer" })}>
            <StyledCard>
                <CardContent style={{ height: "100%" }}>
                    <Grid container alignItems="stretch" style={{ height: "100%" }}>
                        <Grid container spacing="6" alignItems="center">
                            <Grid item>
                                {props.notMaterialIcon ? <StyledIcon>{icon}</StyledIcon> : <StyledIcon component={icon} />}
                            </Grid>
                            <Grid item xs={12} sm>
                                <CardText variant="h6" gutterBottom>
                                    {title}
                                </CardText>
                                <CardText>
                                    {description}
                                </CardText>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </StyledCard>
        </StyledCardActionArea>
    )
}

export const VideoCard = (props) => {
    const [icon, title, description, url, vidUrl] = [props.icon, props.title, props.description, props.url, props.vidUrl];
    return (
        <StyledCardActionArea href={url} to={url} {... (props.useLink ? { component: Link } : { target: "_blank", rel: "noopener noreferrer" })}>
            <StyledVideoCard >
                <Grid container
                    alignItems="stretch"
                    direction="column"
                    justify="space-between"
                    style={{ height: "100%" }}
                >
                    <CardContent style={{ marginLeft: "1em" }}>
                        <Grid container spacing="6" alignItems="center">
                            <Grid item>
                                {props.notMaterialIcon ? <StyledIcon>{icon}</StyledIcon> : <StyledIcon component={icon} />}
                            </Grid>
                            <Grid item xs={12} sm>
                                <CardText variant="h6" gutterBottom>
                                    {title}
                                </CardText>
                                <CardText>
                                    {description}
                                </CardText>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <FixedAspect>
                        <AspectPlayer
                            controls
                            width='100%'
                            height='100%'
                            url={vidUrl}
                            muted={!props.audio}
                        />
                    </FixedAspect>
                </Grid>
            </StyledVideoCard>
        </StyledCardActionArea>
    )
}