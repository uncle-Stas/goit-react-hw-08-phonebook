import PropTypes from 'prop-types';

const Notification = ({ text, italicText }) => {
  return (
    <p>
      <b>
        <i>{italicText} </i>
        {text}
      </b>
    </p>
  );
};

export default Notification;

// --------------------------- PropTypes ----------------------

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  italicText: PropTypes.string,
};
