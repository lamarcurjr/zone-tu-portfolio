// ZoneTu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const ZoneTu = () => {
  // Add inline style to set margin: 0 for the body element
  document.body.style.margin = '0';

  return (
    <Container 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#1a1a1a', 
        color: '#fff',
        maxWidth: 'unset', 
      }}
    >
      <Typography variant="h4" gutterBottom>Welcome to ZoneTu</Typography>
      <Typography variant="body1" paragraph>
        Your destination for exploring amazing projects and sites!
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/HomePage">
        Explore Portfolio
      </Button>
    </Container>
  );
};

export default ZoneTu;
