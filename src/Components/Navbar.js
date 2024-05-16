import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from '@mui/material';

const Navbar = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [activeSection, setActiveSection] = useState('');
  const links = ['Messages', 'Websites', 'Projects', 'Links'];
  const sectionRefs = useRef(links.map(() => React.createRef()));

 
  const linkStyles = {
    color: '#997950', // Default text color
    marginBottom: 2,
    cursor: 'pointer',
    textDecoration: 'none', 
    transition: 'color 0.3s, box-shadow 0.3s',
    backgroundColor: '#252d35',
    fontSize: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    padding: '8px 8px',
    '&:hover': {
      color: '#ffff', // Text color on hover
      boxShadow: '0px 8px 16px rgba(0, 0, 0, .1)',
    },
  };

  const circleStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: '50%',
  };

  const activeLinkStyles = { // Renamed for clarity
    backgroundColor: '#997950',
    color: '#fff',
    '&:hover': {
      color: '#252d35', // Text color on hover
    },
    '& .MuiTypography-root': { 
      color: '#252d35', // Text color when active
    },
  };

  const letterStyles = {
    fontSize: 18,
    fontWeight: 'bold',
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{
      top: '40%',
      right: 5,
      height: 'auto',
      width: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
    }}>
      <Toolbar disableGutters sx={{ flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {links.map((link, index) => (
            <div ref={sectionRefs.current[index]} key={link}> 
              <Typography
                component="a"
                href={`#${link.toLowerCase()}`}
                sx={{
                  ...linkStyles,
                  ...(activeSection === link ? activeLinkStyles : {}),
                }}
                onClick={() => setActiveSection(link)}
              >
                {isSmallScreen ? (
                  <Box sx={{ ...circleStyles, ...(activeSection === link ? activeLinkStyles : {}) }}>
                    <span style={letterStyles}>{link[0]}</span>
                  </Box>
                ) : (
                  link
                )}
              </Typography>
            </div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
