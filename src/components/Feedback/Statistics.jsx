import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './Feedback.styled';

export const Statistics = ({ names, total, positivePercentage }) => {
  return (
    <>
      <StatisticsList>
        {names.map(name => {
          return (
            <StatisticsItem key={shortid.generate()}>
              {name.join(': ')}
            </StatisticsItem>
          );
        })}
      </StatisticsList>
      <StatisticsText>Total: {total}</StatisticsText>
      <StatisticsText>Positive feedback: {positivePercentage}%</StatisticsText>
    </>
  );
};

Statistics.propTypes = {
  names: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
