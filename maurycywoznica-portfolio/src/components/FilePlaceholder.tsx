import React from 'react';
import { Box, Typography } from '@mui/material';
import '../style/FilePlaceholder.css';

const FilePlaceholder: React.FC = () => {
    return (
        <Box className="file-placeholder">
            <Typography variant="body1">File will be added here later.</Typography>
        </Box>
    );
};

export default FilePlaceholder;
