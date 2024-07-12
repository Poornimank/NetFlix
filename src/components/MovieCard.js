import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-28'>
        <img src={IMG_CDN+poster_path} alt="Movie_poster"/>
    </div>
  )
}

export default MovieCard