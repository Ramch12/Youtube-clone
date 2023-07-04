import React from 'react'

const VideoDetails = ({video}) => {

  
  if(!video)
  {
    return <div className='border-solid border-2 border-black h-52'>
      Loading...
  </div>
  }


  return (
    <div className='border-solid border-2 border-black h-auto'>
      <iframe className='w-full h-52 md:h-[500px]' src={`https://www.youtube.com/embed/${video.id.videoId}`} title="YouTube video" allowFullScreen></iframe>
      <h1 className='text-xl font-bold font-serif text-start'>{video.snippet.channelTitle}</h1>
      <p className='font-semibold font-serif'>{video.snippet.description}</p>
    </div>
  )
}

export default VideoDetails;