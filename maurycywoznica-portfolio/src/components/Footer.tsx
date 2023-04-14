import React from 'react';
import {Container, Typography, Box, Link} from '@mui/material';
import '../style/Footer.css';
import '../style/colors.css';

const Footer: React.FC = () => {
    return (
        <footer className="pale-blue_bg">
            <Box>
                <Typography variant="body2" align="center" className={''}>
                    &copy; {new Date().getFullYear()} Maurycy Woźnica
                </Typography>
            </Box>
        </footer>
    );
};


export default Footer;
