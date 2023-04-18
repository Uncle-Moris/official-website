import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, TextField, Button, Snackbar, Alert, Box } from '@mui/material';
import SectionTitle from "../components/SectionTitle";


const SERVICE_ID = "service_ail9r4d";
const TEMPLATE_ID = "template_cre0mln";
const API_KEY = "Mj8PI5hZ1DVMTCrgt";

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formValues, setFormValues] = useState({ from_name: '', user_email: '', message: '' });
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY)
                .then((result) => {
                        if (result.status === 200) {
                            resetForm();
                            handleSnackbarOpen();
                        }
                        console.log(result.status === 200 ? "Message sent" : "Message failed");
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    const resetForm = () => {
        setFormValues({ from_name: '', user_email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
        setTimeout(() => {
            setSnackbarOpen(false);
        }, 2000);
    };

    return (
        <Container>
            <SectionTitle title="Contact" />
            <Box component='form' className="contact-form" onSubmit={sendEmail} ref={form}
                 sx={{
                     '& .MuiTextField-root': {
                         backgroundImage: 'linear-gradient(90deg, rgb(176, 224, 230 ) 20%, rgb(135, 206, 250) 60%)',
                         '& .MuiInputBase-input': {
                             color: 'white',
                         },
                     },
                 }}>
                <TextField name="from_name" label="Name" type="text" fullWidth margin="normal" value={formValues.from_name} onChange={handleChange} required/>
                <TextField name="user_email" label="Email" type="email" fullWidth margin="normal" value={formValues.user_email} onChange={handleChange} required/>
                <TextField name="message" label="Message" fullWidth margin="normal" multiline rows={4} value={formValues.message} onChange={handleChange} required/>
                <Button variant="contained" type="submit" value="Send" className="submit-button"
                        sx={{ mt: 1 ,
                        backgroundImage:'linear-gradient(-45deg, rgb(176, 224, 230 ) 30%, rgb(135, 206, 250) 60%)'}}>
                    Send Message
                </Button>
            </Box>
            <Snackbar open={snackbarOpen} autoHideDuration={2000}>
                <Alert severity="success">
                    Message was sent!
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default Contact;
