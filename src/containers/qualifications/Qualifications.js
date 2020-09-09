import React from 'react';
import { Grid } from '@material-ui/core';

// Note: if I can figure out how to work react-pdf with google docs, this would be better than the iframe
// import samplePDF from '../../assets/sample.pdf';
// import { Document, Page, pdfjs } from 'react-pdf';
// const onlinePDF = 'https://cors-anywhere.herokuapp.com/https://drive.google.com/file/d/1ZpaVx2YLMEfQPALeClalHtMp_0NvAts_/preview';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Qualifications = () => {
    return (
        <Grid container
            item
            spacing={6}
            justify="center"
            alignItems="flex-start"
            xs={10}
        >
            <Grid item>
                <iframe src="https://drive.google.com/file/d/1ZpaVx2YLMEfQPALeClalHtMp_0NvAts_/preview" width="800" height="1040" frameBorder="0"></iframe>
            </Grid>
        </Grid>
    )
}

export default Qualifications;