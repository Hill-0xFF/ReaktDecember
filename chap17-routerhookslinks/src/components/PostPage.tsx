import { Link, useParams } from 'react-router-dom';

import { PostPageProps } from '@/types/postpage.type';

export default function PostPage({
  posts,
  handleDeletePostPage,
}: PostPageProps) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  console.log(typeof id);
  console.log(post);
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
            </div>
          </>
        )}
        {!post && (
          <>
            <h2>Post not found!</h2>
            <p>Well, thats unexpected!</p>
            <p>
              <Link to="/">
                <p>Click here and go back to homepage =D</p>
              </Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}
