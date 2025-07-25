import { ClipLoader } from 'react-spinners';
import { useFetchContactsQuery } from './contactsSlice';
import { useState } from 'react';

export const ContactFinder = () => {
  const [contactName, setContactName] = useState('');
  const { data, isFetching, isError } = useFetchContactsQuery(contactName, {
    skip: contactName === '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    setContactName(e.currentTarget.elements.contactName.value.trim());

    e.currentTarget.reset();
  };

  const contact = data?.[0];

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="contactName" />
        <button type="submit">Пошук</button>
      </form>

      {isFetching && <ClipLoader />}

      {isError && <p>Помилка запиту. Спробуй ще раз.</p>}

      {!isFetching && contact && (
        <div>
          <h2>Імʼя: {contact.name}</h2>
          <p>Телефон: {contact.phoneNumber}</p>
        </div>
      )}

      {!isFetching && !contact && contactName && (
        <p>Контакт з імʼям "{contactName}" не знайдено 😢</p>
      )}
    </div>
  );
};
