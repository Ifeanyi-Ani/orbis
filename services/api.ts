import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3001",
  }),
  tagTypes: ["patients", "doctor", "nurse", "admin", "appointment"],
  endpoints: () => ({}),
});
