import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies);
  return (
    <div className='px-9 py-4'>
       <h1 className='text-xl font bold pb-2 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
         
      
        <div className='flex space-x-1'>
            {movies?.map(movie=>( <MovieCard  key={movie.id} poster_path={movie.poster_path}/>))}
       
        </div>
       </div>
    </div>
  )
}

export default MovieList