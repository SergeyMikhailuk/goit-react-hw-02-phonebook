import React from 'react';

import { AppState } from 'components/App';

import { List, ListItem } from './ContactsList.styled';

const ContactList: React.FC<ContactListProps> = ({ contacts, onContactDelete }) => {
  return (
    <List>
      {!!contacts.length &&
        contacts.map((contact, index) => (
          <ListItem key={contact.id}>
            <span>{index + 1}</span>
            {contact.name}, {contact.number}
            <button onClick={() => onContactDelete(contact.id)}>delete</button>
          </ListItem>
        ))}
    </List>
  );
};

export default ContactList;

type ContactListProps = Pick<AppState, 'contacts'> & {
  onContactDelete: (p: string) => void;
};
