import axios from "../apis/jsonPH";
import { useEffect } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";

const Posts = () => {
  const [response, loading, error, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "GET",
      url: "/posts",
    });
  };

  useEffect(() => {
    //TO GET THE DATA FROM THE ENDPOINT
    getData();
  }, []);

  const handleSubmit = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "POST",
      url: "/posts",
      requestConfig: {
        data: {
          userId: 10,

          title: "Supreme",
          body: "Boda Oni Chicken...",
        },
      },
    });
  };

  return(
<article>
    
</article>
  ) 
};

export default Posts;
