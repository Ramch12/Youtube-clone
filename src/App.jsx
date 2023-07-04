import React from "react";
import { VideoDetails, VideoList, Search } from "./components";
import youtube from "./YT/youtube";

const App = () => {

  const [video,setVideo]=React.useState('');
  const [video_list,setVideo_list]=React.useState(null);

  async function Search_submit(data) {
    try {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 10,
          key: "AIzaSyBHDf0gs6XK7903ALOa31y_nr9J5qi1jA0",
          q:data,
        },
      });
       console.log(response);
       setVideo(response.data.items[0]);
       setVideo_list(response.data.items);
    } catch (err) {
      console.log(err);
    }
  }



function handleVideoSelection(data)
{
  setVideo(data);
};

  return (
    <div className="border-solid border-2 border-black h-auto mt-2 mx-2">
      <Search Search_submit={Search_submit}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 m-2">
      <VideoDetails video={video} />
      <VideoList video_list={video_list} handleVideoSelection={handleVideoSelection}/>
      </div>
    </div>
  );
};

export default App;
