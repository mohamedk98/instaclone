import faker from "faker";
import React,{ useEffect, useState } from "react";
import Story from "./Story";

function Stories(props) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const newSuggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(newSuggestions);
  }, []);


  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => 
        <Story
          key={profile.id}
          img='https://via.placeholder.com/150'
          username={profile.username}
        />

      )}
    </div>
  );
}

export default Stories;
