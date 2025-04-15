import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Import all images
import lebronImage1 from '../assets/lebonbon.jpg';
import lebronImage2 from '../assets/lebonbon2.jpg';
import lebarbie from '../assets/lebarbie.jpg';
import lebubble from '../assets/lebubble.jpg';
import leheat from '../assets/leheat.jpg';
import lecavs from '../assets/lecavs.jpg';
import le1 from '../assets/le1.jpg';
import le2 from '../assets/le2.jpg';

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
  },
  {
    img: lebarbie,
    title: 'LeBron Barbie',
    description: 'LeBron in a playful moment'
  },
  {
    img: lebubble,
    title: 'Bubble Championship',
    description: 'LeBron during the 2020 NBA Bubble season'
  },
  {
    img: leheat,
    title: 'Miami Heat Era',
    description: 'LeBron during his time with the Miami Heat'
  },
  {
    img: lecavs,
    title: 'Cleveland Cavaliers',
    description: 'LeBron with the Cleveland Cavaliers'
  },
  {
    img: le1,
    title: 'Classic LeBron',
    description: 'A classic shot of LeBron in action'
  },
  {
    img: le2,
    title: 'Game Face',
    description: 'LeBron\'s intense game face'
  }
];

const PhotoGallery: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Photo Gallery
        </Typography>
        
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Box sx={{ 
            columnCount: isMobile ? 1 : 3,
            columnGap: '24px',
            '& > div': {
              marginBottom: '24px',
              breakInside: 'avoid',
              WebkitColumnBreakInside: 'avoid',
            }
          }}>
            {images.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'inline-block',
                  width: '100%',
                }}
              >
                <Paper 
                  elevation={2} 
                  sx={{ 
                    overflow: 'hidden',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '8px 8px 0 0'
                    }}
                  />
                  <Box sx={{ 
                    p: 1.5,
                    backgroundColor: 'rgba(0, 0, 0, 0.05)'
                  }}>
                    <Typography variant="h6" fontSize="1rem">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default PhotoGallery; 