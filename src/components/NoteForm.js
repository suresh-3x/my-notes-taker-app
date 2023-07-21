import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNote } from '../redux/actions';

const NoteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#f0f0f0'); 
  const [image, setImage] = useState(null); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') {
      const newNote = {
        id: uuidv4(),
        title,
        content,
        pinned: false,
        color,
        image,
      };
      dispatch(addNote(newNote));
      setTitle('');
      setContent('');
      setColor('#f0f0f0');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title (optional)"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note content..."
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && (
        <div className="image-preview">
          <img
            src={image}
            alt="Note"
            style={{ width: '200px', height: 'auto', cursor: 'pointer' }}
            onClick={() => alert(`Full Image URL: ${image}`)}
          />
        </div>
      )}
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
