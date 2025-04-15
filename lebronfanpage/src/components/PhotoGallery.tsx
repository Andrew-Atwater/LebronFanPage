import React from 'react';
import { Container, Typography, Box, ImageList, ImageListItem, Paper } from '@mui/material';
import lebronImage1 from '../assets/lebonbon.jpg';
import lebronImage2 from '../assets/lebonbon2.jpg';

const images = [
  {
    img: lebronImage1,
    title: 'LeBron James Smiling',
    description: 'A joyful moment captured poolside'
  },
  {
    img: lebronImage2,
    title: 'LeBron James Close-up',
    description: 'An expressive close-up shot during a game'
  }
];

const PhotoGallery: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Photo Gallery
        </Typography>
        
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <ImageList sx={{ width: '100%', height: 'auto' }} cols={1} gap={16}>
            {images.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Paper>
      </Box>
    </Container>
  );
};

export default PhotoGallery; 