import React from 'react';
import { Typography, Box} from '@mui/material';
import '../style/Footer.css';
import '../style/colors.css';

const Footer: React.FC = () => {
    return (
        <footer className="pale-blue_bg" >
            <Box sx={{
                background: 'linear-gradient(90deg, rgb(176, 224, 230 ) 40%, rgb(135, 206, 250) 60%)',
                py: 2,
            }}>
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