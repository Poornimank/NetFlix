import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
  ////Fetch movies from TMDB API and update the store
    const dispatch=useDispatch();

    const getNowPlayigMovies= async()=>
      {
        const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
        const json=await data.json();
        dispatch(addNowPlayingMovies(json.results));
      }
    
      useEffect(()=>
        {
          getNowPlayigMovies();
          
        },[])

}

export default useNowPlayingMovies