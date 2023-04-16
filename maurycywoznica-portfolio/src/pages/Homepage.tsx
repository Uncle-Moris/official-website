import React from 'react';
import { Box, Grid, Typography, Button, Container, Card, CardHeader, CardContent, CardMedia , Avatar} from '@mui/material';
import myImg from '../imgs/nice-mjw.svg';
import SectionTitle from '../components/SectionTitle';
import '../style/Homepage.css';

const Homepage = () => {
    return (
        <Container>
            <SectionTitle title={'Hello'} />
            <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <section className="section-container">
                                <Grid container alignItems="center">
                                    <Grid item xs={12} sm={6}>
                                        <Avatar alt="Maurycy Woźnica" src={myImg} className="" sx={{
                                            height: { xs: 'auto', sm: 'auto' },
                                            width: { xs: '100%', sm: 'auto'  }, // Adjusted the width to match the height for a square image
                                            m: -1,
                                            borderRadius: 0, // Changed the borderRadius to 0 for a square image,
                                            padding: 2,
                                        }} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <div className="text-container">
                                            <Typography variant="h3">About Me</Typography>
                                            <Typography variant="body1">My name is Maurycy Woźnica, and I'm a visionary programmer and artist based in Warsaw, Poland. I have a passion for creating unique projects that provide users with new value. With years of experience in the field, I'm constantly challenging myself to push the boundaries of what's possible.</Typography>
                                            <Typography variant="body1">As a programmer, I believe that the code we write can be a form of art. I enjoy finding creative solutions to complex problems and developing innovative technologies that help make people's lives easier. My ultimate goal is to create products that are both beautiful and functional, and that make a real difference in people's lives.</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </section>
                        </Grid>
                    <Grid item xs={12}>
                        <section className="section-container">
                            <div className="text-container">
                                <Typography variant="h3">Vision</Typography>
                                <Typography variant="body1">My vision is to build new products and technologies that break away from the beaten track. I'm always searching for new ways to innovate and create products that are not only unique, but also offer real value to users.</Typography>
                                <Typography variant="body1">In my work, I'm inspired by the idea that technology can be a force for good in the world. I believe that by creating products that solve real problems, we can make a positive impact on people's lives. That's why I'm constantly seeking out new challenges and opportunities to innovate.</Typography>
                            </div>
                            <div className="image-container"></div>
                        </section>
                    </Grid>
                    <Grid item xs={12}>
                        <section className="section-container">
                            <div className="image-container"></div>
                            <div className="text-container">
                                <Typography variant="h3">Goal</Typography>
                                <Typography variant="body1">
                                My ultimate goal is to make the world a little bit better place through my work. I believe that technology can be a powerful tool for positive change, and I'm committed to using my skills to make a difference.
                                Whether it's developing new technologies that help people live better lives, or creating products that are more sustainable and environmentally friendly, I'm always looking for ways to make a positive impact. With every project I undertake, I strive to create something that not only solves a problem, but also makes the world a better place.
                                </Typography>
                            </div>
                        </section>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );};

export default Homepage;