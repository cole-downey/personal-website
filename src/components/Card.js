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
    height: 100%
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
        <StyledCardActionArea href={url} to={url} {... (props.useLink ? { component: Link } : {})}>
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
        <StyledCardActionArea href={url} to={url} {... (props.useLink ? { component: Link } : {})}>
            <StyledVideoCard >
                <CardContent >
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
                <CardMedia>
                        <ReactPlayer
                            controls
                            width={"fluid"}
                            height={"480px"}
                            url={vidUrl}
                        />
                </CardMedia>
            </StyledVideoCard>
        </StyledCardActionArea>
    )
}