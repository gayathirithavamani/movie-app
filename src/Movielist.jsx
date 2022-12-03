import React  from 'react';


import { Movie } from './Movie';


function Movielist({movielist}){

    
    return (
        <div>
            
            <div className='movie-list'>

                {movielist.map((mv, index) => (
                    <div key={index}>
                        <Movie movie={mv} id={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Movielist;