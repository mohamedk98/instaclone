import React from "react";
import Image from 'next/image'
function Story(props) {
  return (
    <React.Fragment>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={props.img} 
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{props.username}</p>
    </React.Fragment>
  );
}

export default Story;
