import React from 'react';
import { Typography, Card, CardActionArea, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import { BodyText } from './Typography';

const StyledCard = styled(Card)`
    background-color: transparent;
    border: 2px solid white;
    border-radius: 0;
`

export const ClickableCard = () => {
    return (
        <CardActionArea>
            <StyledCard>
                <CardContent>
                    <BodyText>
                        Hey, this is a card.
                    </BodyText>
                </CardContent>
            </StyledCard>
        </CardActionArea>
    )
}