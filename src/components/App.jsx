import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Title, TitleContacts } from 'components/Container.styles';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </Container>
  );
};
