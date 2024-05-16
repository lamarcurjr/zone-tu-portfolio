import { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

const SettingsHeader = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isExtraSmallScreen = useMediaQuery('(max-width: 400px)');
  const [anchorEl, setAnchorEl] = useState(null);

  const links = [
    { label: 'Login', icon: <LoginIcon />, to: '/login' },
    { label: 'Contact', icon: <ContactMailIcon />, to: '/contact' },
    { label: 'Settings', icon: <SettingsIcon />, to: '/settings' },
  ];

  const linkStyles = {
    color: '#997950',
    textDecoration: 'none',
    backgroundColor: '#252d35',
    borderRadius: '5px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed" 
      elevation={2} 
      sx={{
        top: 5,
        right: 5,
        height: '48px',
        width: 'auto', 
        ...linkStyles,
      }}
    >
      <Toolbar disableGutters>
        <Box sx={{ 
            display: 'flex', 
            gap: 0, 
            flexWrap: 'wrap', 
            justifyContent: 'flex-end', 
            alignItems: 'center',
        }}>
          {isExtraSmallScreen ? (
            <>
              <IconButton sx={{ color: '#997950', marginBottom: 1, '&:hover': { color: '#ffff' }}} onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom', 
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                PaperProps={{
                  sx: { 
                    right: '5px',
                    backgroundColor: '#997950', 
                    color: '#252d35',
                    marginTop: '1px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                  }
                }}
              >
                {links.map(link => (
                  <MenuItem key={link.label} component={Link} to={link.to} onClick={handleMenuClose}>
                    {link.icon} {link.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            links.map(link => (
              <IconButton
                key={link.label}
                component={Link}
                to={link.to}
                sx={{
                  color: '#997950',
                  padding: '5px',
                  marginBottom: 1,
                  '&:hover': {
                    color: '#ffff',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {isSmallScreen ? link.icon : <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: 1 }}>{link.label}</Typography>}
              </IconButton>
            ))
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SettingsHeader;
