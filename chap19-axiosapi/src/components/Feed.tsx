import { FeedProps } from '@/types/feed.type';

import Post from './Post';

export default function Feed({ posts }: FeedProps) {
  return (
    <>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
