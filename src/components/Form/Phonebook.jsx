import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
  PhonebookForm,
  PhonebookFormButton,
  PhonebookFormLabel,
  PhonebookFormInput,
} from './Form.styled';

const Phonebook = ({
  handleSubmit,
  nameId,
  name,
  number,
  handleChange,
  telId,
}) => (
  <>
    <PhonebookForm onSubmit={handleSubmit}>
      <PhonebookFormLabel htmlFor={nameId}>Name</PhonebookFormLabel>
      <PhonebookFormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={shortid.generate()}
        value={name}
        onChange={handleChange}
      />
      <PhonebookFormLabel htmlFor={telId}>Number</PhonebookFormLabel>
      <PhonebookFormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <PhonebookFormButton type="submit">Add contact</PhonebookFormButton>
    </PhonebookForm>
  </>
);

export default Phonebook;

Phonebook.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  nameId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  telId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
