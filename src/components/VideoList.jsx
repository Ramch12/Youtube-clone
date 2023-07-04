import React from 'react';
import Video_item from './Video_item';

const VideoList = ({video_list,handleVideoSelection}) => {
  if(!video_list)
  {
    return (
      <div className='border-solid border-2 border-black'>
        <h1>Loading...</h1>
      </div>
    )
  };


  return (
    <div className='border-solid border-2 border-black'>{
      video_list.map((item,i)=>
      <Video_item key={i} item={item} handleVideoSelection={handleVideoSelection}/>
     )
    }</div>
  )
}

export default VideoList;