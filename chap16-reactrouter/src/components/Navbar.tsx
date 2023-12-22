type NavBarProps = {
  fetchPosts: (evt: EventTarget) => Promise<void>;
  fetchComments: () => Promise<void>;
  fetchUsers: () => Promise<void>;
};
export default function Navbar({
  fetchPosts,
  fetchComments,
  fetchUsers,
}: NavBarProps) {
  return (
    <nav className="navbar__buttons">
      <button className="button" onClick={fetchUsers}>
        Users
      </button>
      <button className="button" onClick={(evt) => fetchPosts(evt)}>
        Posts
      </button>
      <button className="button" onClick={fetchComments}>
        Comments
      </button>
    </nav>
  );
}
