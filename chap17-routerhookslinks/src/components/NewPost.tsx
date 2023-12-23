import { NewPostProps } from '@/types/newpost.type';

export default function NewPost({
  handleSubmitPost,
  postBody,
  postTitle,
  setPostBody,
  setPostTitle,
}: NewPostProps) {
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
          name=""
          id="postBody"
          cols={30}
          rows={20}
          required
          value={postBody}
          onChange={(evt) => setPostBody(evt.target.value)}
        ></textarea>

        <button onClick={handleSubmitPost}>Post</button>
      </form>
    </main>
  );
}
