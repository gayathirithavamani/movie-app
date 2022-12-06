import React, { useEffect, useState }  from 'react';


import { Movie } from './Movie';

// container and presentation
function Movielist(){
    const [movielist, setmovielist] = useState([]);

    const getMovie =() =>{
        fetch("https://63899fdf4eccb986e895a997.mockapi.io/movies")
          .then((data) => data.json())
          .then((movies) => setmovielist(movies)); 
    };
    useEffect(() =>getMovie(), []);
    //     fetch("https://63899fdf4eccb986e895a997.mockapi.io/movies")
    //       .then((data) => data.json())
    //       .then((movies) => setmovielist(movies));
    //   }, []);
      const deleteMovie=(id)=>{
        fetch(`https://63899fdf4eccb986e895a997.mockapi.io/movies/${id}`, {
            method: "DELETE",
        }) 
        .then((data) => getMovie())
        // console.log("deleting movie", id);
      };
    return (
        <div>
            
            <div className='movie-list'>

                {movielist.map((mv) => (
                    <div key={mv.id}>
                        <Movie movie={mv} id={mv.id}
                        // renderprops
                        deletebutton={<button onClick={()=>deleteMovie(mv.id)} >Delete me</button>} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Movielist;