import { useGetUserProfileQuery } from "../../services/endpoints/user";

const LOGGED_IN_USER = "5ffc7f6e-f408-46ab-b4f0-2127f76c4729";

const UserProfile = () => {
    const { data, isLoading } = useGetUserProfileQuery(LOGGED_IN_USER);
    return (
        <>
            {!isLoading && data && (
                <div>
                    {data.name}
                    Watched: {data.watched.map((val) => (
                        <div>{val}</div>
                    ))}
                    Watch List: {data.watchlist.map((val) => (
                        <div>{val}</div>
                    ))}
                </div>
            )}
        </>
    );
};

export default UserProfile;
