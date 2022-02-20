import { Link } from 'gatsby'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from './Button'

const Hamburger = ({toggle, isOpen}) => {

  return (
    <Container onClick={toggle} isOpen={isOpen} >
        <Icon onClick={toggle}>
          <CloseIcon/>
        </Icon>
        <HamburgerWrapper>
          <Hamburgermenu>{menuData.map((item,index)=>(
            <HamburgerLink to={item.link} key={index}>{item.title}</HamburgerLink>
          ))}</Hamburgermenu>
          <BtnWrap>
            <Button to="/trips" primary="true"  big="true">BOOK A FLIGHT</Button>
          </BtnWrap>
        </HamburgerWrapper>
    </Container>
  )
}

export default Hamburger

const Container = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #000000;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.5s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};

`

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
const CloseIcon = styled(FaTimes)`
color: #fff;

`
const HamburgerWrapper = styled.div`

`
const Hamburgermenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 480px){

  grid-template-rows: repeat(4, 60px);
}

`
const HamburgerLink = styled(Link)`
display: flex;
color: #fff;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover{
  color: #cd853f;
}
`
const BtnWrap = styled.div`
display: flex;
justify-content: center;
`
