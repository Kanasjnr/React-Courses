import { createStore, action, thunk, computed } from "easy-peasy";
import api from "./api/posts";
import posts from "./api/posts";

export default createStore(
    posts: [],
    setPosts: action()

);
