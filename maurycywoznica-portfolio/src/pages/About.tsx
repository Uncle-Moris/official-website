import React from 'react';
import { Grid, Typography, Container, Avatar } from '@mui/material';
import myImg from '../imgs/nice-mjw.svg';
import visionImg from '../imgs/b4d02dc4bd4c439ba53bb968d0b61eba.webp';
import goalImg from '../imgs/blue-g385650235_1280.jpg';
import SectionTitle from '../components/SectionTitle';
import '../style/colors.css';

// interface SectionProps {
//     title: string;
//     description: string;
//     img: string;
//     className: string;
// }

const sectionData = [
    {title: 'About Me', img: myImg, className: 'powder-blue_bg', description: "My name is Maurycy Woźnica, and I'm a visionary programmer and artist based in Warsaw, Poland. I have a passion for creating unique projects that provide users with new value. With years of experience in the field, I'm constantly challenging myself to push the boundaries of what's possible. As a programmer, I believe that the code we write can be a form of art. I enjoy finding creative solutions to complex problems and developing innovative technologies that help make people's lives easier. My ultimate goal is to create products that are both beautiful and functional, and that make a real difference in people's lives."},
    {title: 'Vision', img: visionImg, className: 'pale-blue_bg', description: "My vision is to build a world where technology and art coexist harmoniously, enhancing each other and pushing the limits of human potential. I aim to foster a culture of innovation, creativity, and collaboration in my work, and I'm committed to developing solutions that have a positive impact on society. To achieve this, I focus on combining my expertise in programming with my artistic sensibilities to create unique, high-quality experiences for users. By staying up-to-date with the latest advancements in technology and embracing a growth mindset, I strive to continuously improve and adapt to the ever-changing digital landscape. Ultimately, my goal is to inspire others to think creatively, push boundaries, and work together to make the world a better place through the fusion of art and technology."},
    {title: 'Goal', img: goalImg, className: 'powder-blue_bg', description: "My goal is to provide modern and innovative solutions to your clients, helping them to improve and optimize their businesses. By leveraging your expertise and knowledge, you aim to deliver cutting-edge strategies and tools that will enhance your clients' performance and results. Ultimately, your objective is to be a valuable partner and contributor to your clients' success."},
];

const About: React.FC = () => {
    return (
        <Container>
            <SectionTitle title={'Hello'} />

            {sectionData.map((section, index) => (
                <Grid container spacing={1} className={section.className} p={2}
                      sx={{
                          borderRadius: 12,
                          my: 3
                      }}>
                    <Grid item xs={12}>
                        <Typography variant="h2" sx={{
                            textAlign: 'center',
                            mt: 2,
                            fontWeight: 400,
                            color: 'white'
                        }}>
                            {section.title}
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} alignItems="center">
                        <Grid item xs={12} lg={4}>
                            <Avatar
                                alt={section.title}
                                src={section.img}
                                sx={{
                                    height: { xs: 'auto', sm: 'auto' },
                                    width: { xs: 'auto', sm: 'auto' },
                                    borderRadius: 8,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                }}
                            />
                        </Grid>
                        <Grid item lg={8} xs={12} px={3}>
                            <Typography variant="body1" mt={0}>
                                {section.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                ))}
        </Container>
    );
};

export default About;
