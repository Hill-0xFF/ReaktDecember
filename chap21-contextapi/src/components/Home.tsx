import { HomeProps } from '@/types/home.type';

import Feed from './Feed';

export default function Home({ posts, fetchError, loading }: HomeProps) {
  return (
    <main className="home">
      {loading && <p className="status">Loading...</p>}
      {fetchError && <p className="status">{fetchError}</p>}

      {!loading && !fetchError && posts?.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: '2rem' }}>No posts to display!!!</p>
      )}
    </main>
  );
}
