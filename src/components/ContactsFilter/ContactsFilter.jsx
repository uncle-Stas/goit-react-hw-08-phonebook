import css from './ContactsFilter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'Redux/phonebook/filterSlice';
import { selectFilter } from 'Redux/phonebook/selectors';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    const { value } = event.target;

    dispatch(setFilter(value));
  };

  const filter = useSelector(selectFilter);

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
