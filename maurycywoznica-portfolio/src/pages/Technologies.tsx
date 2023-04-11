import React from 'react';
import { Container, Typography } from '@mui/material';
import '../style/Technologies.css';

const Technologies: React.FC = () => {
    return (
        <section className="technologies">
            <Container>
                <Typography variant="h4" className="section-title">
                    Technologies
                </Typography>
                <Typography variant="body1" className="section-text">
                    Python, JavaScript, React, Django, AI
                </Typography>
            </Container>
        </section>
    );
};

export default Technologies;
