import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Data from '../context/dataContext';

export default function Navbar() {
  const { search } = useContext(Data.DataContext);
  const { setSearch } = useContext(Data.DataContext);
  return (
    <nav className="nav">
      <form
        action=""
        className="searchForm"
        onSubmit={(evt) => evt.preventDefault()}
      >
        <label htmlFor="search">Search Posts</label>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
