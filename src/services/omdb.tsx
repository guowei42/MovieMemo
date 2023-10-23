// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const omdbApi = createApi({
    reducerPath: "omdb",
    baseQuery: fetchBaseQuery({
        //baseUrl: `http://www.omdbapi.com/?`,
        baseUrl: "http://localhost:3000/movie?"
    }),
    endpoints: () => ({}),
});
