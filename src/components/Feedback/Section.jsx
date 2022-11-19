import React from 'react';
import PropTypes from 'prop-types';

import { Title, SectionContainer } from './Feedback.styled';

export const Section = ({ title, children }) => (
  <SectionContainer>
    <Title>{title}</Title>
    {children}
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
