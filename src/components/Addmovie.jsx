import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import * as yup from "yup";

function Addmovie({movielist, setmovielist}) {
    //const [name, setname] = useState("");
    //const [poster, setposter] = useState("");
   // const [rating, setrating] = useState("");
    //const [summary, setsummary] = useState("");
   // const [trailer, settrailer] = useState("");

   const movievalidationSchema = yup.object({
    name: yup
    .string().required(),
    poster: yup
    .string().required().min(4),
    rating: yup
    .number().required().min(0),
    summary: yup
    .string().required().min(20),
     trailer: yup
     .string().required().min(4),
  });

    const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
          poster: "",
          rating: "",
          summary: "",
           trailer: "",
       
      },
      validationSchema: movievalidationSchema,
      onSubmit: (values) => {
        console.log("form values:", values);
      },
    });
    

    const navigate=useNavigate();
  return (
    <div>
          <form className='add-movie-form' onSubmit={handleSubmit}>
          
                <TextField 
                id="outlined-basic" 
                label="Name" variant="outlined"
                value={values.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                 />
                <TextField 
                id="outlined-basic" 
                label="Poster" variant="outlined" 
                value={values.Poster}
                name="Poster"
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <TextField 
                id="outlined-basic" 
                label="Rating" 
                variant="outlined" 
                value={values.Rating}
                name="Rating"
                onChange={handleChange}
                onBlur={handleBlur}
                 />
                <TextField 
                id="outlined-basic" 
                label="Summary" variant="outlined" 
                value={values.Summary}
                name="Summary"
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <TextField 
                 id="outlined-basic" 
                 label="trailer" 
                 variant="outlined" 
                 value={values.trailer}
                 name="trailer"
                 onChange={handleChange}
                 onBlur={handleBlur}
                  />
                <Button type="submit" variant="contained"
                  //  const newmovie = {
                     //   name: name,
                     //   poster: poster,
                     //   rating: rating,
                     //   summary: summary,
                      //  trailer: trailer,
                    //</div></div>};
                    //fetch("https://63899fdf4eccb986e895a997.mockapi.io/movies", {
                     // method: "POST",
                     // body: JSON.stringify(newmovie),
                      //headers: { "content-type": "application/json" },
                   
                    //}).then(()=>navigate("/movies"))
                    
                    //steps
                    //method-post
                    //body-data and json
                    //header-json
                    // setmovielist([...movielist, newmovie]);

                >add movie</Button>
            </form>
    </div>
  )
}

export default Addmovie;