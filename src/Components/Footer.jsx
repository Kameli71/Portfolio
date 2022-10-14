import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol.jsx';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Karim Kameli</h1>
          <PText>I am always willing to help people, just hit me up</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+33(0)637791055',
                path: 'tel:+33(0)637791055',
              },
              {
                title: 'karim.kameli71@gmail.com',
                path: 'mailto:karim.kameli71@gmail.com',
              },
              {
                title: 'Montceau Les Mines, Bourgogne, France',
                path: 'https://www.google.fr/maps/@46.6714624,4.358144,14z',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Github',
                path: 'http://github.com/kameli71',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/karim-kameli-4a7992218/',
              },
            ]}
          />
        </div>
      </div>
      {/* <div className="copyright">
        <div className="container">
          <PText>Design inspired by Ayan Kahn</PText>
        </div>
      </div> */}
    </FooterStyle>
  );
}
