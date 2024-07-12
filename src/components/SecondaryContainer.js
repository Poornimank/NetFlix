import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import MovieCard from './MovieCard'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
    movies.nowPlayingMovies &&(
    <div className='bg-black'>
      <div className='-mt-32 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/> 
      <MovieList title={"UpComing"} movies={movies.upComingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>

      </div>  
      
        {/* movie list-Popular
           -movie card*n
        movie list-Trending
        movie list-now playing
        movie list-horror */}
    </div>
    )
  )
}

export default SecondaryContainer