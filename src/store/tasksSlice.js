// src/store/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "Estudiar Redux",
      completed: false,
    },
    {
      id: "2",
      title: "Practicar React Native",
      completed: true,
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    toggleTask: (state, action) => {
      const task = state.tasks.find(
        task => task.id === action.payload
      );

      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;