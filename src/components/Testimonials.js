import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MdCheckCircle } from 'react-icons/md'
import { IoIosBulb } from 'react-icons/io'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Testimonials = () => {

    useEffect(() => {
     Aos.init({});
      
    }, [])
    

    const data = useStaticQuery(graphql`
     query MyQuery {
        allFile(
          filter: {ext: {regex: "/(jpg)|(png)|(jepg)/"}, name: {in: ["testimonial-1", "testimonial-2"]}}
        ) {
          edges {
            node {
              childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
     }
    `)

    return (
        <TestimonialContainer>
            <TopLine data-aos="fade-right" data-aos-offset="100" >
                Testimonials
            </TopLine>
            <Description data-aos="fade-right" data-aos-offset="100" >What People are Saying</Description>
            <ContentWrapper>
                <ColumnOne>
                    <TestimonialPart data-aos="fade-right" data-aos-delay="100">
                        <MdCheckCircle css={`color:#3fffa8; font-size:2rem; margin-bottom:1rem;`} />
                        <Heading>Sarah James</Heading>
                        <Paragraph>"The greatest experience of the time.
                            lorem ipsum is the great place  to visit i would like to call all my
                            parents and friends. "</Paragraph>
                    </TestimonialPart>
                    <TestimonialPart data-aos="fade-right" data-aos-delay="100">
                        <IoIosBulb css={`color:#f9b19b; font-size:2rem; margin-bottom:1rem;`} />
                        <Heading>Sean Michaels</Heading>
                        <Paragraph>"The greatest experience of the time.
                            lorem ipsum is the great place  to visit i would like to call all my
                            parents and friends. "</Paragraph>
                    </TestimonialPart>
                </ColumnOne>
                <ColumnTwo>
                    {data.allFile.edges.map((image, key) => (
                        <Images key={key} fluid={image.node.childImageSharp.fluid} />

                    ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialContainer>
    )
}

export default Testimonials

const TestimonialContainer = styled.div`

width:100%;
height: 100%;
background: #f2f0f0;
color:#000;
padding: 5rem calc((100vw - 1300px) / 2);

`
const TopLine = styled.p`
color: #077bf1;
font-size: 1rem;
padding-left: 2rem;
margin-bottom: 0.75rem;
`
const Description = styled.div`
text-align: start;
padding-left: 2rem;
margin-bottom: 4rem;
font-size: clamp(1.5rem, 5vw, 2rem);
font-weight: bold;

`
const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0 2rem;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr; 
}
`
const ColumnOne = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;

`
const TestimonialPart = styled.div`
padding-top: 1rem;
padding-right:2rem;


`
const Heading = styled.h3`

margin-bottom: 1rem;
font-size: 1.5rem;
font-style: italic;
`
const Paragraph = styled.p`

color:#3b3b3b;
`
const ColumnTwo = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 2rem;
grid-gap: 10px;

@media screen and (max-width: 500px) {
    grid-template-columns: 1fr; 
}

`

const Images = styled(Img)`
border-radius: 10px;
height: 100%;
`


