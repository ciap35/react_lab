import React, { useReducer, useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import Contact from './Contact';
import { ContactReducer } from '../reducers/ContactReducer';
import { v4 as uuidv4 } from 'uuid';
import { FaUserPlus } from 'react-icons/fa';

const ContactList = () => {

  const [formView, setFormView] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddContact = () => {
    setFormView(true);
    setShowButton(false);
    setEditingContact(null);
    setIsEditing(false);
  };

  const handleModifyContact = (contact) => {
    setEditingContact(contact);
    setFormView(true);
    setShowButton(false);
    setIsEditing(true);
  };

  const handleDeleteContact = (id) => {
    if (isEditing) {
      setFormView(false);
      setIsEditing(false);
      setShowButton(true);
    }
    const actionDelete = {
      type: "delete",
      payload: { id }
    };
    dispatch(actionDelete);
  };

  const init = () => {
    const contacts = localStorage.getItem("contacts");
    console.log(contacts);
    return contacts ? JSON.parse(contacts) : [];
  }

  const [state, dispatch] = useReducer(ContactReducer, [], init);


  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state]);

  return (
    <div className='container-fluid mt-4'>
      {
        showButton && (
          <button type='button' className='btn btn-info' onClick={handleAddContact}><FaUserPlus/> Add contact</button>
        )
      }
      {
        formView && (
          <>
            <h3 className='text-center'>CONTACT FORM</h3>
            <ContactForm dispatch={dispatch} onFormSubmit={() => { setFormView(false); setShowButton(true); }} editingContact={editingContact}></ContactForm>
          </>
        )
      }
      <hr></hr>
      <div className='table-responsive'>
      <table className="table table-striped table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>NAME</th>
            <th>LASTNAME</th>
            <th>PHONE NUMBER</th>
            <th>NOTES</th>
          </tr>
        </thead>
        <tbody>
          <Contact contacts={state} dispatch={dispatch} onModify={handleModifyContact} onDelete={handleDeleteContact}></Contact>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default ContactList;
