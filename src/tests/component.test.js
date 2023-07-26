import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'; 
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';
import React from 'react';


describe('Note Component', () => {
  test('renders a note correctly', () => {
    const note = {
      id: 'some-uuid',
      title: 'Test Note',
      content: 'This is a test note.',
      pinned: false,
      color: '#f0f0f0',
    };
    render(<Note {...note} />);
    expect(screen.getByText('Test Note')).toBeInTheDocument();
    expect(screen.getByText('This is a test note.')).toBeInTheDocument();
  });

  test('calls onDelete function when the delete button is clicked', () => {
    const onDeleteMock = jest.fn();
    const note = {
      id: 'some-uuid',
      title: 'Test Note',
      content: 'This is a test note.',
      pinned: false,
      color: '#f0f0f0',
    };
    render(<Note {...note} onDelete={onDeleteMock} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(onDeleteMock).toHaveBeenCalledWith(note.id);
  });


  test('submits a new note correctly', () => {
    const addNoteMock = jest.fn();

    const mockStore = configureMockStore();
    const store = mockStore({});

    render(
      <Provider store={store}>
        <NoteForm addNote={addNoteMock} />
      </Provider>
    );
    
    const inputField = screen.getByLabelText('Note Content');
    const addButton = screen.getByText('Add Note');

    fireEvent.change(inputField, { target: { value: 'New note content' } });
    fireEvent.click(addButton);

    expect(addNoteMock).toHaveBeenCalledTimes(1);
    expect(addNoteMock).toHaveBeenCalledWith(expect.objectContaining({ content: 'New note content' }));

  });
});


