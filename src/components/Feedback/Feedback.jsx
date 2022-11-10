import { useState } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Feedback/FeedbackStatistics/FeedbackStatistics';
import { Section } from 'components/Feedback/FeedbackSection/FeedbackSection';
import { Notification } from 'components/Feedback/FeedbackNotification/Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return Number(((good / total) * 100).toFixed());
  };
  let total = good + neutral + bad;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleClick}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
