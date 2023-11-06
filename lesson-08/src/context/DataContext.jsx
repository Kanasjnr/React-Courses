import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import UseWindowSize from "../hooks/useWindowSize"
import useAxiosFetch from "../hooks/useAxiosFetch"
import api from "../api/posts";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {


    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const { width } = UseWindowSize()


    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')
    useEffect(() => {
        setPosts(data)
    }, [data])

    useEffect(() => {
        const filterResult = posts.filter(
            (post) =>
                post.body.toLocaleLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResult(filterResult.reverse());
    }, [posts, search]);

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postLists = posts.filter((post) => post.id !== id);
            setPosts(postLists);
            navigate("/");
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

  

    const handleEdit = async (id) => {
        const date = format(new Date(), "MMMM dd, yyyy pp");
        const updatedPost = { id, title: editTitle, date, body: editBody };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);
            setPosts(
                posts.map((post) => (post.id === id ? { ...response.data } : post))
            );
            setEditTitle("");
            setEditBody("");
            navigate("/");
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

    return (
        <DataContext.Provider value={{
            width, search, setSearch, //header and nav components
            posts, fetchError, isLoading, searchResult, //home
            
            handleDelete,// post page
            handleEdit,editTitle,editBody,setEditBody,setEditTitle //Edit Post


        }}>
            {children}
        </DataContext.Provider>
    )
}




export default DataContext