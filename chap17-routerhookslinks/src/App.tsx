import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
// import './css/styles2.css';

import { format } from 'date-fns';

import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MissingPage from './components/MissingPage';
import Navbar from './components/Navbar';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import { TPosts } from './types/posts.type';
import { TResults } from './types/results.type';

export default function App() {
  const history = useHistory();
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<TResults[]>([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [posts, setPosts] = useState<TPosts[]>([
    {
      id: 1,
      title: 'My First Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
    {
      id: 2,
      title: 'My 2nd Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
    {
      id: 3,
      title: 'My 3rd Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
    {
      id: 4,
      title: 'My Fourth Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
  ]);

  useEffect(
    function () {
      const filteredPosts = posts?.filter(
        (post) =>
          post.body.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredPosts.reverse());
    },
    [posts, search]
  );

  function handleDeletePostPage(id: number) {
    const postList = posts?.filter((post) => post.id !== id);
    setPosts(postList);
    history.push('/');
  }

  function handleSubmitPost() {
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
    const postList = [...posts, postObj];
    setPosts(postList);
    setPostBody('');
    setPostTitle('');
    history.push('/');
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

        <Route path="/post/:id">
          <PostPage posts={posts} handleDeletePostPage={handleDeletePostPage} />
        </Route>
        <Route exact path="/about" component={About} />
        <Route path="*" component={MissingPage} />
      </Switch>
      <Footer />
    </>
  );
}
