import { addNote, deleteNote, pinNote, changeNoteColor } from '../redux/actions';

describe('Redux Actions', () => {
  test('should create an action to add a note', () => {
    const note = {
      id: 'some-uuid',
      title: 'Test Note',
      content: 'This is a test note.',
      pinned: false,
      color: '#f0f0f0',
    };
    const expectedAction = {
      type: 'ADD_NOTE',
      payload: note,
    };
    expect(addNote(note)).toEqual(expectedAction);
  });

  test('should create an action to delete a note', () => {
    const noteId = 'some-uuid';
    const expectedAction = {
      type: 'DELETE_NOTE',
      payload: noteId,
    };
    expect(deleteNote(noteId)).toEqual(expectedAction);
  });

  test('should create an action to pin a note', () => {
    const noteId = 'some-uuid';
    const expectedAction = {
      type: 'PIN_NOTE',
      payload: noteId,
    };
    expect(pinNote(noteId)).toEqual(expectedAction);
  });

  test('should create an action to change the color of a note', () => {
    const noteId = 'some-uuid';
    const color = '#ff0000';
    const expectedAction = {
      type: 'CHANGE_COLOR',
      payload: { id: noteId, color },
    };
    expect(changeNoteColor(noteId, color)).toEqual(expectedAction);
  });
});
