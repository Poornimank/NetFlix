import React from 'react'
import Header from './Header'

import  useNowPlayingMovies  from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();

 
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>



      {/*  Main Container
             -video playing background
             -title of movie
          second container
             -movieslist*n
             -card*n
      */}

      
      </div>
  )
}

export default Browse