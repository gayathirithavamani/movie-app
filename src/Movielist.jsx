import React, { useEffect, useState } from "react";

import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// container and presentation
function MovieList() {
  const [movielist, setMovieList] = useState([]);

  const getMovie = () => {
    fetch("https://63899fdf4eccb986e895a997.mockapi.io/movies")
      .then((data) => data.json())
      .then((movies) => setMovieList(movies));
  };
  useEffect(() => getMovie(), []);
  //     fetch("https://63899fdf4eccb986e895a997.mockapi.io/movies")
  //       .then((data) => data.json())
  //       .then((movies) => setmovielist(movies));
  //   }, []);
  const deleteMovie = (id) => {
    fetch(`https://63899fdf4eccb986e895a997.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then((data) => getMovie());
    // console.log("deleting movie", id);
  };
  return (
    <div>
      <div className="movie-list">
        {movielist.map((mv) => (
          <div key={mv.id}>
            <Movie
              movie={mv}
              id={mv.id}
              // renderprops
              deletebutton={
                <IconButton
                  style={{ marginLeft: "auto" }}
                  onClick={() => deleteMovie(mv.id)}
                  aria-label="delete"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
              editbutton={
                <IconButton
                  style={{ marginLeft: "auto" }}
                  onClick={() => deleteMovie(mv.id)}
                  aria-label="edit"
                  color="secondary"
                >
                  <EditIcon />
                </IconButton>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default MovieList;
