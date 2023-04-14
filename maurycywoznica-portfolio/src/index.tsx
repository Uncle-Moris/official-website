import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

// Import the Google Fonts link
const Fonts = () => (
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap"
        rel="stylesheet"
    />
);

// Create a custom theme with the desired font family
const theme = createTheme({
     typography: {
         fontFamily: 'Nunito, sans-serif',
     },
});

ReactDOM.render(
    <React.StrictMode>
        {/* Include the Fonts component to load the Google Fonts */}
        <Fonts />
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


