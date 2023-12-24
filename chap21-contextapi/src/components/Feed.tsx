import { TPosts } from '@/types/posts.type';

import usePosts from '@/hooks/usePosts';

import Post from './Post';

export default function Feed() {
  const { searchResults } = usePosts();
  return (
    <>
      {searchResults?.[0] && searchResults?.length ? (
        searchResults.map((post: TPosts) => <Post key={post.id} post={post} />)
      ) : (
        <p>Nothing to feed!</p>
      )}
    </>
  );
}
