import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledHeader = styled(Box)(({ theme }) => ({
  // Dark Gold Gradient
  background: 'linear-gradient(135deg, #333, #997950)',
  
  // Padding Adjustments
  padding: theme.spacing(0, 8, 0),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',
  color: '#fff',
  '& h2': {
    fontFamily: 'Playfair Display, serif',
    textTransform: 'uppercase',
    fontSize: '2.5rem',
    letterSpacing: '0.1em',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

function SectionHeader({ title, subtitle, onClick }) { 
  return (
    <StyledHeader onClick={onClick}>
      <Typography variant="h2" component="h2">{title}</Typography>
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
    </StyledHeader>
  );
}

export default SectionHeader;


