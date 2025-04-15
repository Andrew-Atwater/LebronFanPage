import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LeBron James Fan Page
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/achievements">Achievements</Button>
          <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
          <Button color="inherit" component={Link} to="/forum">Fan Forum</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 