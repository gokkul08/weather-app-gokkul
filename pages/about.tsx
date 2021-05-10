/**
 * This is the about page.
 * This contains information about this application and features
 * This corresponds to /about path
 */

import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledContainer = styled(Container)`
        padding-top: 20px;
    `;

export const About = () => {
    return (
        <StyledContainer maxWidth="md">
            <Grid container spacing={1}>
                <Grid item xs>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                        <Typography>What is this website?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            This application is created to help users access their weather data
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                        <Typography>What features does this website offer?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                                <li>Users can get Weather data for any location in the world</li>
                                <li>Users can search by City, State and Zip</li>
                                <li>Users can convert weather temperature from °C to °F and vice-versa</li>
                                <li>Users can access a detailed weather page to get more details on their search</li>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                        <Typography>What technologies does this website use?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                           This website uses NextJS, ReactJS, TypeScript, Styled Components and Material UI
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                        <Typography>Author</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            This website is developed by Annamalai Gokkul Natarajan. I can be reached at agn253@nyu.edu
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default About;