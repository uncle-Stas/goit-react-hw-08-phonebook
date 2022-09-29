import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.contactItem}>
      <span className={css.itemText}>
        {name}: {number}
      </span>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.button}
      >
        delete
      </button>
    </li>
  );
};

export default ContactItem;

// --------------------------- PropTypes ----------------------

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
