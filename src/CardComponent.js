// CardComponent.jsx
import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

const CardComponent = ({ title, description, link }) => {
  
  const handleClick = () => {
    // window.location.href = link; // Redirects to an external link
    window.open(link, '_blank', 'noopener,noreferrer'); // Opens the link in a new tab
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', marginBottom: 2 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
