import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Forum from './components/Forum';
import Achievements from './components/Achievements';
import PhotoGallery from './components/PhotoGallery';

const theme = createTheme({
  palette: {
    primary: {
      main: '#552583', // Lakers purple
    },
    secondary: {
      main: '#FDB927', // Lakers gold
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
