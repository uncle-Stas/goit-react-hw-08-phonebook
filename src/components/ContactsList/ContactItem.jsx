import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

import { Notify } from 'notiflix';
import { useDeleteContactMutation } from 'services/ApiContactsSlice';
import { useEffect } from 'react';
import Button from 'components/Button/Button';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading, isSuccess, isError }] =
    useDeleteContactMutation();

  const handleClick = () => {
    deleteContact(id);
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.info(`${name} - was removed`);
    }
  }, [name, isSuccess]);

  useEffect(() => {
    if (isError) {
      Notify.failure('Oops, something went wrong...');
    }
  }, [isError]);

  return (
    <li className={css.contactItem}>
      <span className={css.itemText}>
        {name}: {number}
      </span>
      <Button
        type="button"
        text="delete"
        onClick={handleClick}
        isLoading={isLoading}
      />
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
