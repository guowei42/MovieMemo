import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useLazyGetMovieByImdbIdQuery } from "../../services/endpoints/movie";


const SearchMovie = () => {
    const [trigger, { data, isSuccess }] = useLazyGetMovieByImdbIdQuery();

    return (
        <Box>
            <Autocomplete
                sx={{ ml: 1, flex: 1, margin: 3 }}
                disablePortal
                options={[
                    {
                        label: "tt18968540",
                    },
                    {
                        label: "tt3896198",
                    },
                ]}
                onChange={(event, value) => {
                    event.preventDefault();
                    if (value) trigger(value.label);
                }}
                renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                )}
            />
            {isSuccess && data && (
                <Card sx={{ border: "1px solid black", flex: 1, margin: 2 }}>
                    <Grid container>
                        <Grid item xs={2}>
                            <CardMedia
                                component="img"
                                image={data.Poster}
                                aria-label="movie poster"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <CardHeader title={data.Title} />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {data.Plot}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Box component="footer">
                                    <Button>+ Want to watch</Button>
                                    <Button>+ Already Watched</Button>
                                </Box>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            )}
        </Box>
    );
};

export default SearchMovie;
