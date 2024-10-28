// Home.jsx
import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import CardComponent from './CardComponent';
import myLogo from './assets/zebra.png'; // Import your logo image

const Home = () => {
  const cards = [
    { title: 'Demo 1', description: 'Demo 1 description', link: 'https://zebra.zoom.us/j/94106441052?pwd=hT7Rfs9hgeZSmdLdwEXqBenkDPGIIm.1' },
    { title: 'Demo 2', description: 'Demo 2 description', link: 'https://zebra.zoom.us/j/98653753354?pwd=SkL2dkAVl7JEkYtHAM8jkO2jNqHgkh.1' },
    { title: 'Demo 3', description: 'Demo 3 description', link: 'https://www.youtube.com/results?search_query=MachineLearning' },
    { title: 'Demo 4', description: 'Demo 4 description', link: 'https://www.youtube.com/results?search_query=Wifi' },
    { title: 'Demo 5', description: 'Demo 5 description', link: 'https://www.youtube.com/results?search_query=Bluetooth' },
    { title: 'Demo 6', description: 'Demo 6 description', link: 'https://www.youtube.com/results?search_query=AccessPoint' },
    { title: 'Demo 7', description: 'Demo 7 description', link: 'https://www.youtube.com/results?search_query=Wireshark' },
    { title: 'Demo 8', description: 'Demo 8 description', link: 'https://www.youtube.com/results?search_query=Android' },
    { title: 'Demo 9', description: 'Demo 9 description', link: 'https://www.youtube.com/results?search_query=AndroidFramework' },
    { title: 'Demo 10', description: 'Demo 10 description', link: 'https://www.youtube.com/results?search_query=AndroidScanningFramework' },
    { title: 'Demo 11', description: 'Demo 11 description', link: 'https://www.youtube.com/results?search_query=ZebraTechnologies' },
    { title: 'Demo 12', description: 'Demo 12 description', link: 'https://www.youtube.com/results?search_query=OperatingSystems' },
    { title: 'Demo 13', description: 'Demo 13 description', link: 'https://www.youtube.com/results?search_query=ComputerNetworks' },
    { title: 'Demo 14', description: 'Demo 14 description', link: 'https://www.youtube.com/results?search_query=ArtificialInteligence' },
    { title: 'Demo 15', description: 'Demo 15 description', link: 'https://www.youtube.com/results?search_query=IndoorLocation' },
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
