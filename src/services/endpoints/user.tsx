import UserProfile from "../../types/UserProfile";
import { omdbApi } from "../omdb";

const userAPI = omdbApi.injectEndpoints({
    endpoints: (builder) => ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getUserProfile: builder.query<UserProfile, string>({
            query: (id) => {
                console.log("API CALL");
                //return `apikey=${import.meta.env.VITE_OMDB_KEY}&i=tt3896198`
                return `users/${id}`;
            },
        }),
    }),
});

export const { useGetUserProfileQuery } = userAPI;
