import React from 'react';
import styled from 'styled-components';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
// import Button from './Button';
import Karim from '../assets/images/karim3.jpg';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HomeStyle = styled.div`
  .home {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .home__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .home__name {
      font-size: 7rem;
      font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
      color: var(--white);
    }
  }
  .home__img {
    max-width: 521px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    img {
      border: 2px solid var(--gray-1);
      border-radius: 5px;
      object-fit: cover;
      width: 100%;
    }
  }
  .home__infos {
    margin-top: -10rem;
    p {
      color: var(--white);
      font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
      font-style: italic;
    }
  }
  .home__social,
  .home__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .home__social {
    left: 50px;
  }
  .home__scrollDown {
    right: 50px;
  }
  .home-social-indicator,
  .home__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
    }
    img {
      max-height: 45px;
      width: 100%;
      margin: 0auto;
      object-fit: contain;
    }
  }
  .home__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .home-social-text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      .logo-fb {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: #3b5998;
      }
      .logo-insta {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: #8a3ab9;
      }
      .logo-twitter {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: #1da1f2;
      }
      .logo-gh {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: #e8eaea;
      }
      .logo-li {
        display: inline-block;
        font-size: 3rem;
        transform: rotate(45deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
        color: #0072b1;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .home {
      min-height: 750px;
    }
    .home__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .home__name {
        font-size: 4.5rem;
      }
    }
    .home__img {
      height: 37vh;
      max-width: 199px;
      img {
        object-fit: contain;
      }
    }
    .home__infos {
      margin-top: 3rem;
    }
    .home__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .home-social-indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .home-social-text {
        ul {
          li {
            a {
              font-size: 1.9rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .home__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

function HeroSection() {
  return (
    <HomeStyle>
      <div className="home">
        <div className="container">
          <h1 className="home__heading">
            <span>Hello,</span>
            <span className="home__name">I am Karim</span>
          </h1>
          <div className="home__img">
            <img src={Karim} alt="Rimk" />
          </div>
          <div className="home__infos">
            <PText>
              Je suis un développeur web junior venant tout juste de finir une
              formation de développeur web Full Stack à la Wild Code School. Je
              suis toujours en quête de nouvelles choses à apprendre.
            </PText>
            {/* <Button btnLink="/myworks" btnText="See my works" outline={false} /> */}
          </div>
          <div className="home__social">
            <div className="home-social-indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="arrow" />
            </div>
            <div className="home-social-text">
              <ul>
                <li>
                  <a
                    className="logo-gh"
                    href="https://www.github.com/Kameli71"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineGithub />
                  </a>
                </li>
                <li>
                  <a
                    className="logo-li"
                    href="https://www.linkedin.com/in/karim-kameli-4a7992218/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="home__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="scrolldown arrow" />
          </div>
        </div>
      </div>
    </HomeStyle>
  );
}

export default HeroSection;
