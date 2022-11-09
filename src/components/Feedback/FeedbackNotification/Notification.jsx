import PropTypes from 'prop-types';
import { Message } from './FeedbackNotification.styled';

export const Notification = ({ message }) => {
  return <Message className="notification">{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
