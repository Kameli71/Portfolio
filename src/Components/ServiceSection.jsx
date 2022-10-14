import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac } from 'react-icons/md';
import { FiDatabase } from 'react-icons/fi';
import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineHtml5, AiOutlineGithub } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNode, FaTrello } from 'react-icons/fa';
import { DiJavascript1, DiNpm, DiGit, DiVisualstudio } from 'react-icons/di';
import {
  SiMysql,
  SiPostman,
  SiFigma,
  SiMongodb,
  SiRedux,
} from 'react-icons/si';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesSectionStyle = styled.div`
  padding: 10rem 0;
  .services-items {
    display: flex;
    gap: 10rem;
    justify-content: space-around;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services-items {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

function ServiceSection() {
  return (
    <ServicesSectionStyle>
      <div className="container">
        <SectionTitle
          heading="Mes Skills"
          subheading="languages et logiciels que j'utilise"
        />
        <div className="services-items">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Front-End Skills"
            icons={<AiOutlineHtml5 />}
            icons2={<FaCss3Alt />}
            icons3={<FaReact />}
            icons4={<DiJavascript1 />}
            icons5={<SiRedux />}
          />
          <ServicesSectionItem
            icon={<FiDatabase />}
            title="Back-End Skills"
            icons={<FaNode />}
            icons2={<SiMysql />}
            icons3={<SiPostman />}
            icons4={<SiMongodb />}
          />
          <ServicesSectionItem
            icon={<RiComputerLine />}
            title="Softwares and other Skills"
            icons={<DiNpm />}
            icons2={<DiGit />}
            icons3={<AiOutlineGithub />}
            icons4={<DiVisualstudio />}
            icons5={<SiFigma />}
            icons7={<FaTrello />}
          />
        </div>
      </div>
    </ServicesSectionStyle>
  );
}

export default ServiceSection;
