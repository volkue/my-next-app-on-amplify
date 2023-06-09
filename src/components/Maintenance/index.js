import React from 'react';
import { Inter } from 'next/font/google'
import styled from 'styled-components'
import Logo from '@/components/Svg/Logo'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

const Main = styled.main`
  background-color:var(--white-dark);
  color:var(--blue);
  height: 100vh;
  width: 100%;  
  position: relative;
  display:flex;
  align-items:center;
  justify-content:center;
  >div {
    max-width: 770px;
    width: 100%; 
    padding:45px 31px;
    background: #FFFFFF;
    box-shadow: 0px 9px 13px rgba(0, 0, 0, 0.25);
    display:flex;
    flex-direction:column;
  } 
  h1 {
    font-weight: 500;
    font-size: 26px;
    line-height: 40px;
    text-transform: none;
    margin:0;
    padding:7rem 0 .9rem;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    padding-bottom:6rem;
  }
  @media (max-width:480px) {
    >div {   
    width: 80%; 
    padding:15px 15px;    
  }
  h1 {   
    padding:3rem 0 .9rem;
  }
  p {   
    font-size: 16px;
    line-height:25px;
    padding-bottom:4rem;
  }
  }
`;

const StyledLink = styled(Link)`
  background:#0F1123;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color:#fff;
  padding:12.5px 48px;
  margin: 0 auto;
  align-self: center;
`;

const  Maintenance = () => {
  return (    
    <Main className={inter.className}>
      <div>
        <Logo/>
        <h1>
        The website is in maintenance mode.
        </h1>
        <p>
        We apologize for any inconvenience caused, but our website is currently undergoing maintenance to provide you with a better browsing experience. We are working hard to ensure that the website is back up and running as soon as possible.<br/>
        Rest assured that Nexa Events will be back soon with even more exciting updates and features. We appreciate your patience and understanding during this time.<br/>
        Thank you for your continued support.
        </p>
        <StyledLink href='/contact-us'>Contact us</StyledLink>
      </div>
       
   </Main>
  
  )
}

export default Maintenance;
