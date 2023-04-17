import React from 'react';
import { Grid, Typography, Container, Avatar, Paper } from '@mui/material';
import myImg from '../imgs/nice-mjw.svg';
import visionImg from '../imgs/b4d02dc4bd4c439ba53bb968d0b61eba.webp';
import SectionTitle from '../components/SectionTitle';
import '../style/colors.css';


const About = () => {
    return (
        <Container>

            <SectionTitle title={'Hello'}/>

            <Grid container spacing={1} className={'powder-blue_bg'} p={1}
                  sx={{
                      borderRadius: 12,
                      my:3
                  }}>
                <Grid item xs={12}>
                    <Typography variant="h2" sx={{
                        textAlign: 'center',
                        mt: 2, color:'white',
                        fontWeight: 400 }}>
                        About Me
                    </Typography>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={12}  lg={4}>
                        <Avatar
                            alt="Maurycy Woźnica"
                            src={myImg}
                            sx={{
                                p: 4,
                                height: { xs: 'auto', sm: 'auto' },
                                width: { xs: 'auto', sm: 'auto' },
                                borderRadius: 12,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                        />
                    </Grid>
                    <Grid item lg={8} xs={12} >
                        <div className="text-container" >
                            <Typography variant="body1">
                                My name is <b>Maurycy Woźnica</b>, and I'm a visionary programmer and artist based in Warsaw, Poland. I have a passion for creating unique projects that provide users with new value. With years of experience in the field, I'm constantly challenging myself to push the boundaries of what's possible.
                            </Typography>
                            <Typography variant="body1">
                                As a programmer, I believe that the code we write can be a form of art. I enjoy finding creative solutions to complex problems and developing innovative technologies that help make people's lives easier. My ultimate goal is to create products that are both beautiful and functional, and that make a real difference in people's lives.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={1} className={'pale-blue_bg '} p={1}
                  sx={{
                      borderRadius: 12,
                      my:3
                  }}>
                <Grid item xs={12}>
                    <Typography variant="h2" sx={{
                        textAlign: 'center',
                        mt: 2, color:'white',
                        fontWeight: 400 }}>
                        Vision
                    </Typography>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={12}  lg={4}>
                        <Avatar
                            alt="Maurycy Woźnica"
                            src={visionImg}
                            sx={{
                                p: 4,
                                height: { xs: 'auto', sm: 'auto' },
                                width: { xs: 'auto', sm: 'auto' },
                                borderRadius: 50,
                                marginLeft: 'auto',
                                marginRight: 'auto',

                            }}
                        />
                    </Grid>
                    <Grid item lg={8} xs={12}>
                        <div className="text-container" >
                            <Typography variant="body1">
                                My name is <b>Maurycy Woźnica</b>, and I'm a visionary programmer and artist based in Warsaw, Poland. I have a passion for creating unique projects that provide users with new value. With years of experience in the field, I'm constantly challenging myself to push the boundaries of what's possible.
                            </Typography>
                            <Typography variant="body1">
                                As a programmer, I believe that the code we write can be a form of art. I enjoy finding creative solutions to complex problems and developing innovative technologies that help make people's lives easier. My ultimate goal is to create products that are both beautiful and functional, and that make a real difference in people's lives.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={1} className={'powder-blue_bg'} p={1}
                  sx={{
                      borderRadius: 12,
                      my:3
                  }}>
                <Grid item xs={12}>
                    <Typography variant="h2" sx={{
                        textAlign: 'center',
                        mt: 2, color:'white',
                        fontWeight: 400 }}>
                        About Me
                    </Typography>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={12}  lg={4}>
                        <Avatar
                            alt="Maurycy Woźnica"
                            src={myImg}
                            sx={{
                                p: 4,
                                height: { xs: 'auto', sm: 'auto' },
                                width: { xs: 'auto', sm: 'auto' },
                                borderRadius: 12,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                        />
                    </Grid>
                    <Grid item lg={8} xs={12} >
                        <div className="text-container" >
                            <Typography variant="body1">
                                My name is <b>Maurycy Woźnica</b>, and I'm a visionary programmer and artist based in Warsaw, Poland. I have a passion for creating unique projects that provide users with new value. With years of experience in the field, I'm constantly challenging myself to push the boundaries of what's possible.
                            </Typography>
                            <Typography variant="body1">
                                As a programmer, I believe that the code we write can be a form of art. I enjoy finding creative solutions to complex problems and developing innovative technologies that help make people's lives easier. My ultimate goal is to create products that are both beautiful and functional, and that make a real difference in people's lives.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    );
};

export default About;