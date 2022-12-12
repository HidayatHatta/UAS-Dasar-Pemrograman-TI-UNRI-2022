import React, { useState } from "react";
import {nanoid} from 'nanoid'
import "./App.css";
import data from "./mock-data.json"

const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: '',
    title: '',
    isbn: '',
    author: '',
  });

  const handleAddFormChange =(event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newJournal = {
      no: nanoid(),
      id: addFormData.id,
      title: addFormData.title,
      isbn: addFormData.isbn,
      author: addFormData.author,
    };

    const newJournals = [...contacts, newJournal];
    setContacts(newJournals);
  };

  return <div className="app-container">
    <div>
      <h1>Database Jurnal dengan React.JS</h1>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>ISBN</th>
          <th>AUTHOR</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr>
            <td>{contact.id}</td>
            <td>{contact.title}</td>
            <td>{contact.isbn}</td>
            <td>{contact.author}</td>
          </tr>))}
      </tbody>
    </table>
    <h2>Add a journal</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="id" required="required" placeholder="id" onChange={handleAddFormChange} />
      <input type="text" name="title" required="required" placeholder="title" onChange={handleAddFormChange} />
      <input type="text" name="isbn" required="required" placeholder="isbn" onChange={handleAddFormChange} />
      <input type="text" name="author" required="required" placeholder="author" onChange={handleAddFormChange} />
      <button type="submit">Add</button>
    </form>
  </div>
};

export default App;