import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import CloseButton from './CloseButton';
import MenuButton from './MenuButton';
import Link from 'next/link';



function NavMenu() { 
  
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isOpenMenu) {
      setScrollPosition(window.pageYOffset);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
    }
  }, [isOpenMenu]);

  const handleStateChange = (state) => {
    setIsOpenMenu(state.isOpen);
  };
  
  const closeMenu = () => {
    setIsOpenMenu(false);
  };


  const stylesMobile = {
    bmBurgerButton: {
      position: 'relative',
    },
    bmCrossButton: {
      height: 'auto',
      width: 'auto',
      top: '23px',
      right: '10px'      
    },
    bmMenuWrap: {
      transition: 'opacity 0.4s ease 0s',
      position: 'fixed',
      height: '100%',
      top: '100px',
    },
    bmMenu: {
      background: 'var(--white)',
      color: 'var(--blue)',
      padding: '1rem 0',
      borderTop: '1px solid var(--blue)',
    },

    bmItemList: {
      display: 'flex',
      flexDirection: 'column',     
      alignItems: 'center',
    },
    bmItem: {
      color: 'var(--blue)',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '140%',
      padding: '16px 0' ,
      
      borderBottom: '1px solid var(--blue)',
      width: '100%',
      textAlign: 'center'    
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.7)',
      top: 0,
      left: 0,
    },
  }; 
  
  
  return (
    <div id="outer-container">
      <Menu
        right
        width='100%'
        outerContainerId="outer-container"
        styles={stylesMobile}
        // customCrossIcon={<CloseButton />}
        customBurgerIcon={<MenuButton />}               
        isOpen={isOpenMenu}
        onStateChange={(state) => handleStateChange(state)}
        noOverlay={false}
        disableOverlayClick
      >  
          {/* <Link href ='/about-us'>About Us</Link>      
          <Link href='/services'>Services</Link>
          <Link href='/inspiration'>Inspiration</Link>
          <Link href='/vendors'>Vendors</Link>
          <Link href='/blog'>Blog</Link>  */}
          <Link href ='/'>About Us</Link>      
          <Link href='/'>Services</Link>
          <Link href='/'>Inspiration</Link>
          <Link href='/'>Vendors</Link>
          <Link href='/'>Blog</Link> 
        
      </Menu>
    </div>
  );
};

export default NavMenu;


