import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner-wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner-heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner-heading {
      font-size: 2.8rem;
    }
  }
`;

function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner-wrapper">
          <PText>Vous avez un projet en tête ?</PText>
          <h3 className="contactBanner-heading">discutons-en</h3>
          <Button btnText="Contactez moi" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}

export default ContactBanner;
