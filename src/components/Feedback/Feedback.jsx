import React, { Component } from 'react';

import Section from './Section';

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
    const buttonsEntries = Object.entries(this.state);
    const totalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section
          madeFeedback={totalFeedback}
          options={buttonsNames}
          onLeaveFeedback={this.handleIncrement}
          names={buttonsEntries}
          total={totalFeedback}
          positivePercentage={PositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
