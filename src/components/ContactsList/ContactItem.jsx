import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

import { Notify } from 'notiflix';
import { ThreeDots } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'services/ApiSlice';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleClick = () => {
    deleteContact(id);
    Notify.info(`${name} - was removed`);
  };

  return (
    <li className={css.contactItem}>
      <span className={css.itemText}>
        {name}: {phone}
      </span>
      <button
        type="button"
        onClick={handleClick}
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
          'delete'
        )}
      </button>
    </li>
  );
};

export default ContactItem;

// --------------------------- PropTypes ----------------------

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
