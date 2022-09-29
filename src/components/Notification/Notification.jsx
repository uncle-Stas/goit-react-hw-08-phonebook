import PropTypes from 'prop-types';

const Notification = ({ text }) => {
  return (
    <p>
      <b>{text}</b>
    </p>
  );
};

export default Notification;

// --------------------------- PropTypes ----------------------

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
