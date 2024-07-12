import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-1/3 h-screen absolute pt-[10%]  px-14 text-white bg-gradient-to-r from-black'>
    <h1 className='text-3xl font-bold'>{title}</h1>
    <p className='pt-4'>{overview}</p>
    <div className='flex space-x-3 my-4'>
     <button className='bg-white w-28 text-black px-4 py-2 rounded-md hover:bg-opacity-75'><PlayArrowIcon/>Play</button>
     <button className='bg-gray-700 w-32 text-white px-4 py-2 bg-opacity-90 rounded-md'>ℹ More Info</button> 
    </div>
    </div>
  )
}

export default VideoTitle