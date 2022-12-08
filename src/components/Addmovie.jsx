import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';

function Addmovie({movielist, setmovielist}) {
    const [name, setname] = useState("");
    const [poster, setposter] = useState("");
    const [rating, setrating] = useState("");
    const [summary, setsummary] = useState("");
    const [trailer, settrailer] = useState("");
    

    const navigate=useNavigate();
  return (
    <div>
          <div className='add-movie-form'>
          
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setname(event.target.value)} />
                <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setposter(event.target.value)} />
                <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setrating(event.target.value)} />
                <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setsummary(event.target.value)} />
                <TextField id="outlined-basic" label="trailer" variant="outlined" onChange={(event) => settrailer(event.target.value)} />
                <Button variant="contained" onClick={() => {
                    const newmovie = {
                        name: name,
                        poster: poster,
                        rating: rating,
                        summary: summary,
                        trailer: trailer,
                    };
                    fetch("https://63899fdf4eccb986e895a997.mockapi.io/movies", {
                      method: "POST",
                      body: JSON.stringify(newmovie),
                      headers: { "content-type": "application/json" },
                   
                    }).then(()=>navigate("/movies"))
                    
                    //steps
                    //method-post
                    //body-data and json
                    //header-json
                    // setmovielist([...movielist, newmovie]);

                }}>add movie</Button>
            </div>
    </div>
  )
}

export default Addmovie;