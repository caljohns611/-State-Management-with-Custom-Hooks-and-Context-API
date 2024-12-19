import React, { createContext, useState, useContext } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ list }) => {
    const [contacts, setContacts] = useState([
        { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@email.com' },
        { id: 2, name: 'Jane Smith', phone: '321-654-0987', email: 'jane@email.com' },
        { id: 3, name: 'Bob Tyler', phone: '0987-654-321', email: 'bob@email.com' },
    ]);
    const [selectedContact, setSelectedContact] = useState(null);

    return (
        <ContactContext.Provider value={{ contacts, setContacts, selectedContact, setSelectedContact }}>
            {list}
        </ContactContext.Provider>
    );
};

export const useContactContext = () => {
    return useContext(ContactContext);
};