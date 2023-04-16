// src/components/SectionTitle.tsx
import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
    return (
        <Box
            sx={{
                my: 2,
                py: 3,
                px: 2,
                textAlign: 'center',
                fontWeight: 200,
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 12,
            }}
        >
            <Typography variant="h1" component="h1" className={'title_gradient'}>
                {title}
            </Typography>
        </Box>
    );
};

export default SectionTitle;
