import css from './ContactsFilter.module.css';
import PropTypes from 'prop-types';

const ContactsFilter = ({ onChangeFilter, filter }) => {
  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <label className={css.filterLabel}>
        Search contacts by name:
        <input
          type="text"
          placeholder="Enter name"
          onChange={onChangeFilter}
          value={filter}
        />
      </label>
    </>
  );
};

export default ContactsFilter;

// --------------------------- PropTypes ----------------------

ContactsFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
