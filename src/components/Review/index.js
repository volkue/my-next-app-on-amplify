import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NextBtn from '../Svg/NextBtn';
import Link from 'next/link';

const ReviewContainer = styled('div')`
  display: flex;
  align-items: center;
  z-index:1;
  > button:first-of-type {
    padding-right: 39px;
  }
  > button:last-of-type {
    padding-left: 39px;
  }
  @media (max-width: 480px) {
    overflow: hidden;
  }
  @media (max-width: 991px) {
    > button:first-of-type {
      padding-right: 10px;
    }
    > button:last-of-type {
      padding-left: 10px;
    }
  }
`;

const ReviewItems = styled('div')`
  max-width: 560px;
  width:100%;
  min-height:200px;
  margin:0 auto;
  display: flex;
  overflow:hidden;
  flex-direction:column;  
  position: relative;
  align-items: center;
  @media (max-width: 1100px) {
    width: 750px;
  }
  @media (max-width: 768px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 300px;
  }
`;
const ReviewItem = styled('div')`
  position: absolute;
  max-width:560px;
  min-height: 350px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 1s;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ReviewText = styled('div')` 
 
  @media (max-width: 768px) {
   
  }
`;


const Author = styled(Link)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: var(--blue);
  padding-bottom: 4px;
  text-align: center;
  cursor:pointer;
  &:hover {
    text-decoration:underline;
  }
`;


const Text = styled.p`
    font-style: normal;
    line-height: 156%;
    margin-bottom: 16px;
`;
const Button = styled.button`
  background-color: transparent;  
  color: var(--blue);
  border: none;
  box-shadow: none;
  :active {
    color: ${(props) => (props.black ? 'var(--blue)' : 'var(--beige)')};
  }
`;
const PrevButton = styled(Button)`
  svg {
    transform: rotate(180deg)
  }
`
const activeWidthNull = {
  opacity: '1',
  zIndex: 10
};
const hiddenFullText = {
  display: '-webkit-box',
  maxWidth: '368px',
  webkitLineClamp: '7',
  webkitBoxOrient: 'vertical',
  overflow: 'hidden',
};
const hiddenFullTitle = {
  display: '-webkit-box',
  maxWidth: '300px',
  webkitLineClamp: '2',
  webkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

function Review({ reviews }) {
  const [activeId, setActiveId] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const onPrevReview = () => {
    const isFirstReview = activeId === 0;
    const newIndex = isFirstReview ? reviews.length : activeId - 1;
    setActiveId(newIndex);
  };

  const onNextReview = () => {
    const isLastReview = activeId === reviews.length - 1;
    const newIndex = isLastReview ? 0 : activeId + 1;
    setActiveId(newIndex);
  };

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }
  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd(id) {
    if (touchStart - touchEnd > 75) {
      if (id >= reviews[reviews.length - 1].id) return;
      setActiveId(id + 1);
    }
    if (touchStart - touchEnd < -75) {
      if (id <= reviews[0].id) return;
      setActiveId(id - 1);
    }
  }
  useEffect(() => {
    const toggle = setInterval(onNextReview, 5000);
    return () => clearInterval(toggle);
  }, [activeId]);

  return (
    <ReviewContainer>
      {reviews && reviews.length > 0 && (
        <>
          <PrevButton onClick={onPrevReview}><NextBtn/></PrevButton>
          <ReviewItems>
            {reviews.map((rev, index) => (
              <ReviewItem
                key={rev.id}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => handleTouchEnd(rev.id)}
                style={activeId === index ? activeWidthNull : null}
              >
                <ReviewText>
                  <Author href={rev.link} target='_blank'
              rel='noreferrer'>{rev.author_name}</Author>
                  <Text>{rev.text}</Text>
                </ReviewText>         
              </ReviewItem>
            ))}
           
          </ReviewItems>
          <Button onClick={onNextReview}><NextBtn/></Button>
        </>
      )}
    </ReviewContainer>
  );
}

export default Review;
