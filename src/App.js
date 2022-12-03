
import React, { useState } from 'react';
import './App.css';
import Movielist from './Movielist';
import { Routes, Route,  Navigate, useParams, useNavigate } from "react-router-dom";
import Addcolor from './Addcolor';
import { Movie } from './Movie';
import Addmovie from './components/Addmovie';
import { INITIAL_MOVIE_LIST } from './INITIAL_MOVIE_LIST';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ThemeProvider, createTheme } from '@mui/material/styles';




function App() {
  const [movielist, setmovielist] = useState(INITIAL_MOVIE_LIST);
const navigate=useNavigate();

const [mode,setMode]=useState("light");
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
fetch("https://63899fdf4eccb986e895a997.mockapi.io/movies").then((data)=>data.json()).then((movies)=>console.log(movies))
  return (
    <ThemeProvider theme={darkTheme}>
 
    <div className='App'>
       <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
          <Button color="inherit" onClick={()=>navigate("/movies")}>Movies</Button>
          <Button color="inherit" onClick={()=>navigate("/color-games")}>Color-games</Button>
          <Button color="inherit" onClick={()=>navigate("/movies/addmovie")}>Add-Movies</Button>
          <Button  color="inherit" onClick={()=>setMode(mode ==="light"? "dark":"light")}>dark mode</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<Movielist  movielist={movielist}/>} />
        <Route path="/add-movies" element={<Movie />} />
        <Route path="/color-games" element={<Addcolor />} />
        <Route path="/movies/addmovie" element={ <Addmovie movielist={movielist} setmovielist={setmovielist} />} />
        <Route path="/movies/:id" element={<MovieDetail  movielist={movielist}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
    </ThemeProvider>
  );
}

function MovieDetail({movielist}, styles) {
  const { id } = useParams();
  const movie=movielist[id];
  console.log(movielist, movie);

const Navigate=useNavigate();
  return (
    <div>
       <iframe width="100%" 
      height="800px"
       src={movie.trailer}
        title="Avatar: The Way of Water | New Trailer" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen>

         </iframe> 
         <div className='movie-detail-container'>
          <div className="movie-specs">
                <h2 className="movie-name">{movie.name}
                    
                </h2>
                <p style={styles} className="movie-rating">🦚{movie.rating}</p>
              
            </div>
      <p className="movie-summary">{movie.summary}</p> 
      </div>
      <Button 
      startIcon={<ArrowBackIcon />}
      onClick={()=>Navigate(-1)} 
      variant="contained">Back</Button>
      {/* <button onClick={()=>Navigate(-1)}> Back</button> */}
       {/* <h1>movie details page {movie.name}......😊😊😊😊😊😊😊😊😊😊😊</h1> */}
    </div>
  );
}



function NotFound() {
  return (
    <div>
      <h1>404 not found </h1>
      <img src="https://cdn.dribbble.com/users/1488185/screenshots/4405994/777_still_2x.gif?compress=1&resize=320x240&vertical=top"
        alt="404 not found" />
    </div>
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

