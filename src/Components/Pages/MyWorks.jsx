import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../SectionTitle';
import ProjectItem from '../ProjectItem';
import ProjectInfo from '../../assets/data/projects';

const ProjectStyles = styled.div`
  padding: 10rem 0;
  .projects-allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects-searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects-searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects-searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects-searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects-searchBar,
    .projects-searchBar form,
    .projects-searchBar input {
      width: 100%;
    }
  }
`;

function MyWorks() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <ProjectStyles>
      <div className="container">
        <SectionTitle
          heading="mes projets"
          subheading="mes travaux les plus récents"
        />
        <div className="projects-searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="project name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects-allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}

export default MyWorks;
