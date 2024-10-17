import React, { useState } from 'react'; // Destructure useState directly
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar'; // Import Avatar directly
import { Link } from 'react-router-dom';

const pages = [
    { label: 'Par Mani', path: '/par-mani' },
    { label: 'Dzivnieki', path: '/dzivnieki' }
];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null); // Use destructured useState

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#6A0572' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar
                        alt="Eliza"
                        src="../imgs/Eliza.jpg"
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Elīza
                    </Typography>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                                    <Typography component={Link} to={page.path} sx={{ textAlign: 'center' }}>
                                        {page.label}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Avatar
                        alt="Eliza"
                        src={require('../imgs/Eliza.jpg')}
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}
                    />

                    {/* Desktop Buttons */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                component={Link}
                                to={page.path}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'lightpink', display: 'block' }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
