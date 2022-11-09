import React, { Component } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Feedback/FeedbackStatistics/FeedbackStatistics';
import { Section } from 'components/Feedback/FeedbackSection/FeedbackSection';
import { Notification } from 'components/Feedback/FeedbackNotification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    this.positivePercentage = Number(
      ((this.state.good / this.total) * 100).toFixed()
    );
  };

  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

    const { good, neutral, bad } = this.state;
    const { total, positivePercentage } = this;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleClick}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
