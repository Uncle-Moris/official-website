import React from 'react';
import {Container, Typography, TextField, Button, Box} from '@mui/material';
import '../style/Contact.css';

const Contact: React.FC = () => {
    return (
        <section className="contact">
            <Container>
                <Box>
                    <Typography variant="h2" className="section-title">
                        Contact
                    </Typography>
                    <Typography variant="subtitle1" className="section-title">
                        Dont go ahead send me a message !
                    </Typography>
                </Box>

                <form className="contact-form">
                    <TextField label="Name" fullWidth margin="normal" />
                    <TextField label="Email" fullWidth margin="normal" />
                    <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
                    <Button variant="contained" type="submit" className="submit-button">
                        Send Message
                    </Button>
                </form>
            </Container>
        </section>
    );
};

export default Contact;
