import React from 'react'

const IMG_API="https://image.tmdb.org/t/p/w1280";
export default function Movie({title,poster_path, overview,vote_average}) {
    const setVoteColor=()=>{
        if (vote_average>=8){
            return "green"
        } else if(vote_average>=6){
            return "orange"
        } else {
            return "red"
        }
    }
    return (
        <div className="movie">
           <img src={IMG_API+poster_path} alt={title}/>
           <div className="movie-info">
               <h3>{title}</h3>
               <span className={`vote-color ${setVoteColor()}`}>{vote_average.toFixed(1)}</span>
           </div>
           <div className="movie-over">
               <h3>Overview:</h3>
               <p>{overview}</p>
           </div>
        </div>
    )
}
