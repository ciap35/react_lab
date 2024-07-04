import React from 'react';
import { FaTrash, FaPen, FaPlus } from 'react-icons/fa';

const Contact = ({ contacts = [], dispatch, onModify, onDelete }) => {
    const handleDelete = (id) => {
        onDelete(id); // Llama a la función onDelete pasada desde ContactList
    };




    return (
        <> {contacts.map((contact) => (
            <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.notes}</td>
                <td>
                    <button type='button' className='btn btn-danger' onClick={() => handleDelete(contact.id)}><FaTrash />  DELETE</button>
                </td>
                <td>
                    <button type='button' className='btn btn-info' onClick={() => {
                        onModify(contact);
                    }}>  <FaPen /> MODIFY</button>
                </td>
            </tr>
        ))}
        </>
    );
}

export default Contact;
