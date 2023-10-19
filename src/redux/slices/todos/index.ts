import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoState {
  id: string;
  name: string;
  color: string;
}

const initialState: TodoState[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    }
  }
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;