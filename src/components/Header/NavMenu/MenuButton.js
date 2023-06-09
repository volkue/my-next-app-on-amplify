import React from 'react';
import styled from 'styled-components';

const MenuDiv = styled('div')`  
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const MenuIcon = styled('div')`
  display: grid;
  place-items: center;
  height: 15px;
  width: 20px;
  cursor: pointer;
  align-content: space-between; 
`;
const Span = styled('span')`
  width: 20px;
  height: 2.5px;
  background: var(--blue);
  display: block;  
`;


function MenuButton() {
  return (
    <MenuDiv>      
      <MenuIcon>
        <Span />
        <Span />
        <Span />        
      </MenuIcon>
    </MenuDiv>
  );
};

export default MenuButton;