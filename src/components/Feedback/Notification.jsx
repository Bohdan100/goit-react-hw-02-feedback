import React from 'react';
import PropTypes from 'prop-types';

import { NotificationText } from './Feedback.styled';

export const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
