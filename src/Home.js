// Home.jsx
import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import CardComponent from './CardComponent';
import myLogo from './assets/zebra.png'; // Import your logo image

const Home = () => {
  const cards = [
    { title: 'Google', description: 'Go to Google', link: 'https://www.google.com' },
    { title: 'YouTube', description: 'Go to YouTube', link: 'https://www.youtube.com' },
    { title: 'GitHub', description: 'Go to GitHub', link: 'https://www.github.com' },
    { title: 'Google', description: 'Go to Google', link: 'https://www.google.com' },
    { title: 'YouTube', description: 'Go to YouTube', link: 'https://www.youtube.com' },
    { title: 'GitHub', description: 'Go to GitHub', link: 'https://www.github.com' },
    { title: 'Google', description: 'Go to Google', link: 'https://www.google.com' },
    { title: 'YouTube', description: 'Go to YouTube', link: 'https://www.youtube.com' },
    { title: 'GitHub', description: 'Go to GitHub', link: 'https://www.github.com' },
    { title: 'Google', description: 'Go to Google', link: 'https://www.google.com' },
    { title: 'YouTube', description: 'Go to YouTube', link: 'https://www.youtube.com' },
    { title: 'GitHub', description: 'Go to GitHub', link: 'https://www.github.com' },
    { title: 'Google', description: 'Go to Google', link: 'https://www.google.com' },
    { title: 'YouTube', description: 'Go to YouTube', link: 'https://www.youtube.com' },
    { title: 'GitHub', description: 'Go to GitHub', link: 'https://www.github.com' },
    // Add more cards as needed
  ];

  // Set the document title when the Home component is rendered
  useEffect(() => {
    document.title = 'Srjana 2024';
  }, []);

  return (
    <Box>
      {/* Page Header */}
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center', alignItems: 'center' }}> {/* Center and align items */}
          {/* Logo Image */}
          <img
            src={myLogo} // Use your logo
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }} // Adjust height to fit the text
          />
          <Typography variant="h6" component="div">
            Srjana 2024
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Card Content */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          padding: 2,
          marginTop: 2, // Add some space below the header
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 300px',
              maxWidth: '345px',
            }}
          >
            <CardComponent title={card.title} description={card.description} link={card.link} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
