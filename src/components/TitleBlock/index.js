import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';


const TitleContainer = styled.section`
  display:flex;
  width:100%; 
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color:var(--blue);
  background-image: ${props => props.img1 ? `url(${props.img1})` : undefined};  
  background-image:${props => props.img2 ? `-webkit-image-set(url(${img2}) 1x)` : undefined} ;
  >div {
    flex:0 0 50%;
  }
`;
const TextContainer = styled.div`
  display:flex;
  width:100%;
  justify-content:flex-end;
  color:var(--white);
  >div {
    margin-left:auto;
    max-width:485px;
    padding:120px 10px 130px 55px;
    >p:first-of-type {
      padding: 17px 0;
    }
  }
`
function TitleBlock({h1, text1, text2, img1, img2=null, alt}) {
  const h1Up = h1.toUpperCase();
  return (
    <TitleContainer img1={img1}>
      <TextContainer>
      <div>
        <h1>{h1Up}</h1>
        <p>
        {text1}         
        </p>
        <p>
        {text2}   
        </p>
      </div>
      </TextContainer>
     
    </TitleContainer>
  )
}

export default TitleBlock;