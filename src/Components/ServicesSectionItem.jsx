import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
// import PText from './PText';

const ItemStyle = styled.div`
  text-align: center;
  .services-item-icon {
    svg {
      width: 3rem;
      margin: 1rem;
    }
  }
  .services-item-title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Front-End',
  icons,
  icons2,
  icons3,
  icons4,
  icons5,
  icons6,
  icons7,
  icons8,
  icons9,
  icons10,
  icons11,
}) {
  return (
    <ItemStyle>
      <div className="services-item-icon">{icon}</div>
      <div className="services-item-title">{title}</div>
      <div className="services-item-icon">
        {icons}
        {icons2}
        {icons3}
        {icons4}
        {icons5}
        {icons6}
        {icons7}
        {icons8}
        {icons9}
        {icons10}
        {icons11}
      </div>
    </ItemStyle>
  );
}

export default ServicesSectionItem;
