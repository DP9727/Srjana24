// CardComponent.jsx
import React from 'react';
import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';

// App.js or index.js
import '@fontsource/roboto-slab'; // Defaults to 400 weight


const CardComponent = ({ title, description, link, bgColor, imageSrc }) => {
  
  const handleClick = () => {
    // window.location.href = link; // Redirects to an external link
    window.open(link, '_blank', 'noopener,noreferrer'); // Opens the link in a new tab
  };

  // return (
  //   <Card
  //     sx={{
  //       maxWidth: 345,
  //       margin: 'auto',
  //       marginBottom: 2,
  //       borderRadius: '20px',
  //       boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  //       transition: 'transform 0.3s, box-shadow 0.3s',
  //       '&:hover': {
  //         transform: 'scale(1.03)',
  //         boxShadow: '0px 6px 20px rgba(255, 215, 0, 0.3)', // Gold shadow on hover
  //       },
  //       // background: '#62cff4'
  //       background: 'linear-gradient(45deg, #add6ed, #31aad0)', // Black to gold gradient
  //     }}
  //   >
  //     <CardActionArea onClick={handleClick} sx={{ padding: '20px' }}>
  //       <CardContent>
  //         <Typography
  //           gutterBottom
  //           variant="h5"
  //           component="div"
  //           sx={{
  //             color: '#FFFFFF', // Gold color for title
  //             fontWeight: 'bold',
  //             textAlign: 'center',
  //           }}
  //         >
  //           {title}
  //         </Typography>
  //         <Typography
  //           variant="body2"
  //           color="text.secondary"
  //           sx={{
  //             color: '#FFFFFF', // Gold color for description
  //             textAlign: 'center',
  //             fontSize: '1rem',
  //           }}
  //         >
  //           {description}
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //   </Card>
  // );


  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 'auto',
        marginBottom: 2,
        borderRadius: '20px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0px 6px 20px rgba(255, 215, 0, 0.3)', // Gold shadow on hover
        },
        background: bgColor
        // background: 'linear-gradient(45deg, {bgColor}, #000000)', // Black to gold gradient
      }}
    >
      <CardActionArea onClick={handleClick} 
      sx={{ padding: '20px' }}
      // sx={{ display: 'flex', alignItems: 'center', width: 300, padding: '16px' }}
      >
      {imageSrc && (
          <CardMedia
            component="img"
            image={imageSrc}
            alt={title}
            sx={{
              height: 50, // Set the height of the image
              // width: 200,
              borderRadius: '20px 20px 0 0', // Rounded top corners
              objectFit: 'contain'
            }}

            // sx={{
            //   position: 'absolute',      // Position image absolutely
            //   top: 16,                   // Space from the top of the card
            //   left: 16,                  // Space from the left of the card
            //   width: 60,                 // Set image width as needed
            //   height: 60,                // Set image height as needed
            //   borderRadius: '8px',       // Optional: Rounded corners
            //   objectFit: 'contain'         // Keep aspect ratio with cropping if necessary
            // }}

            // sx={{
            //   width: 60,               // Set image width
            //   height: 60,              // Set image height
            //   borderRadius: '8px',     // Optional: rounded corners
            //   marginRight: '16px',     // Space between image and text
            //   objectFit: 'contain'
            // }}
          />
        )}
        <CardContent 
        // sx={{ marginLeft: imageSrc ? 10 : 0 }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "'Roboto Slab', serif",
              color: '#FFFFFF', //  color for title
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: '#FFFFFF', //  color for description
              textAlign: 'center',
              fontSize: '1rem',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
