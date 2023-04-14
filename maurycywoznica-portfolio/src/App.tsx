import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Navigation from './components/Navigation';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Homepage from "./pages/Homepage";
import './style/colors.css';
const App: React.FC = () => {
    return (
        <Router>
            <Navigation/>
            <Box sx={{
                        mt: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
            }}
            className={'lavender_bg'}>
                <Container>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/technologies" element={<Technologies />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Container>
            </Box>
            <Footer />
        </Router>
    );
};
export default App;