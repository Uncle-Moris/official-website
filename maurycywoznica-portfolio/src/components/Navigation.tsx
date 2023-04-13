import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../style/Navigation.css';
import AccountCircle from '@mui/icons-material/AccountCircle';

const MJWLogo : React.FC = () => {

    return (
        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
        //     <defs>
        //         <linearGradient id="pink-to-blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        //             <stop offset="0%" stopColor="#FF69B4" />
        //             <stop offset="100%" stopColor="#1E90FF" />
        //         </linearGradient>
        //     </defs>
        //     <text x="50%" y="40%" text-anchor="middle" font-size="50" font-weight="bold" fill="url(#pink-to-blue-gradient)">
        //         M J
        //     </text>
        //     <text x="50%" y="70%" text-anchor="middle" font-size="52" font-weight="bold" fill="url(#pink-to-blue-gradient)">
        //         W
        //     </text>
        // </svg>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="25" y="30" font-size="24" font-family="Arial" fill="#FFC0CB">M</text>
            <text x="50" y="30" font-size="24" font-family="Arial" fill="#ADD8E6">J</text>
            <path d="M36.667 63.3333C41.6667 58.3333 58.3333 58.3333 63.3333 63.3333C68.3333 68.3333 68.3333 83.3333 63.3333 88.3333C58.3333 93.3333 41.6667 93.3333 36.6667 88.3333C31.6667 83.3333 31.6667 68.3333 36.667 63.3333Z" fill="#FFC0CB"/>
            <circle cx="41.6667" cy="63.3333" r="5" fill="#FFC0CB"/>
            <circle cx="58.3333" cy="63.3333" r="5" fill="#FFC0CB"/>
            <rect x="41.6667" y="58.3333" width="3" height="10" fill="#FFC0CB"/>
            <rect x="55" y="58.3333" width="3" height="10" fill="#FFC0CB"/>
            <circle cx="50" cy="73.3333" r="10" fill="#ADD8E6"/>
        </svg>

    )
}
const Navigation: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    const drawer = (
        <div className="navigation">
            <List>
                {['About', 'Technologies', 'Projects', 'Contact'].map((text, index) => (
                    <ListItem button key={text} onClick={closeDrawer} role="button" tabIndex={0} className="MuiListItem-root">
                        <NavLink to={`/${text.toLowerCase()}`} className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>
                            {text}
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <AppBar position="static" className="navigation">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>

                    <NavLink to="/" className="nav-link">
                        <MJWLogo></MJWLogo>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                        Maurycy Woźnica
                    </NavLink>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {['About', 'Technologies', 'Projects', 'Contact'].map((text, index) => (
                        <Button color="inherit" key={text}>
                            <NavLink to={`/${text.toLowerCase()}`} className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>
                                {text}
                            </NavLink>
                        </Button>
                    ))}
                </Box>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </AppBar>
    );
};
const pastelPalettes = [
    {
        "Soft Pink": { hex: "#FAD0E4", rgba: "rgba(250, 208, 228, 1)" },
        "Baby Blue": { hex: "#B8E0FF", rgba: "rgba(184, 224, 255, 1)" },
        "Lilac": { hex: "#E3BEFF", rgba: "rgba(227, 190, 255, 1)" },
        "Whisper White": { hex: "#F5F5F5", rgba: "rgba(245, 245, 245, 1)" },
    },
    // 49 more palettes
];

export default Navigation;

