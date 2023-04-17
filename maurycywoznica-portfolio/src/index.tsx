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
let theme = createTheme({
     typography: {
         fontFamily: 'Nunito, sans-serif',
         fontSize: 16,

     },
    palette: {
         text: {
             primary: '#FFFF',
         }
    },
    components: {
         MuiDrawer: {
            styleOverrides: {
                        paper: {
                            backgroundImage: 'linear-gradient(60deg,rgb(176, 224, 230) 30%, rgb(135, 206, 250) 60%)',
                            color : 'white'
                        }
                }
         }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Fonts />
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);