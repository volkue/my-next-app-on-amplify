import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
// import localFont from 'next/font/local';

// const inter = localFont({ src: '../../fonts/Inter-VariableFont_slnt_wght.woff' })

const Up = styled('button')`
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 50%;
  width: 33px;
  height: 33px;
  border: none;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.5s;
  visibility: visible;
  z-index: 100;
  display: grid;
  place-content: center;
  @media (max-width: 480px) {
    right: 1rem;
  }
  :hover {
    opacity: 0.5;
  }
  svg {
    scale: 2;
    color: var(--white);
    transform: rotate(-90deg);
  }
`;

const Layout = ({ children, isButtonUp = true }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (typeof document !== 'undefined') {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 300 ? true : false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisible);
    }
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <>
      <Header />
      <main >{children}</main>
      <Footer />

      {isButtonUp && (
        <Up className={!visible ? 'hidden' : null} onClick={scrollToTop}>
          Up
        </Up>
      )}
    </>
  );
};

export default Layout;
