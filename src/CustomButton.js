// CustomButton.jsx
import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        background: 'linear-gradient(45deg, #FF6B6B, #FFD93D)',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#FFFFFF',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0px 4px 15px rgba(255, 107, 107, 0.4)',
        '&:hover': {
          transform: 'scale(1.1)',
          boxShadow: '0px 6px 20px rgba(255, 107, 107, 0.6)',
        },
      }}
    >
      {text}
    </Button>
  );
};

export default FancyButton;
