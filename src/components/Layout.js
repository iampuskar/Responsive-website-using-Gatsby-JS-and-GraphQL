import React, { useState } from "react"
import Hamburger from "./Hamburger"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import { useLocation } from '@reach/router';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const location = useLocation();
  const path = location.pathname;

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Header toggle={toggle} path={path} />
      <Hamburger toggle={toggle} isOpen={isOpen} />
      <main>{children}</main>
    </>
  )
}



export default Layout
