import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

function Addmovie({movielist, setmovielist}) {
    const [name, setname] = useState("");
    const [poster, setposter] = useState("");
    const [rating, setrating] = useState("");
    const [summary, setsummary] = useState("");
  return (
    <div>
          <div className='add-movie-form'>
          
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setname(event.target.value)} />
                <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setposter(event.target.value)} />
                <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setrating(event.target.value)} />
                <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setsummary(event.target.value)} />
                <Button variant="contained" onClick={() => {
                    const newmovie = {
                        name: name,
                        poster: poster,
                        rating: rating,
                        summary: summary,
                    };
                    setmovielist([...movielist, newmovie]);
                }}>add movie</Button>
            </div>
    </div>
  )
}

export default Addmovie;