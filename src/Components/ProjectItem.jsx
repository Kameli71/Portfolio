import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyle = styled.div`
  .project-item-img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  project-item-info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .project-item-title {
    font-size: 2.2rem;
  }
  .project-item-desc {
    font-size: 1.6rem;
    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .project-item-img {
      height: 350px;
    }
  }
`;

function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'project description',
  link = 'link',
}) {
  return (
    <ProjectItemStyle>
      <a
        className="project-item-img"
        target="_blank"
        href={link}
        rel="noreferrer"
      >
        <img src={img} alt="Odyssey" />
      </a>
      <div className="project-item-info">
        <Link to="#">
          <h3 className="project-item-title">{title}</h3>
        </Link>
        <p className="project-item-desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}

export default ProjectItem;
