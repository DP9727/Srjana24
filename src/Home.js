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
    { title: 'Android Thin Client', description: '', link: 'https://zebra.zoom.us/j/94306216893?pwd=NHMS0aUSaQItuxVDDg8fuOJwoVlGul.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'Self Powered Electronic Shelf Labels', description: '', link: 'https://zebra.zoom.us/j/92824214882?pwd=sGl6UuVAaq2RjbO6JnAkxpVQsrhTjk.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'Enhanced Positioning using BLE AoA', description: '', link: 'https://zebra.zoom.us/j/91784313505?pwd=D8uNx40wopwtztFmNxmLAzIxApcT69.1', bgColor: "#0b521e", imageSrc: srjanaImg },
    { title: 'zInsight Edge AI Diagnostics', description: '', link: 'https://zebra.zoom.us/j/96900796467?pwd=Pq5JEMauXsTvk8YDR50NbZ7AnmB3WQ.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Task-E - Task Insights & All Things "Content"', description: '', link: 'https://zebra.zoom.us/j/94386202564?pwd=ym2PicYk8gfTvEFaICbGRzoQqW2EmJ.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Intelligent MDF Rule Generator', description: '', link: 'https://zebra.zoom.us/j/94344079080?pwd=QRs80TOfyHm0b0Wa5QH8HaD1erBPMe.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Zippy', description: '', link: 'https://zebra.zoom.us/j/91351376771?pwd=5J2uwOqYEejXzxAPNz2btzwdbTYZ1H.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Zebra Adaptive Print (ZAP)', description: '', link: 'https://zebra.zoom.us/j/95373472138?pwd=OMYB13cwqu0mDwZWySaejlNvrNmBSb.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'Snap & Fill', description: '', link: 'https://zebra.zoom.us/j/94966525296?pwd=PiOCOFmsmH3K8JbUoalDaNIr6jH0Ie.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'zVoice Isolator', description: '', link: 'https://zebra.zoom.us/j/91474603347?pwd=SvdorCmHliA5mrMLyDE6HzeqG8f4TW.1', bgColor: "#2464a3", imageSrc: srjanaImg },
    { title: 'zSecurity Alert', description: '', link: 'https://zebra.zoom.us/j/97130936429?pwd=jvY3Sp5Q8DD30pz6Ir5bT2aZx3fn6p.1', bgColor: "#693915", imageSrc: srjanaImg },
    { title: 'Adaptive Imaging', description: '', link: 'https://zebra.zoom.us/j/96039948809?pwd=pT2aAjUcfahlcRSKoEBcO16bmdQBfa.1', bgColor: "#784580", imageSrc: srjanaImg },
    { title: 'Zebra Playground', description: '', link: 'https://zebra.zoom.us/j/94463072463?pwd=pjPmZVSIo8sMzqatZZy6xwEnF78J6U.1', bgColor: "#784580", imageSrc: srjanaImg },
    { title: 'zPower Conserver', description: '', link: 'https://zebra.zoom.us/j/94431676637?pwd=olhbkt26ci1RpBmuaDDyLUORGqGmPL.1', bgColor: "#784580", imageSrc: srjanaImg },
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
