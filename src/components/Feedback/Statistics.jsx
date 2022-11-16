import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

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
        <StatisticsItem key={shortid.generate()}>good: {good}</StatisticsItem>
        <StatisticsItem key={shortid.generate()}>
          neutral: {neutral}
        </StatisticsItem>
        <StatisticsItem key={shortid.generate()}>bad: {bad}</StatisticsItem>
        {/* {names.map(name => {
          return (
            <StatisticsItem key={shortid.generate()}>
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
