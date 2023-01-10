import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup.string().required("a cool name is need😍"),
  poster: yup
    .string()
    .required("a cool poster is need😍")
    .min(4, "need a bigger poster👍"),
  rating: yup
    .number()
    .required("a cool rating is need😍")
    .min(0, "need a bigger rating👍")
    .max(10),
  summary: yup
    .string()
    .required("a cool summary is need😍")
    .min(20, "need a bigger summary👍"),
  trailer: yup
    .string()
    .required("a cool trailer is need😍")
    .min(4, "need a bigger trailer👍")
    .url(),
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
    fetch("https://63899fdf4eccb986e895a997.mockapi.io/movies", {
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
