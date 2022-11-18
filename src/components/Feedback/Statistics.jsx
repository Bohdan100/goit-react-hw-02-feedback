import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './Feedback.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  // names,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem>good: {good}</StatisticsItem>
        <StatisticsItem>neutral: {neutral}</StatisticsItem>
        <StatisticsItem>bad: {bad}</StatisticsItem>
        {/* {names.map(name => {
          return (
            <StatisticsItem>
              {name.join(': ')}
            </StatisticsItem>
          );
        })} */}
      </StatisticsList>
      <StatisticsText>Total: {total}</StatisticsText>
      <StatisticsText>Positive feedback: {positivePercentage}%</StatisticsText>
    </>
  );
};

Statistics.propTypes = {
  // names: PropTypes.arrayOf(
  //   PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  // ),
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
