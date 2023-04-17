import React from 'react';
import { Container, Typography } from '@mui/material';
import SectionTitle from "../components/SectionTitle";

const Technologies: React.FC = () => {
    return (
        <>
            <Container>
                    <SectionTitle title="Technologies" />
                    <Typography variant="h4" className="section-title">
                        Technologies
                    </Typography>
                    <Typography variant="body1" className="section-text">
                        Python, JavaScript, React, Django, AI
                    </Typography>
            </Container>
        </>

    );
};

export default Technologies;
