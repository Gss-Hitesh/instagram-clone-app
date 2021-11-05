import faker from "faker";
import Story from "./Story";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

function stories() {
  const {data:session} = useSession() ;
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll 
    scrollbar-thin scrollbar-thumb-black ">
      {session  && (
        <Story
        img={session.user.image}
        username={session.user.username}
        />
      )}
      {/*  list of stories */}
      {suggestions.map((profile) => (
        <Story
          keys={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default stories;
