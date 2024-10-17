import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import MainPage from './components/Main';
import ParMani from './components/ParMani';
import Dzivnieki from './components/Dzivnieki';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A0572', // Dark Purple
    },
    secondary: {
      main: '#FFC0CB', // Light Pink
    },
    background: {
      default: '#6A0572', // Purple background
    },
    text: {
      primary: '#FFC0CB', // Light Pink text
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            {/* Navbar */}
            <NavBar />

            {/* Main content area */}
            <Box component="main" sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/par-mani" element={<ParMani />} />
                <Route path="/dzivnieki" element={<Dzivnieki />} />
              </Routes>
            </Box>

            {/* Footer */}
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
  );
}

export default App;
