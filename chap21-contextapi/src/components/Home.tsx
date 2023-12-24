import { useContext } from 'react';

import Data from '../context/dataContext';
import Feed from './Feed';

export default function Home() {
  const { loading, fetchError, searchResults } = useContext(Data.DataContext);
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
