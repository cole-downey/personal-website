import React from 'react';
import { Grid } from '@material-ui/core';
import { BodyText } from '../../components/Typography';
import { ClickableCard } from '../../components/Card';
import BusinessIcon from '@material-ui/icons/Business';

// Note: if I can figure out how to work react-pdf with google docs, this would be better than the iframe
// import samplePDF from '../../assets/sample.pdf';
// import { Document, Page, pdfjs } from 'react-pdf';
// const onlinePDF = 'https://cors-anywhere.herokuapp.com/https://drive.google.com/file/d/1ZpaVx2YLMEfQPALeClalHtMp_0NvAts_/preview';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//<iframe src="https://drive.google.com/file/d/1ZpaVx2YLMEfQPALeClalHtMp_0NvAts_/preview" width="800" height="1040" frameBorder="0"></iframe>

const Employers = [
    {
        title: "Prophecy Games",
        description: "Prophecy is a small, independent studio in Alpharetta, GA. It's a sister studio to Hi-Rez (same owner/CEO), and I was invited to transfer from Hi-Rez to Prophecy in January 2023. I worked on Starseige: Deadzone from its inception through its ship date in late July 2023.",
        url: "https://www.prophecygames.com/",
        icon: BusinessIcon,
    },
    {
        title: "Hi-Rez Studios",
        description: "Hi-Rez is a large, independent studio focused on live service multiplayer games. I joined in June 2022 to work on Rogue Company, and spent my last few months on a small FPS prototyping team before being invited to transfer over to Prophecy Games, a sister studio.",
        url: "https://www.hirezstudios.com/",
        icon: BusinessIcon,
    },
    {
        title: "Healthwise",
        description: "Healthwise is a healthcare software nonprofit. I worked here as an intern during the summers of 2020 and 2021.",
        url: "https://www.healthwise.org/",
        icon: BusinessIcon,
    },
    {
        title: "C4 Creamery",
        description: "C4 Creamery is a local ice cream shop in Boise, ID. I worked here as an opening/closing manager the summer of 2019.",
        url: "https://www.c4creamery.com/",
        icon: BusinessIcon,
    },
]

const Qualifications = () => {
    return (
        <Grid container
            item
            spacing={6}
            justify="flex-start"
            alignItems="stretch"
            xs={12} sm={10}
        >
            <Grid item xs={12}>
                <ClickableCard title="Resume" description="Here's my resume, in PDF form."
                    notMaterialIcon
                    icon={<path d="M6 12h10v1h-10v-1zm7.816-3h-7.816v1h9.047c-.45-.283-.863-.618-1.231-1zm-7.816-2h6.5c-.134-.32-.237-.656-.319-1h-6.181v1zm13 3.975v2.568c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h9.5c.312-.749.763-1.424 1.316-2h-12.816v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.886c-.623.26-1.297.421-2 .475zm4-6.475c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2.156-.882l-.696-.696-2.116 2.169-.992-.941-.696.697 1.688 1.637 2.812-2.866z" />}
                    url="https://drive.google.com/file/d/1ZpaVx2YLMEfQPALeClalHtMp_0NvAts_/preview"
                />
            </Grid>
            <Grid item xs={12}>
                <BodyText variant="body1">Previous Employers:</BodyText>
            </Grid>
            {Employers.map((item, key) => (
                <Grid item xs={12} sm={12} md={6} lg={6}>
                <ClickableCard title={item.title}
                    description={item.description}
                    icon={item.icon}
                    url={item.url}
                    />
            </Grid>
            ))}
        </Grid>
    )
}

export default Qualifications;