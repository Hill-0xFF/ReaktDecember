import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './css/styles2.css';

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
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<TResults[]>([]);
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

  function handleDeletePostPage(id: number) {
    const postList = posts?.filter((post) => post.id !== id);
    setPosts(postList);
  }

  return (
    <>
      <Header title="Blog v.0.0.1" />
      <Navbar search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>

        <Route exact path="/post">
          <NewPost />
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
