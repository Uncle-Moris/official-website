import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import myImg from '../imgs/nice-mjw.svg';
import '../style/Homepage.css';

const Homepage = () => {
    return (
        <Box

        >
            {/* Header */}
            <Box
                sx={{
                    py: 3,
                    px: 2,
                    textAlign: 'center',
                    fontWeight: 200,
                }}
            >
                <Typography variant="h4" component="h1" className="headerText">
                    Welcome to My Site
                </Typography>
            </Box>

            {/* Main content */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ p: 2 }}>
                    {/* Left column */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                border: '1px solid #ccc',
                                borderRadius: 4,
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img src={myImg} alt="My image" className="responsiveImage" />
                        </Box>
                    </Grid>

                    {/* Right column */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                About Me
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                                justo nec lorem porttitor blandit. Ut quis velit eu nisi semper
                                viverra vel vel mi. Sed fermentum elit eget turpis fermentum
                                ullamcorper. Vestibulum commodo malesuada arcu a consectetur.
                                Donec eleifend magna eu ante tincidunt accumsan. Praesent in
                                commodo arcu. Fusce finibus blandit dolor a commodo.
                            </Typography>

                            <Typography variant="h5" component="h2" gutterBottom>
                                About Me
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                                justo nec lorem porttitor blandit. Ut quis velit eu nisi semper
                                viverra vel vel mi. Sed fermentum elit eget turpis fermentum
                                ullamcorper. Vestibulum commodo malesuada arcu a consectetur.
                                Donec eleifend magna eu ante tincidunt accumsan. Praesent in
                                commodo arcu. Fusce finibus blandit dolor a commodo.
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom>
                                About Me
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                                justo nec lorem porttitor blandit. Ut quis velit eu nisi semper
                                viverra vel vel mi. Sed fermentum elit eget turpis fermentum
                                ullamcorper. Vestibulum commodo malesuada arcu a consectetur.
                                Donec eleifend magna eu ante tincidunt accumsan. Praesent in
                                commodo arcu. Fusce finibus blandit dolor a commodo.
                            </Typography>
                            <Button variant="outlined" color="inherit">Contact Me</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Homepage;
