const initialState = {
    notes: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return {
          notes: [...state.notes, action.payload],
        };
      case 'DELETE_NOTE':
        return {
          notes: state.notes.filter((note) => note.id !== action.payload),
        };
      case 'PIN_NOTE':
        return {
          notes: state.notes.map((note) =>
            note.id === action.payload ? { ...note, pinned: !note.pinned } : note
          ),
        };
      case 'CHANGE_COLOR':
        return {
          notes: state.notes.map((note) =>
            note.id === action.payload.id ? { ...note, color: action.payload.color } : note
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  