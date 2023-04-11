import React from 'react';
import { Container, Typography } from '@mui/material';
import '../style/About.css';

const About: React.FC = () => {
    return (
        <section className="about">
            <Container>
                <Typography variant="h4" className="section-title">
                    About Me
                </Typography>
                <Typography variant="body1" className="section-text">
                    Maurycy Woźnica is a visionary and self-educated developer who deeply believes that his apps and services can change the lives of many people for the better. He likes to provide value through his work.
                </Typography>
            </Container>
        </section>
    );
};

export default About;
