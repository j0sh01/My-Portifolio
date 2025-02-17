import { useEffect, useState } from 'react';

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('/api/private')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div>
      <h2>Contact Messages</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.date}>
            <strong>Name:</strong> {contact.name}<br />
            <strong>Email:</strong> {contact.email}<br />
            <strong>Message:</strong> {contact.message}<br />
            <strong>Date:</strong> {new Date(contact.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
