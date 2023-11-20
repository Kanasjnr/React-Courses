import React from "react";
import useAxios from "../hooks/useAxios";
import axios from "../apis/dadJokes";

const Jokes = () => {
  const [joke, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {
      headers: {
        "content-Language": "en-US",
      },
    },
  });

  return(
    <article>
        <h2>Random Dad Jokes.</h2>

        {loading && <p> loading...</p>}

        {!loading && error && <p className="errMsg">{error}</p>}

        {!loading && !error && joke && <p>{joke ?.joke}</p>}

        {!loading && !error && !joke && <p>No Joke To Display! 😒😒</p>}
    </article>
  );
};

export default Jokes;
