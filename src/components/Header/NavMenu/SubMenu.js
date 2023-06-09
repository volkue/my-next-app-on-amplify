import Link from 'next/link';
import React, { useState, useRef, useEffect }  from 'react';
import styled from 'styled-components';


const SubMenuContainer= styled('div')`
  position: relative;
  display:flex;
`;
const SubMenuItems= styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  top:120%;
  width: max-content;
  text-align: center; 
  background: var(--color-black-bg);
  z-index:1200; 
`;
const SubMenuBtn = styled('button')`
  display:flex;
  flex-direction:row; 
  color:var(--color-white);
  background: none;
  border: none;
  text-align: start;
  padding:0;
  font-weight: 350;
  font-size: 1.8rem;
  line-height: 140%;
  align-items: center;
  span {
    margin-right:7px;
  }  
`;
const SubMenuItem= styled(Link)`
  color: var(--color-white);
  font-weight: 350;
  font-size: 1.8rem;
  line-height: 25.2px;
  padding: 2px 4px;
  text-align: start;
`;
const SubMenuItemTargetOn = styled('a')`
  color: var(--color-white);
  font-weight: 350;
  font-size: 1.8rem;
  line-height: 25.2px;
  padding: 2px 4px;
  text-align: start;
`;

// const SubBtn = styled.button`
//   color: var(--color-white);
//   font-weight: 350;
//   font-size: 1.8rem;
//   line-height: 25.2px;
//   padding: 2px 4px;
//   text-align: start;
//   background: transparent;
//   border: none;
// `;

const SubMenu = ({subMenuItemsList, menuItem, label}) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const onHandlerClick = () => {
    setIsShowMenu(!isShowMenu);
  };

  let ref = useRef();

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const handler = (event) => {
      if (isShowMenu && ref.current && !ref.current.contains(event.target)) {
        setIsShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {     
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
   }, [isShowMenu]);

  return (
    <SubMenuContainer 
      ref={ref} 
    >     
      {isShowMenu &&<SubMenuItems >      
        {subMenuItemsList.map(item =>  item.target ? <SubMenuItemTargetOn key={item.id} href={`${item?.link}`} target='_blank'>{item.label}</SubMenuItemTargetOn>
          :<SubMenuItem key={item.id} href={`${item?.link}`}>{item.label}</SubMenuItem>
        )}        
      </SubMenuItems>}
      <SubMenuItem 
        href={`${menuItem}`}
        style={{marginRight: '1rem'}}
      >        
      <span>{label}</span>
      </SubMenuItem>
      <SubMenuBtn 
        onClick={onHandlerClick}
        aria-expanded ={isShowMenu}
        aria-label="open submenu"
      >        
      here
      </SubMenuBtn>
    </SubMenuContainer>   
  );
};

export default SubMenu;