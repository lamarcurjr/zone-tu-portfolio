import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const radiate = keyframes`
  0% {
    text-shadow: 0 0 5px #997950;
  }
  50% {
    text-shadow: 0 0 15px #997950, 0 0 30px #ffcc00;
  }
  100% {
    text-shadow: 0 0 5px #997950;
  }
`;

// Styled Typography for consistent text appearance
const BubbleTypography = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '4rem',
  fontWeight: 800,
  color: '#252d35', 
  textShadow: '0 0 5px #ffff',
  animation: `${radiate} 3s ease-in-out infinite`,
  textTransform: 'uppercase',

  '&::first-letter': {
    fontSize: '1.5em',
    marginRight: '-0.15em',
  },
});

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
        maxWidth: 'unset', 
      }}
    >
      
      <Button 
      component={Link} 
      to="/home"
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor:'none',
        textTransform: 'none',
        padding: 0,           
        minWidth: 'unset',    
        '&:hover': { backgroundColor:'transparent',textDecoration: 'none' } 
      }}
    >
      <BubbleTypography variant="h1">
        ZoneTu
      </BubbleTypography>
    </Button>
  </Container>
  );
};

export default ZoneTu;
