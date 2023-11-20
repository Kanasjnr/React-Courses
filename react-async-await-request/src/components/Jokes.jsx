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

  return <div></div>;
};

export default Jokes;
