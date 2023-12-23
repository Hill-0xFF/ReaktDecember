import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
// import './css/styles2.css';

import { AxiosError } from 'axios';
import { format } from 'date-fns';

import api from './api/axios-posts';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MissingPage from './components/MissingPage';
import Navbar from './components/Navbar';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import UpdatePost from './components/UpdatePost';
import { TPosts } from './types/posts.type';
import { TResults } from './types/results.type';

export default function App() {
  const history = useHistory();
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<TResults[]>([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateBody, setUpdateBody] = useState('');
  const [posts, setPosts] = useState<TPosts[]>([]);

  useEffect(function () {
    const fetchPosts = async function () {
      try {
        const response = await api.get('/posts', {
          timeout: 3000,
        });
        // if (!response.ok) throw Error (``) doesnt need this..Axios gets any errors
        setPosts(response?.data);
        if (response && response?.data) {
          setPosts(response.data);
        }
      } catch (err) {
        if (err instanceof AxiosError && err?.response) {
          // If response is not a 2xx
          // These errors comes from the Backend API
          console.error(err.response.data);
          console.error(err.response.status);
          console.error(err.response.headers);
        } else {
          // Not a Axios error, so no response at all
          if (err instanceof Error)
            console.error(`\x1b[31mError during fetching: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  useEffect(
    function () {
      /*
       Fixes 'posts?.filter is not a function' error when 'npm run dev' executes without 'npx json-server' is not running
      */
      try {
        if (posts && posts?.length) {
          const filteredPosts = posts?.filter(
            (post) =>
              post.body.toLowerCase().includes(search.toLowerCase()) ||
              post.title.toLowerCase().includes(search.toLowerCase())
          );
          setSearchResults(filteredPosts.reverse());
        }
      } catch (err) {
        if (err instanceof Error)
          console.error(`\x1b[31mError fetching posts: ${err.message}`);
      }
    },
    [posts, search]
  );

  async function handleDeletePostPage(id: number) {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts?.filter((post) => post.id !== id);
      setPosts(postList);
      history.push('/');
    } catch (err) {
      if (err instanceof Error)
        console.error(`\x1b[31mError during delete: ${err.message}`);
    }
  }

  function handleUpdatePage(id: number) {
    history.push(`/post/update/${id}`);
  }

  async function handleUpdatePost(id: number) {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: updateTitle, datetime, body: updateBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setUpdateTitle('');
      setUpdateBody('');
      history.push('/');
    } catch (err) {
      if (err instanceof Error)
        console.error(`\x1b[31mError during update: ${err.message}`);
    }
  }

  async function handleSubmitPost() {
    const id = posts?.length ? posts[posts.length - 1].id + 1 : 1;
    const newPostTitle = postTitle;
    const newPostBody = postBody;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const postObj = {
      id,
      title: newPostTitle,
      datetime,
      body: newPostBody,
    };
    try {
      const response = await api.post('/posts', postObj);
      const postList = [...posts, response.data];
      setPosts(postList);
      setPostBody('');
      setPostTitle('');
      history.push('/');
    } catch (err) {
      if (err instanceof Error)
        console.error(`\x1b[31Error during post: ${err.message}`);
    }
  }

  return (
    <>
      <Header title="Blog v.0.0.1" />
      <Navbar search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          {/* <Home posts={posts} /> */}
          <Home posts={searchResults} />
        </Route>

        <Route exact path="/post">
          <NewPost
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            handleSubmitPost={handleSubmitPost}
          />
        </Route>

        <Route exact path="/post/:id">
          <PostPage
            posts={posts}
            handleDeletePostPage={handleDeletePostPage}
            handleUpdatePage={handleUpdatePage}
          />
        </Route>

        <Route exact path="/post/update/:id">
          <UpdatePost
            posts={posts}
            updateTitle={updateTitle}
            setUpdateTitle={setUpdateTitle}
            updateBody={updateBody}
            setUpdateBody={setUpdateBody}
            handleUpdatePost={handleUpdatePost}
          />
        </Route>

        <Route exact path="/about" component={About} />
        <Route path="*" component={MissingPage} />
      </Switch>
      <Footer />
    </>
  );
}
