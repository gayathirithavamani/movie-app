import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { API } from "./global";

export function MovieDetail(styles) {
  const { id } = useParams();
  // const movie = movielist[id];
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  console.log(movie);

  const Navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="800px"
        src={movie.trailer}
        title="Avatar: The Way of Water | New Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">
            🦚{movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => Navigate(-1)}
        variant="contained"
      >
        Back
      </Button>
    </div>
  );
}
export default MovieDetail;
