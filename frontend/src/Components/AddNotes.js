// AddNotes.js
import React, { useState } from 'react';
import './AddNotes.css';

const AddNotes = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="add-notes-container">
      <h2>Add Notes</h2>
      <form>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div className="form-group">
          <label>Link:</label>
          <input type="text" value={link} onChange={handleLinkChange} />
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
