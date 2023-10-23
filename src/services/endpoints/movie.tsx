import { omdbApi } from "../omdb";

omdbApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovie: builder.query({
            query: () => ""
        })
    })
})