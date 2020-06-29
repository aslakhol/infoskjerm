import React, { useState, useEffect } from "react";

const APIUrl = "https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1";

const Reddit = () => {
  const [joke, setJoke] = useState({});

  const getJoke = () => {
    fetch(APIUrl)
      .then((response) => response.json())
      .then((json) => setJoke(json.data.children[0].data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getJoke();
  }, []);

  return joke ? (
    <div className="reddit">
      <p>{joke.title}</p>
      <p>{joke.selftext}</p>
    </div>
  ) : (
    <></>
  );
};

export default Reddit;
