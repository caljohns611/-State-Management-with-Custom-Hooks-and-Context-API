import React from 'react';
import { useContactContext } from '../context/ContactContext';

const ContactList = () => {
    const { contacts, setSelectedContact } = useContactContext();

    const handleClick = (contact) => {
        setSelectedContact(contact);
    };

    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map((contact) => (
                    <li
                        key={contact.id}
                        onClick={() => handleClick(contact)}
                        style={{ cursor: 'pointer', marginBottom: '10px' }}
                    >
                        {contact.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;