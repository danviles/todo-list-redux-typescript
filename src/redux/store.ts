import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todos";


const store = configureStore({
  reducer: {
    todos: todosReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;


export default store;