import { HomeProps } from '@/types/home.type';

import Feed from './Feed';

export default function Home({ posts }: HomeProps) {
  return (
    <main className="home">
      {posts?.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: '2rem' }}>No posts to display!!!</p>
      )}
    </main>
  );
}
