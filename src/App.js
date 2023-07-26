import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const App = () => {
  return (
    <div className="app">
      <h1 style={{
        textAlign: 'center'
      }}>Note Taking App</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default App;
