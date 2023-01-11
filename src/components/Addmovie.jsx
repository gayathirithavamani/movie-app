import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { API } from "../global";

const movieValidationSchema = yup.object({
  name: yup.string(),
  poster: yup.string().min(4),
  rating: yup.number().min(0).max(10),
  summary: yup.string().min(20),
  trailer: yup.string().min(4).url(),
});

export function AddMovie() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: movieValidationSchema,
      onSubmit: (newMovie) => {
        console.log("form values:", newMovie);
        addMovie(newMovie);
      },
    });

  const navigate = useNavigate();

  const addMovie = (newMovie) => {
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "content-type": "application/json" },
    }).then(() => navigate("/movies"));
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        value={values.name}
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />

      <TextField
        id="outlined-basic"
        label="poster"
        variant="outlined"
        value={values.poster}
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />

      <TextField
        id="outlined-basic"
        label="rating"
        variant="outlined"
        value={values.rating}
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}
      />

      <TextField
        id="outlined-basic"
        label="summary"
        variant="outlined"
        value={values.summary}
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : null}
      />

      <TextField
        id="outlined-basic"
        label="trailer"
        variant="outlined"
        value={values.trailer}
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />

      <Button type="submit" variant="contained">
        add movie
      </Button>
    </form>
  );
}
