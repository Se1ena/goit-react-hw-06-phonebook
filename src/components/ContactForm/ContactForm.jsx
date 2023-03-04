import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

import { Form, Btn } from 'components/ContactForm/ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  function handleSubmitForm(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`"${name} already in contacts"`);
      form.reset();
      return;
    }

    dispatch(addContact(name, number));
    form.reset();
  }

  return (
    <Form onSubmit={handleSubmitForm}>
      <label>
        <div>Name</div>
        <input
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required={true}
          placeholder="Enter name"
        />
      </label>
      <label>
        <div>Number</div>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required={true}
          placeholder="Enter phone number"
        />
      </label>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};
