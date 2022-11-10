import PropTypes from 'prop-types';
import {
  FeedbackOptionSection,
  ButtonsList,
  ButtonListItem,
  Button,
} from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
