import { Link, useParams } from 'react-router-dom';

import { PostPageProps } from '@/types/postpage.type';

export default function PostPage({
  posts,
  handleDeletePostPage,
  handleUpdatePage,
}: PostPageProps) {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="postpage">
      <article className="post">
        {post?.id && (
          <>
            <h2>{post.title}</h2>
            <p className="postDdate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <div>
              <button
                className="post__button"
                onClick={() => handleDeletePostPage(post.id)}
              >
                Delete Post
              </button>

              <button
                className="post__button"
                onClick={() => handleUpdatePage(post.id)}
              >
                Update Post
              </button>
              <Link to={`/post/update/${post.id}`}>
                <button className="update__button">Update Link Post</button>
              </Link>
            </div>
          </>
        )}
        {!post && (
          <>
            <h2>Post not found!</h2>
            <p>Well, thats unexpected!</p>
            <p>
              <Link to="/">Click here and go back to homepage =D</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}
