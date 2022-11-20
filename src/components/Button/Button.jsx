import css from './Button.module.css';
import PropTypes from 'prop-types';

import { ThreeDots } from 'react-loader-spinner';

const Button = ({ type, onClick, isLoading, text }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={css.button}
      disabled={isLoading}
    >
      {isLoading ? (
        <ThreeDots
          height="15"
          width="36.5"
          radius="6"
          color="#ffffff"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;

// --------------------------- PropTypes ----------------------

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};
