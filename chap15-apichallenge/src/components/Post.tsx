import { TPost } from '@/types/posts.type';

type PostProps = {
  posts: TPost[];
};

export default function Post({ posts }: PostProps) {
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id} className="posts">
          <p>Title: {post.title}</p>
          <p>Content: {post.body}</p>
        </li>
      ))}
    </ul>
  );
}
