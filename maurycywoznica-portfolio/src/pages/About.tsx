import React from 'react';
import { Container, Typography , Box} from '@mui/material';
import '../App.css';

const About: React.FC = () => {
    return (
        <section className="about">
            <Container>
                <Typography variant="h4" className="section-title">
                    About Me
                </Typography>
                <Typography variant="body1" className="section-text">
                    Maurycy Woźnica is a visionary and self-educated developer who deeply believes that his apps and services can change the lives of many people for the better. He likes to provide value through his work.
                </Typography>
                <Box>
                    <Typography className={"title_1"} variant="h1">Title 1</Typography>
                    <Typography className={"subtitle_1"} variant="subtitle1">Subtitle 1</Typography>

                    <Typography className={"title_2"} variant="h1">Title 2</Typography>
                    <Typography className={"subtitle_2"} variant="subtitle1">Subtitle 2</Typography>

                    <Typography className={"title_3"} variant="h1">Title 3</Typography>
                    <Typography className={"subtitle_3"} variant="subtitle1">Subtitle 3</Typography>

                    <Typography className={"title_4"} variant="h1">Title 4</Typography>
                    <Typography className={"subtitle_4"} variant="subtitle1">Subtitle 4</Typography>

                    <Typography className={"title_5"} variant="h1">Title 5</Typography>
                    <Typography className={"subtitle_5"} variant="subtitle1">Subtitle 5</Typography>

                    <Typography className={"title_6"} variant="h1">Title 6</Typography>
                    <Typography className={"subtitle_6"} variant="subtitle1">Subtitle 6</Typography>

                    <Typography className={"title_7"} variant="h1">Title 7</Typography>
                    <Typography className={"subtitle_7"} variant="subtitle1">Subtitle 7</Typography>

                    <Typography className={"title_8"} variant="h1">Title 8</Typography>
                    <Typography className={"subtitle_8"} variant="subtitle1">Subtitle 8</Typography>

                    <Typography className={"title_9"} variant="h1">Title 9</Typography>
                    <Typography className={"subtitle_9"} variant="subtitle1">Subtitle 9</Typography>

                    <Typography className={"title_10"} variant="h1">Title 10</Typography>
                    <Typography className={"subtitle_10"} variant="subtitle1">Subtitle 10</Typography>
                </Box>

            </Container>
        </section>
    );
};

export default About;
