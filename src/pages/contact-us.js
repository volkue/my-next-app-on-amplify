import React from 'react';
import { Inter } from 'next/font/google'
import styled from 'styled-components'
import Logo from '@/components/Svg/Logo'
import ContactForm from '@/components/ContactForm';

const inter = Inter({ subsets: ['latin'] })

const Main = styled.main`
  background-color:#F1F3F3;
  color:#0F1123;
  height: 100vh;
  width: 100%;  
  position: relative;
  display:flex;
  align-items:center;
  justify-content:center;
  >div {
    max-width: 825px;
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
    text-transform:math-auto;
    margin:0;
    padding:4rem 0 .9rem;
    text-align:center;
  }

  @media (max-width:480px) {
    >div {   
    width: 80%; 
    padding:15px 15px;    
    }
  }
`;

const  Maintenance = () => {
  return (    
    <Main className={inter.className}>
      <div>
        <Logo/>
        <h1>
        Contact us
        </h1>
        <ContactForm/>       
      </div>
   </Main>
  
  )
}

export default Maintenance;
