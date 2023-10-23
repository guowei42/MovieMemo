import { useGetMovieQuery } from "./services/endpoints/movie";

function App() {
    const {data, isLoading} = useGetMovieQuery();

    return (
        <>
            {!isLoading && <div>{JSON.stringify(data)}</div>}
        </>
    );
}

export default App;
