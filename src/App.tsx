import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();

    const gotoProfile = () => navigate("/profile");

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                                flex: 1,
                            }}
                        >
                            Movie Memo
                        </Typography>
                        <Button color="inherit" onClick={gotoProfile}>
                            Profile
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet/>
            
        </>
    );
};

export default App;
