import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./tasksSlice";
import authReducer from "./authSlice";


import { tasksApi } from "./tasksApi";
import { userApi } from "./userApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,

    [tasksApi.reducerPath]:
      tasksApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tasksApi.middleware,
      userApi.middleware
    ),
});