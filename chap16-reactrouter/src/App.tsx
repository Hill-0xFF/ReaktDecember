import { useState, useEffect } from 'react';

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
import Navbar from './components/Navbar';

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
    const fetchUsersApi = async function () {
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

        setUsers(data);
        setFetchError(null);
        setErrorMessage('');
        setLoading(false);
        setPosts([]);
        setComments([]);
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
        await fetchUsersApi();
      })();
    }, 2000);
  }, []);

  const fetchUsers = async function (evt) {
    console.log(evt);
    try {
      const response = await fetch(APIUSERS, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw Error(`Did not received expected data!`);

      const data = await response.json();
      setUsers(data);

      setFetchError(null);
      setErrorMessage('');

      setPosts([]);
      setComments([]);
    } catch (err) {
      if (err instanceof Error) setFetchError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async function () {
    try {
      const response = await fetch(APIPOSTS, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Mime-Type': 'application/json',
        },
      });

      if (!response.ok) throw Error(`Did not received expected data!`);
      const data = await response.json();

      setPosts(data);
      setFetchError(null);
      setErrorMessage('');
      setLoading(false);

      setUsers([]);
      setComments([]);
    } catch (err) {
      if (err instanceof Error) setFetchError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async function () {
    try {
      const response = await fetch(APICOMMENTS, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw Error(`Did not received expected data!`);
      const data = await response.json();

      setComments(data);
      setFetchError(null);
      setLoading(false);

      setPosts([]);
      setUsers([]);
    } catch (err) {
      if (err instanceof Error) setFetchError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // const saveLocalStorage = (item: SetStateAction<TItems[]>) => {
  //   setUsers(item);
  // };

  return (
    <>
      <Header title="JSONPLACEHOLDER CHALLENGE v.0.0.1" />
      <Navbar
        fetchPosts={fetchPosts}
        fetchComments={fetchComments}
        fetchUsers={fetchUsers}
      />
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
      <Footer />
    </>
  );
}
