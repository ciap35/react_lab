import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaBan, FaPlus, FaSave } from 'react-icons/fa';
import { TbFlagCancel } from 'react-icons/tb';

const ContactForm = ({ dispatch, editingContact, onFormSubmit }) => {


  const [data, setData] = useState({ name: "", lastName: "", phoneNumber: "",notes:"" });

  useEffect(() => {
    if (editingContact) {
      setData({
        name: editingContact.name,
        lastName: editingContact.lastName,
        phoneNumber: editingContact.phoneNumber,
        notes: editingContact.notes
      });
    } else {
      setData({ name: "", lastName: "", phoneNumber: "",notes:"" });
    }
  }, [editingContact]);

  const { name, lastName, phoneNumber,notes } = data;
  const handleChange = (e) => { setData({ ...data, [e.target.name]: e.target.value }) };

  const actionAdd = { type: "add", payload: { id: uuidv4(), name, lastName, phoneNumber,notes }, };
  const handleAdd = () => {
    dispatch(actionAdd);
    onFormSubmit();
  };

  const handleModify = () => {
    const updatedContact = {
      id: editingContact.id,
      name,
      lastName,
      phoneNumber,
      notes
    };
    dispatch({ type: "modify", payload: { id: editingContact.id, updatedContact } });
    setData({ name: "", lastName: "", phoneNumber: "",notes:"" });
    onFormSubmit();
  };


  const handleCancel = () => {
    onFormSubmit(); // Cerrar el formulario
  };



  return (
    <div className='container-fluid'>
      <label className="mx-1 d-grid gap-2 mb-1">
        Name {" "}
        <input name="name" type="text" className="form-control" placeholder="name..." required autoComplete='off' onChange={handleChange} value={name}></input>
      </label>
      <label className="mx-1 d-grid gap-2 mb-1">
        LastName {" "}
        <input name="lastName" type="text" className="form-control" placeholder="lastName..." required autoComplete='off' onChange={handleChange} value={lastName}></input>
      </label>
      <label className="mx-1 d-grid gap-2 mb-1">
        Phone Number {" "}
        <input name="phoneNumber" type="text" className="form-control" placeholder="phoneNumber..." required autoComplete='off' onChange={handleChange} value={phoneNumber}></input>
      </label>
      <label className="mx-1 d-grid gap-2 mb-1">
        Notes {" "}
        <input name="notes" type="text" className="form-control" placeholder="notes..." required autoComplete='off' onChange={handleChange} value={notes}></input>
      </label>
      <div className='mx-1 d-grid gap-2 mb-3 mt-3'>
        {editingContact ? (<div className="row">
            <div className="col-6">
              <button className='btn btn-info w-100' onClick={handleModify}><FaSave /> SAVE CHANGES</button>
            </div>
            <div className="col-6">
              <button className='btn btn-danger w-100' onClick={handleCancel}><FaBan /> CANCEL CHANGES</button>
            </div>
          </div>
        ) : (
          <button className='btn btn-success' onClick={handleAdd}><FaPlus /> CREATE NEW</button>
        )}
      </div>
    </div>
  )
}

export default ContactForm
