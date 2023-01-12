import React, { useState } from "react";
import Counter from "./components/counter";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export function Movie({ movie, id, deleteButton, editButton }) {
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const Navigate = useNavigate();
  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="toggle summary"
            >
              {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => Navigate(`/movies/${id}`)}
              aria-label="toggle summary"
            >
              <InfoIcon />
            </IconButton>
            {/* {id} */}
          </h2>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>

        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
        {editButton} {deleteButton}
      </CardActions>
    </Card>
  );
}
