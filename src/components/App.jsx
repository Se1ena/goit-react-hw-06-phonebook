import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Title, TitleContacts } from 'components/Container.styles';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const { name, number } = data;
    if (checkDoubleContact(data)) {
      alert(`${name} is already in your contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevState => [newContact, ...prevState]);
  };

  const checkDoubleContact = inputData => {
    return contacts.find(contact => contact.name === inputData.name);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const handleInputChange = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalized = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} onFilter={handleInputChange} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </Container>
  );
};

//export class App extends Component {
//state = {
//contacts: [],
//filter: '',
//};

//componentDidMount() {
//console.log('App componentDidMount');

//const contacts = localStorage.getItem('contacts');
//const parsedContacts = JSON.parse(contacts);

//if(parsedContacts){
// this.setState({contacts: parsedContacts});
//}

//console.log(parsedContacts);
//const contacts = JSON.parse(localStorage.getItem("my-contacts"));
//this.setState({contacts})
//}

//componentDidUpdate(prevProps, prevState) {
//console.log('App componentDidUpdate');

// if(this.state.contacts !== prevState.contacts){
//console.log('Оновилось поле contacts, записую contacts в сховище');

// localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//}
//const {contacts} = this.state;
//localStorage.setItem("my-contacts", JSON.stringify(contacts))
//}
//}
