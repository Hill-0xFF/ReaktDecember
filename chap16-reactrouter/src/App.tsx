// import { useEffect, useState } from 'react';
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

export default function App() {
  return (
    <>
      <Header title="Blog v.0.0.1" />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/post">
          <NewPost />
        </Route>

        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route exact path="/about" component={About} />
        <Route path="*" component={MissingPage} />
      </Switch>
      <Footer />
    </>
  );
}
