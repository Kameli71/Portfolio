import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
// import KK from '../assets/images/KK.svg';
import Karim from '../assets/images/karim.jpg';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .about-section-left,
  .about-section-right {
    flex: 1;
  }
  .about-section-right {
    img {
      border: 2px solid var(--gray-1);
      max-width: 465px;
      border-radius: 5px;
      height: 600px;
      object-fit: contain;
    }
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
  }
  .about-section-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 1024px) {
    .about-section-left {
      flex: 4;
    }
    .about-section-right {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .about-section-left,
    .about-section-right {
      width: 100%;
    }
    .about-section-right {
      display: none;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .about-section-buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="about-section-left">
          <SectionTitle
            subheading="permettez moi de me présenter"
            heading="About me"
          />
          <PText>
            Je m'appelle Karim, je sors tout juste d'une formation de
            développeur web à la Wild Code School. J'ai exercé plusieurs jobs au
            cours de ma vie (Industrie, Bâtiment, vente...) mais rien qui me
            plaisait vraiment. C'est pourquoi j'ai décidé de changer de vie et
            trouver un métier qui me plait réellement. Me voilà à présent,
            j'étudie divers languages de programmation et créé des projets
            pationnants. Vous trouverez sur mon Portfolio les différents projets
            auxquels j'ai participé et aussi plus d'informations à mon sujet.
            J'ai plusieurs passions, notamment la lecture de novel, la musique
            ou encore le sport. N'hesitez pas à me contacter si vous avez besoin
            d'un développeur web.
          </PText>
          <div className="about-section-buttons">
            <Button btnLink="/myworks" btnText="Works" />
            <Button btnLink="/about" btnText="en savoir plus" outline />
          </div>
        </div>
        <div className="about-section-right">
          <img src={Karim} alt="Logo" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}

export default AboutSection;
