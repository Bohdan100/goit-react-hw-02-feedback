import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackSection,
  StatisticsTitle,
  Notification,
} from './Feedback.styled';

import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

const Section = ({
  madeFeedback,
  options,
  onLeaveFeedback,
  names,
  total,
  positivePercentage,
}) => (
  <FeedbackSection>
    <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />

    <StatisticsTitle>Statistics</StatisticsTitle>
    {madeFeedback > 0 ? (
      <Statistics
        names={names}
        total={total}
        positivePercentage={positivePercentage}
      />
    ) : (
      <Notification>There is no feedback...</Notification>
    )}
  </FeedbackSection>
);

export default Section;

Section.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
  madeFeedback: PropTypes.number.isRequired,
  names: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
