import React from 'react';
import styled from 'styled-components';
import PText from '../PText';
// import Button from '../Button';
import Karim from '../../assets/images/karim2.jpg';
import AboutInfoItem from '../AboutInfoItem';
import ContactBanner from '../ContactBanner.jsx';

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }
  .left {
    flex: 1;
  }
  .right {
    flex: 2;
  }
  .about-subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about-heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about-infos {
    margin-bottom: 4rem;
  }
  .about-cv {
    padding: 0.5rem;
    border-radius: 8px;
    width: 7vw;
    display: flex;
    justify-content: center;
    background-color: var(--deep-dark);
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      border-radius: 5px;
    }
  }
  .about-info-items {
    margin: 15rem 5rem;
  }
  .about-info-item {
    margin-bottom: 10rem;
  }
  .about-info-heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about-subheading {
      font-size: 1.8rem;
    }
    .about-heading {
      font-size: 2.8rem;
    }
    .about-info-heading {
      font-size: 3rem;
    }
    .about-cv {
      width: 13vw;
    }
  }
`;

function About() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="Left">
            <p className="about-subheading">
              Hi I am <span>Karim Kameli</span>
            </p>
            <h2 className="about-heading">Junior Web Developper</h2>
            <div className="about-infos">
              <PText>
                Je suis originaire d'une toute petite ville nommée Montceau Les
                Mines(#'les ruines' pour les intimes ^^), nichée au coeur de la
                Bourgogne du sud. En grandissant, j'ai vite compris que la ville
                était trop petite pour moi et j'ai eu besoin d'explorer le
                monde. J'ai eu la chance de voyager et découvrir différentes
                cultures, différents modes de vie. Cela m'a aidé à m'ouvrir
                l'esprit.
                <br />
                <br />
                J'ai étudié le managment au Lycée, Je n'ai jamais vraiment su ce
                que je voulais faire de ma vie jusqu'a très récement. J'ai eu
                une carrière professionnelle très diverse, J'ai commencé par
                être téléconseiller, mais j'ai compris que ce n'était pas fait
                pour moi. Je suis donc devenu rénnovateur en bâtiment. Après
                avoir déménagé, j'ai du trouver le premier job qui se présentait
                pour éviter de faire 200km de route chaque jour. J'ai fini
                confectionneur de pneus pour le Génie civil chez Michelin. Une
                fois de plus j'ai vite compris que ce n'était pas fait pour moi
                et ai décidé d'entamer une reconversion professionnelle.
                <br />
                <br />
                j'ai décidé d'entreprendre un bilan de compétences afin de
                trouver un job qui me correspond parfaitement. j'ai toujours été
                intéréssé par l'informatique et les nouvelles technologies. Les
                différents tests effectués ont montré que j'tait plus attiré par
                les méters créatifs et la programmation. C'est pourquoi j'ai
                décidé de devenir un Développeur Web Full Stack. Je suis
                parfaitement épanoui dans ce nouveau rôle.
              </PText>
            </div>
            <a
              href="https://www.fichier-pdf.fr/2022/10/14/kameli-karim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="about-cv">Mon CV</h1>
            </a>
          </div>
          <div className="right">
            <img src={Karim} alt="Logo" />
          </div>
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">Education</h1>
            <AboutInfoItem
              title="Wild Code School"
              items={['Web Developper Full Stack', 'Remote', '2021']}
            />
            <AboutInfoItem
              title="Université"
              items={['LEA/LLCE', 'Dijon', '2009-2011']}
            />
            <AboutInfoItem
              title="Lycée Henri Parriat"
              items={[
                'Baccalauréat STG CFE',
                'Montceau Les Mines',
                '2007-2008',
              ]}
            />
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">Experiences</h1>
            <AboutInfoItem
              title="Stage formateur Web dev"
              items={['Wild Code School', '2022', 'Remote']}
            />
            <AboutInfoItem
              title="Web Developpeur"
              items={['Wild Code School', '2021', 'Remote']}
            />
            <AboutInfoItem
              title="Confectionneur/Coupeur"
              items={['Michelin Blanzy, France', '2016-2021']}
            />
            <AboutInfoItem
              title="Commercial"
              items={['CAPCOM Dijon', '2015-2016']}
            />
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">Hard Skills</h1>
            <AboutInfoItem
              title="Front-End"
              items={['HTML5', 'CSS3', 'Javascript', 'React JS', 'Redux']}
            />
            <AboutInfoItem
              title="Back-End"
              items={['Node Js', 'Express Js', 'MySQL', 'Postman', 'MongoDb']}
            />
            <AboutInfoItem title="Other" items={['NPM', 'GIT']} />
            <AboutInfoItem title="Softwares" items={['Visual Studio']} />
            <AboutInfoItem title="tools" items={['Figma', 'Trello']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyle>
  );
}

export default About;
