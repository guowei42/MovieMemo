import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    IconButton,
    InputBase,
    Paper,
} from "@mui/material";
import React from "react";
import { useLazyGetMovieByImdbIdQuery } from "./services/endpoints/movie";

function App() {
    const [trigger, { data, isLoading, isSuccess }] =
        useLazyGetMovieByImdbIdQuery();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        trigger("tt3896198");
    };

    return (
        <>
            <Paper
                component="form"
                elevation={4}
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                }}
                onSubmit={handleSubmit}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Movie By IMDB Id"
                    inputProps={{ "aria-label": "search by imdb id" }}
                />
                <IconButton type="submit">
                    <SearchIcon />
                </IconButton>
            </Paper>
            {!isLoading && isSuccess && (
                <Card sx={{ border: "1px solid red", flex: 1 }}>
                    <Grid container>
                        <Grid item xs={3}>
                            <CardContent>
                                <Box component="img" src={data?.Poster} />
                            </CardContent>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={8}>
                            <CardContent>
                                <Grid container>
                                    <div>{data?.Title}</div>
                                    <div>{data?.Plot}</div>
                                </Grid>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            )}
        </>
    );
}

export default App;
