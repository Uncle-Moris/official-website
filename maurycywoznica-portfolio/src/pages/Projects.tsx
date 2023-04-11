import React from 'react';
import { Container, Typography } from '@mui/material';
import FilePlaceholder from '../components/FilePlaceholder';
import '../style/Projects.css';

const Projects: React.FC = () => {
    return (
        <section className="projects">
            <Container>
                <Typography variant="h4" className="section-title">
                    Projects
                </Typography>
                <Typography variant="body1" className="section-text">
                    Project links will be added here later.
                </Typography>
                <FilePlaceholder />
            </Container>
        </section>
    );
};

export default Projects;
