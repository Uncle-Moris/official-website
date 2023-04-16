import React from 'react';
import { Typography, Box} from '@mui/material';
import '../style/Footer.css';
import '../style/colors.css';

const Footer: React.FC = () => {
    return (
        <footer className="pale-blue_bg">
            <Box >
                <Typography variant="body2"
                            align="center"
                            sx={{color: 'white', py: 1}}
                            fontSize={16}
                            fontWeight={"bold"}
                >
                    &copy; {new Date().getFullYear()} Maurycy Woźnica
                </Typography>
            </Box>
        </footer>
    );
};
export default Footer;