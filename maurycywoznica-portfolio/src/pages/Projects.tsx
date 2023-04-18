import React from 'react';
import { Container, Paper, Grid, Typography } from '@mui/material';

import SectionTitle from '../components/SectionTitle';

import ATLogo from '../imgs/projects/logo.jpg';
import CLogo from '../imgs/projects/icon-512x512.png';

const projectData = [
    { img: ATLogo, title: "Auri Trade", link:'https://auritrade.pl', description: "Auri Trade offers high-quality investment solutions with a focus on delivering excellent service and results."},
    { img: CLogo, title: "Cryptionis", link:'https://app.cryptionis.pl',description: "Cryptionis is a startup focused on data analysis using advanced modeling techniques. Their primary expertise lies in cryptography, enabling them to provide secure and accurate data analysis for their clients."}
]

const Projects: React.FC = () => {
    return (
        <Container>
            <SectionTitle title="Projects in which I participate" />
            <Grid container spacing={4}>
                {projectData.map((project, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Paper className="project-paper" elevation={2} sx={{m:3, p:2, display: 'flex'}}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <img src={project.img} alt={`${project.title} Logo`} className="project-image" style={{width: '100%', height: 'auto'}} />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <Typography variant="h5" color="textSecondary" >
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;