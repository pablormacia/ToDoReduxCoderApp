import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://todoreduxcoderapp-default-rtdb.firebaseio.com/",
  }),

  tagTypes: ["User"],

  endpoints: (builder) => ({
    getUser: builder.query({
      query: (uid) => `users/${uid}.json`,

      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: ({ uid, data }) => ({
        url: `users/${uid}.json`,
        method: "PATCH",
        body: data,
      }),

      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
} = userApi;