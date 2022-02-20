import React, {useEffect} from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/email1.jpg'
import { Button } from './Button'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Email = () => {

        useEffect(() => {
          Aos.init({});
        }, [])

    return (
        <EmailContainer>
            <EmailContent>
                <h1 data-aos="fade-down">Get Access to Exclusive Offers</h1>
                <p data-aos="fade-down">Sign up for your newsletter below to get $100 off on your first trip.</p>
                <form action='#'>
                    <FormWrapper data-aos="fade-up" data-aos-delay="20">
                        <label htmlFor='email'>
                            <input type="email" placeholder='Enter your Email' id='email' />
                        </label>
                        <Button as="button" type="submit" primary="true" round="true" css={`height: 48px; @media screen and (max-width:768px) {
                            width:100%;
                            min-width:350px;
                        }

                        @media screen and (max-width:400px){
                            width:100%;
                            min-width:250px;
                        }
                        
                        `}>Sign Up</Button>
                    </FormWrapper>
                </form>
            </EmailContent>
        </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div`

 background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center ; 
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

 
`
const EmailContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem,5vw,3rem);
    padding:0 1rem;

}

p{
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
}

form{
    z-index: 10;

}
`
const FormWrapper = styled.div`
input{
padding: 1rem 1.5rem;
outline: none;
width: 350px;
height: 48px;
border-radius: 50px;
border: none;
margin-right: 1rem;
}

@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input{
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
       
    }
}

`