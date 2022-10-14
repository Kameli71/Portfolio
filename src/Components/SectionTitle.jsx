import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono regular';
    font-size: 2rem;
  }
  h2 {
    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    color: #acb6cf;
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

function SectionTitle({
  subheading = 'this is subheading',
  heading = 'This is heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}

export default SectionTitle;
