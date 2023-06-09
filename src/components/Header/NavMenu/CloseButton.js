import React from 'react';
import styled from 'styled-components';


const CloseIconContainer = styled('div')`
  display: flex;
  gap: 8.8px;
  align-items: center;
  span {
    color: var(--color-white);
    font-weight: 350;
    font-size: 18px;
    line-height: 120%;
  };
  svg {
    color: var(--color-white);
  };
`;

function CloseButton () {
  return (
    <CloseIconContainer>      
     Close
    </CloseIconContainer>
  );
};

export default CloseButton;