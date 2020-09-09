import React from 'react';
import { Grid } from '@material-ui/core';
import { BodyText } from '../../components/Typography';
import { ClickableCard } from '../../components/Card';
import PeopleIcon from '@material-ui/icons/People';

const Service = () => {
    return (
        <Grid container
            spacing={6}
            justify="flex-start"
            alignItems="stretch"
            xs={10}
        >
            <Grid item xs={12}>
                <BodyText variant="h6" paragraph>
                    During my time in college, the main way I have been serving the community is by volunteering at Breakaway Ministries.
                </BodyText>
                <BodyText variant="body1" paragraph>
                    Breakaway is a weekly, nondenominational Bible study on the campus of Texas A&M.
                    Their message reaches thousands of students each week, and hundreds of thousands of dollars are raised for other charities through events such as Shalom.
                    I work on the media team, where I help set up, operate, and tear down cameras, lighting, and sound.
                </BodyText>
                <BodyText variant="body1" paragraph>
                    Outside of Breakway, I also participate in The Big Event. More info for each of these can be found below:
                </BodyText>
            </Grid>
            <Grid item xs={12} md={6}>
                <ClickableCard title="Breakaway Ministries"
                    description="Link to Breakaway's site."
                    icon={PeopleIcon}
                    url="https://www.breakawayministries.org/"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <ClickableCard title="The Big Event"
                    description="More about The Big Event."
                    icon={PeopleIcon}
                    url="https://bigevent.tamu.edu/"
                />
            </Grid>
        </Grid>
    )
}

export default Service;