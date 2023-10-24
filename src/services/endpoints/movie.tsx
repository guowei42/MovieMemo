import MovieOrShow from "../../types/MovieOrShow";
import { omdbApi } from "../omdb";

const omdbMovie = omdbApi.injectEndpoints({
    endpoints: (builder) => ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getMovieByImdbId: builder.query<MovieOrShow, string>({
            query: (id) => {
                console.log("API CALL");
                //return `apikey=${import.meta.env.VITE_OMDB_KEY}&i=tt3896198`
                return `movies?imdbID=${id}`;
            },
            transformResponse: (baseQueryReturnValue: MovieOrShow[]) => {
                return baseQueryReturnValue[0];
            },
        }),
    }),
});

export const { useLazyGetMovieByImdbIdQuery } = omdbMovie;
