import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import '../style/Header.css';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className="header-title">
                    Maurycy Woźnica
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

