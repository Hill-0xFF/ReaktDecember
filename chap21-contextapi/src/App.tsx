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
import UpdatePost from './components/UpdatePost';
import Data from './context/dataContext';

export default function App() {
  return (
    <>
      <Data.DataProvider>
        <Header title="Blog v.0.0.1" />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/post" component={NewPost} />

          <Route exact path="/post/:id" component={PostPage} />

          <Route exact path="/post/update/:id" component={UpdatePost} />

          <Route exact path="/about" component={About} />
          <Route path="*" component={MissingPage} />
        </Switch>
        <Footer />
      </Data.DataProvider>
    </>
  );
}
