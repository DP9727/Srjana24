// Home.jsx
import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import CardComponent from './CardComponent';
import myLogo from './assets/zebra.png'; // Import your logo image
import image from './assets/image.jpg'
import image2 from './assets/image2.jpg'
import srjanaImg from './assets/srjana.png'

const Home = () => {
  const cards = [
    { title: 'Zebra Code Compass', description: '', link: 'https://zebra.zoom.us/j/93122813962?pwd=UDeZGKBIHopPDaAqf2FLlMYCH8QEJS.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'NxtGen RxLogger & Insights', description: '', link: 'https://zebra.zoom.us/j/93887852180?pwd=Ie7bAFR1mj17yamSqVXyLFAknyeJ6j.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'zCOP', description: '', link: 'https://zebra.zoom.us/j/92557131622?pwd=D7J44fyA3tOVuBWKIlSGbPBWPitZmx.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    // { title: 'Zebra Threat Modeler', description: '', link: 'https://zebra.zoom.us/j/98923777621?pwd=PCpieBXXLl0X4Okylv56cxxfZko8Ca.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'zGuru', description: '', link: 'https://zebra.zoom.us/j/95918511942?pwd=1qRHeQqDJvUoQMqgTKx07ceaeaEAZd.1', bgColor: "#0b521e", imageSrc: srjanaImg },

    { title: 'TruePut', description: '', link: 'https://zebra.zoom.us/j/94237450819?pwd=CloPtnBlcVRiSaafY3CGIDwgWFtaoC.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Docksy', description: '', link: 'https://zebra.zoom.us/j/97194304487?pwd=hFiRbpIaYD25ps79sF3RsUXLQJNcA7.1', bgColor: "#2464a3", imageSrc: srjanaImg },

    { title: 'Zebra SSO Bridge', description: '', link: 'https://zebra.zoom.us/j/98779293177?pwd=jTGWbh3JSx4CzwM6hrZR9uP2wuQwh1.1', bgColor: "#693915", imageSrc: srjanaImg },
    { title: 'zPRISM', description: '', link: 'https://zebra.zoom.us/j/95461662620?pwd=cmvlgwlmbHdoaHEM7DabaKk5UbMihG.1', bgColor: "#693915", imageSrc: srjanaImg },


    { title: 'Voice Guardian', description: '', link: 'https://zebra.zoom.us/j/93566409324?pwd=nAY7SasunIdhAMTJbMaVi4Bk9b0GxP.1', bgColor: "#784580", imageSrc: srjanaImg },
    { title: 'zDepth', description: '', link: 'https://zebra.zoom.us/j/96237735812?pwd=1yO9OJQUKCVBwfZNUq5BWAPgOpIrBI.1', bgColor: "#784580", imageSrc: srjanaImg },
    { title: 'Intelligent Charging Solutions', description: '', link: 'https://zebra.zoom.us/j/97474389295?pwd=deZgkSoT2nWEbyvvXzhWVKp04iITMN.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    
    { title: 'CyberArchitectAI', description: '', link: 'https://zebra.zoom.us/j/98707643289?pwd=Ij33QISinqgwjMOeGdL3AgN9HkcNVK.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'Operations Platform', description: '', link: 'https://zebra.zoom.us/j/92189574548?pwd=blssbpWK0L4kLV4LEQGCRZAZay1Jwm.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'Demo 1', description: '', link: 'https://zebra.zoom.us/j/98449132173?pwd=Rj3rDxjSYvBgunqHiFASvWUAd5RbKQ.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'Demo 2', description: '', link: 'https://zebra.zoom.us/j/92189574548?pwd=blssbpWK0L4kLV4LEQGCRZAZay1Jwm.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    // Add more cards as needed
  ];

  // Set the document title when the Home component is rendered
  useEffect(() => {
    document.title = 'Srjana 2025';
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
            Srjana 2025
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
            <CardComponent title={card.title} description={card.description} link={card.link} bgColor={card.bgColor} imageSrc={card.imageSrc} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
