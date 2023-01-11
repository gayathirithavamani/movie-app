// import React from "react";

// export function EditMovie() {
//   return (
//     <div>
//       <h1>Movie editing....🎶🎶</h1>
//     </div>
//   );
// }

import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { API } from "./global";

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

export function EditMovie() {
  const { id } = useParams();
  // const movie = movielist[id];
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);

  console.log(movie);

  return (
    <div>{movie ? <EditFormMovie movie={movie} /> : "Loading....😇😇"}</div>
  );
}

function EditFormMovie({ movie }) {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: movieValidationSchema,
      onSubmit: (updatedMovie) => {
        console.log("form values:", updatedMovie);
        editMovie(updatedMovie);
      },
    });

  const navigate = useNavigate();

  const editMovie = (updatedMovie) => {
    fetch(`${API}o/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
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

      <Button color="success" type="submit" variant="contained">
        save
      </Button>
    </form>
  );
}
