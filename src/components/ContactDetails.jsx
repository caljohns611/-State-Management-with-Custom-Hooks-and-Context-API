import React from 'react';
import { useContactContext } from '../context/ContactContext';

const ContactDetails = () => {
    const { selectedContact } = useContactContext();

    if (!selectedContact) {
        return <p>Select a contact to see the details.</p>;
    }

    return (
        <div>
            <h2>Contact Details</h2>
            <p><strong>Name:</strong> {selectedContact.name}</p>
            <p><strong>Phone:</strong> {selectedContact.phone}</p>
            <p><strong>Email:</strong> {selectedContact.email}</p>
        </div>
    );
};

export default ContactDetails;