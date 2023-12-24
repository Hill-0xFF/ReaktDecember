import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Data from '../context/dataContext';

export default function UpdatePost() {
  const {
    posts,
    updateTitle,
    setUpdateTitle,
    updateBody,
    setUpdateBody,
    handleUpdatePost,
  } = useContext(Data.DataContext);
  const { id } = useParams<{ id: string }>();
  const post = posts?.find((post) => post?.id.toString() === id);

  useEffect(
    function () {
      if (post) {
        setUpdateTitle(post.title);
        setUpdateBody(post.body);
      }
    },
    [post, setUpdateTitle, setUpdateBody]
  );
  return (
    <main>
      {updateTitle && (
        <>
          <h2>Update Post:</h2>
          <form
            action=""
            className="newPostForm"
            onSubmit={(evt) => evt.preventDefault()}
          >
            <label htmlFor="updateTitle">Update Title:</label>
            <input
              type="text"
              name="updateTitle"
              id="updateTitle"
              value={updateTitle}
              onChange={(evt) => setUpdateTitle(evt.target.value)}
              required
            />

            <label htmlFor="updateBody">Update Post:</label>
            <textarea
              name="updatePost"
              id="updatePost"
              cols={30}
              rows={20}
              value={updateBody}
              onChange={(evt) => setUpdateBody(evt.target.value)}
            />
            <div>
              <button onClick={() => handleUpdatePost(parseInt(id, 10))}>
                Update
              </button>
            </div>
          </form>
        </>
      )}
      {!updateTitle && (
        <>
          <h2>Post Not Found!</h2>
          <p>
            <Link to={`/post/${id}`}>Go back</Link>
          </p>
        </>
      )}
    </main>
  );
}
