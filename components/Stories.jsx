import faker from "faker";
import Story from "./Story";
import { useEffect, useState } from "react";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // faker getting fake data
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div>
      {suggestions.map((profile) => {
        return (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
};

export default Stories;
