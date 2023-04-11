import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../style/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <Container>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body1" className="footer-text">
                        &copy; {new Date().getFullYear()} Maurycy Woźnica
                    </Typography>
                    <Typography variant="body1" className="footer-text">
                        Email: mjw11@wp.pl | Phone: 123456789
                    </Typography>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;
