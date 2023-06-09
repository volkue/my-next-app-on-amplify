import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const services = [
  {
    id: 1,
    src: '/images/services/Event_Planning.jpg',
    alt: 'Event Planning',
    title: 'Event Planning',
  },
  {
    id: 2,
    src: '/images/services/Event_Design.jpg',
    alt: 'Event Design',
    title: 'Event Design',
  },
  {
    id: 3,
    src: '/images/services/Floral_by_Nexa.jpg',
    alt: 'Floral by Nexa',
    title: 'Floral_by_Nexa',
  },
  {
    id: 4,
    src: '/images/services/Invitations_by_Nexa.jpg',
    alt: 'Invitations by Nexa',
    title: 'Invitations by Nexa',
  },
  {
    id: 5,
    src: '/images/services/Rentals_by_Nexa.jpg',
    alt: 'Rentals by Nexa',
    title: 'Rentals by Nexa',
  },
  {
    id: 6,
    src: '/images/services/Event_Marketing.jpg',
    alt: 'Event Marketing',
    title: 'Event Marketing',
  },
  {
    id: 7,
    src: '/images/services/Event_Production.jpg',
    alt: 'Event Production',
    title: 'Event Production',
  },
];

const SliderBlock = styled.section`
  width: 100%;
  margin: 0 auto;
`;
const SliderContainer = styled.div`
  padding-left: calc((100vw - var(--page-width)) * 0.5);
  position: relative;
  > div {
    display: flex;
    transition: all 0.5s ease-in-out;
    position: relative;
    flex-wrap: inherit;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }
`;
const Slide = styled.div`
  padding-right: 100px;   
  width: 258px;
  height: 320px;
  p {
    line-height: 50px;
  }
`;
const ButtonsContainer = styled.div`
  height: 41px;
  width: 40%;
  background: var(--white-dark);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function ServicesSlider() {
  const [activeId, setActiveId] = useState(services[0].id);
  const moveTo = 400;
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }
  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd(id) {
    if (touchStart - touchEnd > 75) {
      if (id >= services[services.length - 1].id) return;
      setActiveId(id + 1);
    }
    if (touchStart - touchEnd < -75) {
      if (id <= services[0].id) return;
      setActiveId(id - 1);
    }
  }
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -moveTo, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
    setCurrentScroll(currentScroll - moveTo);
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: moveTo, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
    setCurrentScroll(currentScroll + moveTo);
  };

  const isPrevDisabled = currentScroll === 0;
  const isNextDisabled = currentScroll > (274 + 26) * (services.length - 1);
  return (
    <SliderBlock>
      <SliderContainer>
        <div ref={sliderRef}>
          {services.map((s) => (
            <Slide
              key={s.id}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd(s.id)}
            >
              <img src={s.src} alt={s.alt} width='258' height='270' />
              <p>{s.title}</p>
            </Slide>
          ))}
        </div>
      </SliderContainer>
      <ButtonsContainer>
        <button onClick={handlePrevClick} disabled={isPrevDisabled}>
          prev
        </button>
        <button onClick={handleNextClick} disabled={isNextDisabled}>
          next
        </button>
      </ButtonsContainer>
    </SliderBlock>
  );
}

export default ServicesSlider;
