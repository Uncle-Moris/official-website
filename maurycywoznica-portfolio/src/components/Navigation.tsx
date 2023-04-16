import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../style/Navigation.css';
import '../style/colors.css';

const Navigation: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    const drawer = (
        <div>
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
        <AppBar position="static"  sx={
          {
            backgroundColor: 'rgba(135, 206, 250, 1)',
          }
        }>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <NavLink to="/" className="nav-link">
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
export default Navigation;

