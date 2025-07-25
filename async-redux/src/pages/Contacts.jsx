import { useState } from 'react';
import { useFetchContactsQuery } from '../redux/users/contacts/contactsSlice';
import { ClipLoader } from 'react-spinners';
import { HomePage } from './Home';
import { ContactFinder } from '../redux/users/contacts/ContactFinder';

export const ContactsPage = () => {
  return (
    <div>
      <HomePage />
      <ContactFinder />
    </div>
  );
};
