import React from "react";

const Video_item = ({ item, handleVideoSelection }) => {
  
  return (
    <div
      className="flex justify-center mb-2 w-auto cursor-pointer"
      onClick={()=>{handleVideoSelection(item)}}>
      <img
        src={item.snippet.thumbnails.medium.url}
        alt="thumbnails"
        className="h-28 w-36"
      />
      <p className="text-sm pl-2">{item.snippet.title}</p>
    </div>
  );
};

export default Video_item;
