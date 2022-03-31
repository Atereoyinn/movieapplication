import React from 'react'
import './App.css';

const MovieList = ({prop}) => {
    const Now= prop.map((movie,index)=>(<div><img className='main-image' src={movie.Poster} alt="movie"/></div>))
  return (
    <main className='main'>
    {Now}
    </main>
  )
}

export default MovieList