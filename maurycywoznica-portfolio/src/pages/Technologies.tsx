import React from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import SectionTitle from "../components/SectionTitle";

import pythonLogo from '../imgs/technologies/Python_logo.png';
import djangoLogo from '../imgs/technologies/django-logo-positive.svg';
import reactLogo from '../imgs/technologies/React_logo.svg';
import fastAPILogo from '../imgs/technologies/fastAPI.png';
import flaskLogo from '../imgs/technologies/flask.svg';
import jslogo from '../imgs/technologies/Unofficial_JavaScript_logo_2.png';
import tslogo from '../imgs/technologies/Typescript_logo_2020.png';
import materialUILogo from '../imgs/technologies/material-ui-1.svg';

// Define the styled components for styling
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    height: '100%',
}));

const StyledImg = styled('img')({
    width: '100%',
    height: 'auto',
    maxHeight: '150px',
    objectFit: 'contain',
});

// Define the technologies array
const techData = [
    { img: pythonLogo, title: "Python", description: "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace." },
    { img: djangoLogo, title: "Django", description: "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. It encourages the use of reusable code by providing a rich set of utilities and follows the Model-View-Template architectural pattern." },
    { img: fastAPILogo, title: "FastAPI", description: "FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. It is designed to provide an easy-to-use interface for developing RESTful APIs with excellent performance and automatic validation of request and response data." },
    { img: flaskLogo, title: "Flask", description: "Flask is a lightweight web application framework for Python. It is designed to make getting started quick and easy, with the ability to scale up to complex applications. Flask offers suggestions, but doesn't enforce any dependencies or project layout, providing flexibility in application architecture." },
    { img: reactLogo, title: "React", description: "React is an open-source, front-end, JavaScript library for building user interfaces or UI components. Developed and maintained by Facebook, it allows developers to create large web applications that can change data without reloading the page, improving the user experience." },
    { img: jslogo, title: "JavaScript", description: "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for web pages, it is also used in many non-browser environments. JavaScript is a prototype-based, multi-paradigm, dynamic language that supports object-oriented, imperative, and declarative styles." },
    { img: tslogo, title: "TypeScript", description: "TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly." },
    { img: materialUILogo, title: "Material-UI", description: "Material-UI is a popular React UI framework that implements Google's Material Design. It provides a set of accessible, reusable, and customizable components that make it easy for developers to create consistent and responsive user interfaces across web applications. Material-UI promotes good design practices and helps in building high-quality user experiences." },
];
const Technologies: React.FC = () => {
    return (
            <Container>
                <SectionTitle title="My favorite technologies" />
                <Grid container spacing={3} py={3}>
                    {techData.map((tech, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StyledPaper elevation={3}>
                                <Box display="flex" justifyContent="center" alignItems="center" minHeight="150px">
                                    <StyledImg src={tech.img} alt={tech.title} />
                                </Box>
                                <Typography variant="h6" component="h2" color="textSecondary" textAlign={"center"}>
                                    {tech.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {tech.description}
                                </Typography>
                            </StyledPaper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
    );
};

export default Technologies;
