import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, pinNote, changeNoteColor } from '../redux/actions';
import Note from './Note';

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handlePin = (id) => {
    dispatch(pinNote(id));
  };

  const handleColorChange = (id, color) => {
    dispatch(changeNoteColor(id, color));
  };

  const sortedNotes = [...notes].sort((a, b) => {
    if (a.pinned && !b.pinned) {
      return -1;
    } else if (!a.pinned && b.pinned) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          pinned={note.pinned}
          color={note.color}
          image={note.image}
          onDelete={() => handleDelete(note.id)}
          onPin={() => handlePin(note.id)}
          onColorChange={handleColorChange}
        />
      ))}
    </div>
  );
};

export default NoteList;
