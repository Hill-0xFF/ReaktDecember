import { Link } from 'react-router-dom';

import { PostProps } from '@/types/post.type';

export default function Post({ post }: PostProps) {
  return (
    <>
      <article className="post">
        <Link to={`/post/${post.id}`}>
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
        </Link>
        <p className="postBody">
          {post.body?.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
        </p>
      </article>
    </>
  );
}
