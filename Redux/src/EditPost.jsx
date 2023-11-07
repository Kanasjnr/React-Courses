import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useStoreActions, useStoreState } from "easy-peasy";
import { format } from "date-fns";

const EditPost = () => {
  const navigate = useNavigate();
  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);

  const setEditBody = useStoreActions((actions) => actions.setEditBody);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const editPost = useStoreActions((actions) => actions.editPost);

  const getPostById = useStoreState((state) => state.getPostById);

  const { id } = useParams();
  const post = getPostById(id);

  const handleEdit = async (id) => {
    const date = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, date, body: editBody };

    navigate("/");
    editPost(updatedPost);
  };

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTittle"> Edit Title </label>
            <input
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody"> Edit Body </label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            ></textarea>
            <button type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2> Post Not Found!</h2>
          <p>Well, That's disappointing</p>

          <p>
            <Link to="/"> Visit Our Website</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
