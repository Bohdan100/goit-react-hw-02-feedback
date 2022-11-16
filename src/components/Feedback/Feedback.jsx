import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = name => {
    this.setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const commonValues = Object.values(this.state);
    return commonValues.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage() {
    const positiveFeedback = this.state.good;
    const negativeFeedback = this.state.neutral + this.state.bad;
    return Number.parseInt(
      (positiveFeedback * 100) / (positiveFeedback + negativeFeedback)
    );
  }

  render() {
    const buttonsNames = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    // const buttonsEntries = Object.entries(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonsNames}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              // names={buttonsEntries}
              total={totalFeedback}
              positivePercentage={PositiveFeedbackPercentage}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
  madeFeedback: PropTypes.number,
  // names: PropTypes.arrayOf(
  //   PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  // ),
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
