import axios from "../apis/jsonPH";
import { useEffect } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction"


const Posts = () => {
    const [response, loading, error, axiosFetch] = useAxiosFunction()
  return (
    <div>
      
    </div>
  )
}

export default Posts
