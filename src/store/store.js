import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./tasksSlice";

import { tasksApi } from "./tasksApi";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,

    [tasksApi.reducerPath]:
      tasksApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tasksApi.middleware
    ),
});