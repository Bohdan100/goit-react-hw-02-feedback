import React from 'react';
import PropTypes from 'prop-types';

import { FeedbackButton } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <FeedbackButton
        key={option}
        type="button"
        value={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackButton>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
