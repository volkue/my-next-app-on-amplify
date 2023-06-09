import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Logo from '../Svg/Logo';
import BBB from '../Svg/BBB';
import Fb from '../Svg/Fb';
import Google from '../Svg/Google';
import Youtube from '../Svg/Youtube';
import Yelp from '../Svg/Yelp';
import Instagram from '../Svg/Instagram';

const StyledFooter = styled.footer`
  padding: 32px 0;
  background: var(--blue);
  color: var(--white);
  > div {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    > div {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 480px) {
    > div {
      align-items: center;
      row-gap: 20px;
    }
  }
`;
const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    color: var(--white);
  }
  div {
    display: flex;
    padding: 30px 0 25px;
    > a:not(:last-of-type) {
      padding-right: 20px;
    }
  }
`;
const LinksContainer = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  justify-content: space-between;
  alight-items: center;
  font-size: 14px;
  line-height: 50px;
  padding: 0 20px;
  > a {
    color: var(--white);
    &:hover {
      color: var(--beige);
    }
  }
  > a:not(:last-of-type) {
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: fit-content;
    > a:not(:last-of-type) {
      padding-right: 0px;
    }
  }
`;
const LastBlock = styled.div`
  display: flex;
  flex-direction: column;
  > a:not(:first-of-type) {
    padding-top: 25px;
    font-weight: 300;
    font-size: 18px;
    line-height: 124%;
    letter-spacing: 0.08em;
    color: var(--white);
  }
  @media (max-width: 480px) {
    align-items: center;
    > a:not(:first-of-type) {
      font-size: 14px;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className='page-width'>
        <FirstBlock>
          <Link href='/' aria-label='nexa events logo'>
            <Logo />
          </Link>
          <div>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <Fb />
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <Google />
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <Youtube />
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <Yelp />
            </a>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <Instagram />
            </a>
          </div>
          <BBB />
        </FirstBlock>
        <LinksContainer>
          <Link href='/about-us'>About Us</Link>
          <Link href='/services'>Services</Link>
          <Link href='/inspiration'>Inspiration</Link>
          <Link href='/vendors'>Vendors</Link>
          <Link href='/blog'>Blog</Link>
        </LinksContainer>
        <LastBlock>
          <Link href='/contact-us' className='primary-btn reverse'>
            Contact us
          </Link>
          <a href='tel:+00000000'>Phone</a>
          <a href='mailto:info@nexaevents.com'>Email</a>
        </LastBlock>
      </div>
    </StyledFooter>
  );
}

export default Footer;
