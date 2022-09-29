import css from './ContactsFilter.module.css';
import PropTypes from 'prop-types';

const ContactsFilter = ({ onChangeFilter }) => {
  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <label className={css.filterLabel}>
        Search contacts by name:
        <input type="text" placeholder="Enter name" onChange={onChangeFilter} />
      </label>
    </>
  );
};

export default ContactsFilter;

// --------------------------- PropTypes ----------------------

ContactsFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
