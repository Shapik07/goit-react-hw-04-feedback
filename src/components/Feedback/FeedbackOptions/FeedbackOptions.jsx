import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackOptionSection,
  ButtonsList,
  ButtonListItem,
  Button,
} from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <FeedbackOptionSection className="feedback">
        <ButtonsList className="listButton">
          {options.map((opt, index) => (
            <ButtonListItem key={index}>
              <Button
                type="button"
                className="button"
                name={opt}
                onClick={onLeaveFeedback}
              >
                {opt}
              </Button>
            </ButtonListItem>
          ))}
        </ButtonsList>
      </FeedbackOptionSection>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
