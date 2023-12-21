import { TPost } from '@/types/posts.type';

import Post from './Post';

type PostsProps = {
  posts: TPost[];
};

export default function Posts({ posts }: PostsProps) {
  return (
    <section>
      {posts?.[0] && posts?.[0]?.id ? (
        <Post posts={posts} />
      ) : (
        <p
          style={{
            backgroundColor: 'papayawhip',
            color: 'black',
            padding: '.75rem',
            borderRadius: '.5rem',
          }}
        >
          No posts on the list!
        </p>
      )}
    </section>
  );
}
