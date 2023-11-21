import axios from "../apis/jsonPH";
import { useEffect } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";

const Posts = () => {
  const [response, loading, error, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "POST",
      url: "/posts",
    });
  };

  useEffect (()=>{
    getData();
  },[])

  return <div></div>;
};

export default Posts;
