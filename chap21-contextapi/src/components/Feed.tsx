import { useContext } from 'react';

import { TPosts } from '@/types/posts.type';

import Data from '../context/dataContext';
import Post from './Post';

export default function Feed() {
  const { searchResults } = useContext(Data.DataContext);
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
