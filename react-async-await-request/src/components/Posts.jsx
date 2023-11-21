import axios from "../apis/jsonPH";
import { useEffect } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";

const Posts = () => {
  const [posts, loading, error, axiosFetch] = useAxiosFunction();

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

  return (
    <article>
      <h2>Posts</h2>

      <div className="row">
        <button onClick={() => handleSubmit()}></button>
      </div>

      {loading && <p> loading...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && posts?.length && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              {post.id}. {post.title}
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && !posts?.length && <p>No Post To Display 😔</p>}
    </article>
  );
};

export default Posts;
