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
    { title: 'Android Thin Client', description: '', link: 'https://zebra.zoom.us/j/91027534823?pwd=bpvignd9brvExiDwHjNVtBuuLdYXbg.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'Self Powered Electronic Shelf Labels', description: '', link: 'https://zebra.zoom.us/j/95527987439?pwd=AU1abWCpS7a8Lx0q54oT9467bhUMO6.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'Enhanced Positioning using BLE AoA', description: '', link: 'https://zebra.zoom.us/j/99454762624?pwd=l3hDR7gpJDMUQZacavGU6cU08UTYPx.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'zInsight Edge AI Diagnostics', description: '', link: 'https://zebra.zoom.us/j/91360224119?pwd=oqxiUwkBuoSyYjpQkVrvG9WpmMYtHU.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Task-E - Task Insights & All Things "Content"', description: '', link: 'https://zebra.zoom.us/j/98923777621?pwd=PCpieBXXLl0X4Okylv56cxxfZko8Ca.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Intelligent MDF Rule Generator', description: '', link: 'https://zebra.zoom.us/j/94134154671?pwd=t2syMLQollaalFDeCdO5WbWQ3VLXWX.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Zippy', description: '', link: 'https://zebra.zoom.us/j/94516853896?pwd=gHtcKdhlx7jYQcvc49CwRah9cOuNEU.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Zebra Adaptive Print (ZAP)', description: '', link: 'https://zebra.zoom.us/j/91548074656?pwd=6g4GgLhxaO2aMvbVkWBb9t5eR7cp3i.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Snap & Fill', description: '', link: 'https://zebra.zoom.us/j/99231998316?pwd=Wizzvw15kBMIFLHxvVS7jdbDorey91.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'zVoice Isolator', description: '', link: 'https://zebra.zoom.us/j/97696123286?pwd=Uyh0Dua5L5JJonVM5xdsbQmiPJtdib.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'zSecurity Alert', description: '', link: 'https://zebra.zoom.us/j/91904431943?pwd=PKgZcTW0E0Y41XrjIg7eTtgrxbE2qG.1', bgColor: "#693915", imageSrc: srjanaImg },
    { title: 'Adaptive Imaging', description: '', link: 'https://zebra.zoom.us/j/93827142314?pwd=WYFcaRT0Muxs8KVAB5wSCBCM4F3dnT.1', bgColor: "#784580", imageSrc: srjanaImg },
    { title: 'Zebra Playground', description: '', link: 'https://zebra.zoom.us/j/95721066900?pwd=7cm4faAaSAqrxZcO1dNVJ9BBh1Cfpq.1', bgColor: "#784580", imageSrc: srjanaImg },
    { title: 'zPower Conserver', description: '', link: 'https://zebra.zoom.us/j/96593891646?pwd=f5Hagv6vMy3P8E3dKWFVPgaFoVAGyi.1', bgColor: "#784580", imageSrc: srjanaImg },
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
            <CardComponent title={card.title} description={card.description} link={card.link} bgColor={card.bgColor} imageSrc={card.imageSrc} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
