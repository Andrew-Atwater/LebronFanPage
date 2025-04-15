import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import lebronImage1 from '../assets/lebonbon.jpg';
import lebronImage2 from '../assets/lebonbon2.jpg';

const Home: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Welcome to the Ultimate LeBron James Fan Page
        </Typography>
        
        <Grid container spacing={4} sx={{ my: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <img src={lebronImage1} alt="LeBron James smiling" style={{ width: '100%', height: 'auto' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <img src={lebronImage2} alt="LeBron James close-up" style={{ width: '100%', height: 'auto' }} />
            </Paper>
          </Grid>
        </Grid>

        <Paper elevation={3} sx={{ p: 3, my: 4 }}>
          <Typography variant="h4" gutterBottom>
            The King's Legacy
          </Typography>
          <Typography variant="body1" paragraph>
            LeBron James is more than just a basketball player - he's a global icon, philanthropist, and businessman. 
            His impact extends far beyond the basketball court, where he has dominated for nearly two decades.
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
            On-Court Excellence:
          </Typography>
          <ul>
            <li>Multiple NBA Championships and Finals MVPs</li>
            <li>Regular Season MVP Awards</li>
            <li>Olympic Gold Medals</li>
            <li>All-Time Scoring Leader</li>
            <li>Exceptional playmaking and basketball IQ</li>
          </ul>
          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
            Off-Court Impact:
          </Typography>
          <ul>
            <li>The LeBron James Family Foundation</li>
            <li>I Promise School in Akron, Ohio</li>
            <li>Social justice advocacy</li>
            <li>Successful business ventures</li>
            <li>Media production company (SpringHill Entertainment)</li>
          </ul>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home; 