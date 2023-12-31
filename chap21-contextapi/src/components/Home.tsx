import usePosts from '@/hooks/usePosts';

import Feed from './Feed';

export default function Home() {
  const { loading, fetchError, searchResults } = usePosts();
  return (
    <main className="home">
      {loading && <p className="status">Loading...</p>}
      {fetchError && <p className="status">{fetchError}</p>}

      {!loading && !fetchError && searchResults?.length ? (
        <Feed />
      ) : (
        <p style={{ marginTop: '2rem' }}>No posts to display!!!</p>
      )}
    </main>
  );
}
