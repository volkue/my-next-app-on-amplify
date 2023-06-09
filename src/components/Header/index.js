import React from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import Link from 'next/link';
import Logo from '../Svg/Logo';

const HeaderContainer= styled.header`
  position:relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;  
  min-height:8rem;  
  padding-top:15px;
  padding-bottom:15px;
  svg {
    color:var(--blue);
  } 
  @media  (max-width:768px) {
    justify-content: space-between;
  }
`;
const MenuContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 174px 0 55px;
  max-width:400px;
  width:100%;
  >a {
    font-size: 14px;
    line-height: 50px;
    color: var(--blue);
  }
  >a:not(:last-of-type){
    margin-right:3rem;
  } 
  @media (min-width:990px) and (max-width:1100px) {
    padding: 0 100px 0 55px; 
   };
   @media (min-width:769px) and (max-width:989px) {
      padding: 0 30px 0 30px;
      >a:not(:last-of-type){
      margin-right:2rem;
    } 
   };
   @media  (max-width:768px) {
    display:none;
    visability:hidden;
   }
`;
const NavBar = styled.div`
  display:none;  
    @media (max-width:768px) {
      display:block; 
      padding-left:33px  
   }
`;
const ButtonLink = styled(Link)`
  padding:11px 19px;
    @media  (max-width:768px) {    
    margin-left:50px  
   }
   @media  (max-width:430px) {    
    margin-left:10px  
   }
`


function Header() {

  return (  

      <HeaderContainer className='page-width'>
        <Link href ='/' aria-label="nexa events logo"><Logo/></Link>
        <MenuContainer>         
          <Link href ='/about-us'>About Us</Link>      
          <Link href='/services'>Services</Link>
          <Link href='/inspiration'>Inspiration</Link>
          <Link href='/vendors'>Vendors</Link>
          <Link href='/blog'>Blog</Link>          
        </MenuContainer>        
        <ButtonLink href='/contact-us' className='primary-btn dark'>
          Contact us
        </ButtonLink>
        <NavBar>
          <NavMenu/>
        </NavBar>
               
   
    
             
      </HeaderContainer>
  )
};

export default Header;

