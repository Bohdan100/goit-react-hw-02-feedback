import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { FeedbackText, FeedbackButton } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <FeedbackText>Please leave feedback</FeedbackText>
    {options.map(option => (
      <FeedbackButton
        key={shortid.generate()}
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
