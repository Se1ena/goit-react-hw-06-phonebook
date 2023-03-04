import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { List } from 'components/ContactList/ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import Notification from '../Notifications/Notifications';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const nameFilter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return <Notification message="There is no contacts" />;
  }

  return (
    <div>
      <List>
        {filteredContacts.map((contact, id) => (
          <ContactItem key={id} contact={contact} />
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
