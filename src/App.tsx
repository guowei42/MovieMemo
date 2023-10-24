import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography,
} from "@mui/material";
import React from "react";
import { useLazyGetMovieByImdbIdQuery } from "./services/endpoints/movie";
import UserProfile from "./components/UserProfile";

function App() {
    const [trigger, { data, isSuccess }] = useLazyGetMovieByImdbIdQuery();

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
            {isSuccess && data &&(
                <Card sx={{ border: "1px solid red", flex: 1 }}>
                    <Grid container>
                        <Grid item xs={2}>
                            <CardMedia
                                component="img"
                                image={data.Poster}
                                aria-label="movie poster"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <CardHeader title={data.Title}/>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">{data.Plot}</Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Box component="footer">
                                    <Button>+ WatchList</Button>
                                    <Button>+ History</Button>
                                </Box>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            )}
            <UserProfile />
        </>
    );
}

export default App;
