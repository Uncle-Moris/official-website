import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
    title: string;
}
const SectionTitle: FC<SectionTitleProps> = ({ title}) => {
    return (
        <Box
            sx={{
                my: 2,
                py: 3,
                px: 2,
                textAlign: 'center',
                background: 'linear-gradient(90deg, rgb(176, 224, 230 ) 30%, rgb(135, 206, 250) 60%)',
                borderRadius: 12,
            }}
        >
            <Typography variant="h1" component="h1" color={"white"} fontWeight={400}
            sx={{
             fontSize: { xs: '2rem', md: '3.5rem', lg: '5rem' },
            }}>
                {title}
            </Typography>
        </Box>
    );
};
export default SectionTitle;