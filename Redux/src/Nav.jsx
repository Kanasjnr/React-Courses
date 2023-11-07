import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const Nav = () => {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);

  const setSearch = useStoreActions((actions) => actions.setSearch);
  const setSearchResult = useStoreActions((actions) => actions.setSearchResult);

  useEffect(() => {
    const filterResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filterResults.reverse());
  }, [posts, search]);

  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Post</label>

        <input
          type="text"
          id="search"
          placeholder="Search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
