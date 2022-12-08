import React, { useEffect, useState } from "react";
import "./App.css";
import Movielist from "./Movielist";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Addcolor from "./Addcolor";
import { Movie } from "./Movie";
import Addmovie from "./components/Addmovie";
// import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { NotFound } from "./NotFound";
import { MovieDetail } from "./MovieDetail";
import { BasicForm } from "./BasicForm";
// import { BasicForm } from "./BasicForm";

function App() {
  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();

  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  useEffect(() => {
    fetch("https://63899fdf4eccb986e895a997.mockapi.io/movies")
      .then((data) => data.json())
      .then((movies) => setmovielist(movies));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/color-games")}>
                Color-games
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/movies/addmovie")}
              >
                Add-Movies
              </Button>
              <Button
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            <Route path="/movies" element={<Movielist />} />
            <Route path="/add-movies" element={<Movie />} />
            <Route path="/color-games" element={<Addcolor />} />
            <Route path="/basic-form" element={<BasicForm />} />
            <Route path="/movies/addmovie" element={<Addmovie />} />
            <Route
              path="/movies/:id"
              element={<MovieDetail movielist={movielist} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <div>
      <h1>welcome to the movie app</h1>
    </div>
  );
}

export default App;
