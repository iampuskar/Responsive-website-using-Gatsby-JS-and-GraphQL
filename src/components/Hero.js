import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../assets/videos/travel1.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
      Aos.init({duration: 5000});
    
     
    }, [])
    
    return (
        <HeroContainer>
            <HeroBackground>
                <HeroVideo src={Video} type="video/mp4" autoPlay
                    loop muted playsInline />
            </HeroBackground>
            <HeroContent>
                <HeroItem>
                    <Heading data-aos="fade-up">Unreal Destination</Heading>
                    <Paragraph data-aos="fade-up">The rest is untold</Paragraph>
                    <Button round="true" big="true" primary="true" to="/trips">Travel Now</Button>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero



const HeroContainer = styled.div`
background: #0C0C0C;
display: flex;
justify-content: center;
align-items: center;
padding: 0 1rem;
position: relative;
margin-top: -80px;
height: 100vw;
color: #fff;
height: 100vh;

:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
     ), 
     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100% );

}
`;

const HeroBackground = styled.div`

position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;
const HeroVideo = styled.video`

height: 100%;
width: 100%;
-o-object-fit: cover;
object-fit: cover;
`;
const HeroContent = styled.div`
z-index: 3;
max-height: 100%;
height: calc(100vw-80px);
padding: 0rem calc((100vw - 1300px)/2);
`;
const HeroItem = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
max-height: 100%;
height: 100vh;
padding: 0;
color: #fff;
line-height: 1.1;
font-weight: bold;
`;
const Heading = styled.h1`
font-size: clamp(1.5rem, 6vw, 4rem );
margin-bottom:0.5rem;
letter-spacing: 3px;
font-weight: bold;
padding: 0rem 1rem;
`;
const Paragraph = styled.p`
font-size: clamp(1rem, 3vw, 3rem );
margin: 2rem;
font-weight: 100;
`;



