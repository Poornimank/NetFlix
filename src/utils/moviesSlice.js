import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        upComingMovies:null,
        popularMovies:null,
    },
    reducers:
    {
       addNowPlayingMovies:(state,action)=>
        {
            state.nowPlayingMovies=action.payload;
        },
       addTrailerVideo:(state,action)=>
        {
            state.trailerVideo=action.payload;
        },
        addUpComingMovies:(state,action)=>
            {
                state.upComingMovies=action.payload;
            },
        addPopularMovies:(state,action)=>
            {
                state.popularMovies=action.payload;
            }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addUpComingMovies,addPopularMovies}=moviesSlice.actions;
export default moviesSlice.reducer;