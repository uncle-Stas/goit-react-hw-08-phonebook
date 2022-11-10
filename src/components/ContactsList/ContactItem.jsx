import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contactsOperations';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <span className={css.itemText}>
        {name}: {number}
      </span>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
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
};
