import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://todoreduxcoderapp-default-rtdb.firebaseio.com/",
  }),

  tagTypes: ["Tasks"],

  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "tasks.json",

      transformResponse: (response) =>
        Object.entries(response || {}).map(([id, task]) => ({
          id,
          ...task,
        })),

      providesTags: ["Tasks"],
    }),

    addTask: builder.mutation({
      query: (task) => ({
        url: "tasks.json",
        method: "POST",
        body: task,
      }),

      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ id, task }) => ({
        url: `tasks/${id}.json`,
        method: "PATCH",
        body: task,
      }),

      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const { useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation } =
  tasksApi;
