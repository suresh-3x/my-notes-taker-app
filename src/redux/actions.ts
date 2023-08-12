export interface Note {
  id: string;
  content: string;
  pinned: boolean;
  image: string
}

export enum ActionType {
  ADD_NOTE = 'ADD_NOTE',
  DELETE_NOTE = 'DELETE_NOTE',
  PIN_NOTE = 'PIN_NOTE',
  CHANGE_COLOR = 'CHANGE_COLOR',
}

export interface AddNoteAction {
  type: ActionType.ADD_NOTE;
  payload: Note;
}

export interface DeleteNoteAction {
  type: ActionType.DELETE_NOTE;
  payload: string;
}

export interface PinNoteAction {
  type: ActionType.PIN_NOTE;
  payload: string;
}

export interface ChangeNoteColorAction {
  type: ActionType.CHANGE_COLOR;
  payload: { id: string; color: string };
}

export type Action = AddNoteAction | DeleteNoteAction | PinNoteAction | ChangeNoteColorAction;

export const addNote = (note: Note): AddNoteAction => ({
  type: ActionType.ADD_NOTE,
  payload: note,
});

export const deleteNote = (id: string): DeleteNoteAction => ({
  type: ActionType.DELETE_NOTE,
  payload: id,
});

export const pinNote = (id: string): PinNoteAction => ({
  type: ActionType.PIN_NOTE,
  payload: id,
});

export const changeNoteColor = (id: string, color: string): ChangeNoteColorAction => ({
  type: ActionType.CHANGE_COLOR,
  payload: { id, color },
});
