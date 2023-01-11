import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./Movielist";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AddColor from "./Addcolor";
import { Movie } from "./Movie";
import { AddMovie } from "./components/Addmovie";
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
import { EditMovie } from "./EditMovie";
import { API } from "./global";
// import { BasicForm } from "./BasicForm";

function App() {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  useEffect(() => {
    fetch(`${API}/movies`)
      .then((data) => data.json())
      .then((movies) => setMovieList(movies));
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
            <Route path="/movies" element={<MovieList />} />
            <Route path="/add-movies" element={<Movie />} />
            <Route path="/color-games" element={<AddColor />} />
            <Route path="/basic-form" element={<BasicForm />} />
            <Route
              path="/movies/addmovie"
              element={
                <AddMovie movieList={movieList} setMovieList={setMovieList} />
              }
            />
            <Route
              path="/movies/:id"
              element={<MovieDetail movieList={movieList} />}
            />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
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
