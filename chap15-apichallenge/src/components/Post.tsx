import { TPost } from '@/types/posts.type';

type PostProps = {
  posts: TPost[];
};

export default function Post({ posts }: PostProps) {
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
