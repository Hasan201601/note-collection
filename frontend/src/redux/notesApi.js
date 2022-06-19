import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";
export const notesApi = createApi({
  reducerPath: "notesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().userReducer.userInfo.token;
      console.log(token);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    notes: builder.query({
      query: () => "/notes",
    }),
    createNote: builder.mutation({
      query: (data) => ({
        url: `/notes/create`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useNotesQuery, useCreateNoteMutation } = notesApi;
