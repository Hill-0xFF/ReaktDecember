import { FormEvent, useState, useEffect } from 'react';

import './css/styles2.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import { TUser } from './types/user.type';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';

import { TPost } from './types/posts.type';
import { TComment } from './types/comments.type';

export default function App() {
  const APIUSERS = import.meta.env.VITE_API_JSONUSERS;
  const APIPOSTS = import.meta.env.VITE_API_JSONPOSTS;
  const APICOMMENTS = import.meta.env.VITE_API_JSONCOMMENTS;

  const [users, setUsers] = useState<TUser[]>([]);
  const [posts, setPosts] = useState<TPost[]>([]);
  const [comments, setComments] = useState<TComment[]>([]);

  const [fetchError, setFetchError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async function () {
      try {
        const response = await fetch(APIUSERS, {
          method: 'GET',
          mode: 'cors', //DISABLE IT TO REMOVE THIS ERROR:
          // Response was blocked by CORB (Cross-Origin Read Blocking)
          // Cross-Origin Read Blocking (CORB) blocked a cross-origin response.
          cache: 'no-cache',
          headers: {
            'Content-Type': 'text/json',
            'Mime-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw Error('Did not received expected data!');
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setFetchError(null);
        setErrorMessage('');
        setLoading(false);
        console.log(`ErrorFetch: ${fetchError}`);
      } catch (err: unknown | TypeError) {
        // console.error(`\x1b[31mError during request: ${err}`);
        if (err instanceof Error) setFetchError(err.message);
        setErrorMessage(`Error fetching ${APIUSERS}`);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(function () {
      (async function () {
        await fetchUsers();
      })();
    }, 2000);
  }, []);

  // const saveLocalStorage = (item: SetStateAction<TItems[]>) => {
  //   setUsers(item);
  // };

  return (
    <>
      <Header title="JSONPLACEHOLDER CHALLENGE v.0.0.1" />
      <main>
        {loading && <Loading />}
        {fetchError && (
          <>
            <p style={{ color: 'white' }}>Error: Data not fetched!</p>
            <p style={{ color: 'white' }}>{errorMessage}</p>
          </>
        )}
        {!fetchError && !loading && <Users users={users} />}
        {!fetchError && !loading && <Posts posts={posts} />}
        {!fetchError && !loading && <Comments comments={comments} />}
      </main>
      <Footer length={users?.length} />
    </>
  );
}
