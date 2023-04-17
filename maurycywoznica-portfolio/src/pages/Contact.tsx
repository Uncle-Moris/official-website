import React from 'react';
import {Container, Typography, TextField, Button, Box} from '@mui/material';
import SectionTitle from "../components/SectionTitle";

const Contact: React.FC = () => {
    return (
            <Container>
                <SectionTitle title="Contact"/>
                <form className="contact-form">
                    <TextField label="Name" fullWidth margin="normal" />
                    <TextField label="Email" fullWidth margin="normal" />
                    <TextField label="Message" fullWidth margin="normal" multiline rows={4} />

                </form>
                <Button variant="contained" type="submit" className="submit-button"
                        sx={{
                            mt: 1,
                            backgroundImage:'linear-gradient(-45deg, rgb(176, 224, 230 ) 30%, rgb(135, 206, 250) 60%)'
                }}>
                Send Message
                </Button>
            </Container>
    );
}
export default Contact;