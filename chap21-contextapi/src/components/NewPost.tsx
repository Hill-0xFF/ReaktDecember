import { useContext } from 'react';

import Data from '../context/dataContext';

export default function NewPost() {
  const { postTitle, setPostTitle, postBody, setPostBody, handleSubmitPost } =
    useContext(Data.DataContext);
  return (
    <main>
      <h2>New Post</h2>
      <form
        action=""
        className="newPostForm"
        onSubmit={(evt) => evt.preventDefault()}
      >
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={postTitle}
          onChange={(evt) => setPostTitle(evt.target.value)}
          required
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          name="postBody"
          id="postBody"
          cols={30}
          rows={20}
          required
          value={postBody}
          onChange={(evt) => setPostBody(evt.target.value)}
        ></textarea>
        <div>
          <button onClick={handleSubmitPost}>Post</button>
        </div>
      </form>
    </main>
  );
}
