import React, {useEffect} from 'react'
import styled from 'styled-components'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const StatsData = [
    {
        icon: <GiEarthAmerica
        style={{color:"#047bf1"}}
         
         />,
        title: "Over 100 Destination",
        desc: "Travel to over 100 unique Places"
    },
    {
        icon: <MdAirplanemodeActive  style={{color:"#f3a82e"}} />,
        title: "1 million Trips Made",
        desc: "Travel to over 100 unique Places"
    },
    {
        icon: <MdTimer  style={{color:"#f34f2e"}} />,
        title: "Fastest Support",
        desc: "Travel to over 100 unique Places"
    },
    {
        icon: <FaMoneyCheck style={{color:"#3af576"}} />,
        title: "Best Deals",
        desc: "We offer the best Prices"
    },
]

const Stats = () => {


    
 useEffect(() => {
   Aos.init({});
 }, [])
 

  return (
    <StatContainer>
        <Header data-aos="fade-right">Why Choose us?</Header>
        <Wrapper data-aos="fade-right">
            {StatsData.map((item, index)=>{
            return(
                <StatBox key={index}>
                    <Icon>{item.icon}</Icon>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>

                </StatBox>
            )

        })}</Wrapper>
    </StatContainer>
  )
}

export default Stats

const StatContainer = styled.div`

width: 100%;
background: white;
color: #000;
display: flex;
flex-direction: column;
justify-content: center;
padding: 4rem calc((100vw - 1300px) / 2);

`
const Header = styled.h2`
text-align: start;
font-size: clamp(1.5rem, 5vw, 2rem);
margin-bottom: 2rem;
padding: 0 2rem;
`
const Wrapper = styled.div`

display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
}
`

const StatBox = styled.div`

width: 100%;
height: 100%;
padding: 2rem;

`
const Icon = styled.div`
font-size: 3rem;
margin-bottom: 1rem;
`
const Title = styled.p`
font-size: clamp(1rem, 2.5vw, 1.5rem);
margin-bottom: 0.5rem;
`
const Description = styled.p``
