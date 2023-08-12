import { Note, ActionType, Action } from './actions';

interface State {
  notes: Note[];
}

const initialState: State = {
  notes: [],
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case ActionType.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case ActionType.PIN_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload ? { ...note, pinned: !note.pinned } : note
        ),
      };
    case ActionType.CHANGE_COLOR:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? { ...note, color: action.payload.color } : note
        ),
      };
    default:
      return state;
  }
};

export default reducer;
