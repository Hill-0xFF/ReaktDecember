import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { useHistory } from 'react-router-dom';

import { TPosts } from '@/types/posts.type';
import { TResults } from '@/types/results.type';

import useAxios from '@/hooks/useAxios';
import useWindowSize from '@/hooks/useWindowSize';

import { AxiosError } from 'axios';
import { format } from 'date-fns';

import api from '../api/axios-posts';

export interface IContext {
  posts: TPosts[];
  setPosts: Dispatch<React.SetStateAction<TPosts[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchResults: TResults[];
  setSearchResults: Dispatch<React.SetStateAction<TResults[]>>;
  postTitle: string;
  setPostTitle: Dispatch<SetStateAction<string>>;
  postBody: string;
  setPostBody: Dispatch<SetStateAction<string>>;
  updateTitle: string;
  setUpdateTitle: Dispatch<SetStateAction<string>>;
  updateBody: string;
  setUpdateBody: Dispatch<SetStateAction<string>>;
  width: number;
  fetchError: string | null;
  loading: boolean;
  handleUpdatePost: (id: number) => Promise<void>;
  handleDeletePost: (id: number) => Promise<void>;
  handleSubmitPost: () => Promise<void>;
}

interface DataProviderProps {
  children: React.ReactNode;
}
// const context: NonNullable<IContext> = {};

const DataContext = createContext<IContext | NonNullable<IContext>>(
  {} as IContext
);

const DataProvider = ({ children }: DataProviderProps) => {
  const [posts, setPosts] = useState<TPosts[]>([]);
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<TResults[]>([]);
  const [postTitle, setPostTitle] = useState<string>('');
  const [postBody, setPostBody] = useState<string>('');
  const [updateTitle, setUpdateTitle] = useState<string>('');
  const [updateBody, setUpdateBody] = useState<string>('');
  const history = useHistory();
  const { width } = useWindowSize();
  const { data, fetchError, loading } = useAxios('http://localhost:3004/posts');

  useEffect(
    function () {
      try {
        setPosts(data);
      } catch (err) {
        if (err instanceof Error)
          console.error(`\x1b[31mError fetching posts app: ${err.message}`);
      }
    },
    [data]
  );

  useEffect(
    function () {
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
          console.error(`\x1b[31mError searching posts: ${err.message}`);
      }
    },
    [posts, search]
  );

  async function handleUpdatePost(id: number) {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: updateTitle, datetime, body: updateBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts?.map((post) => (post.id === id ? { ...response.data } : post))
      );

      setUpdateTitle('');
      setUpdateBody('');
      history.push('/');
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.error(`\x1b[31mError during update: ${err.response?.status}`);
        console.error(`\x1b[31mError during update: ${err.response?.data}`);
        console.error(`\x1b[31mError during update: ${err.response?.headers}`);
      }
      if (err instanceof Error)
        console.error(`\x1b[31mError during update: ${err.message}`);
    }
  }

  async function handleDeletePost(id: number) {
    try {
      await api.delete(`/posts/${id}`);
      const remainingPosts = posts?.filter((post) => post.id !== id);
      setPosts(remainingPosts);
      history.push('/');
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.error(`\x1b[31mError during delete: ${err.response?.status}`);
        console.error(`\x1b[31mError during delete: ${err.response?.data}`);
        console.error(`\x1b[31mError during delete: ${err.response?.headers}`);
      }
      if (err instanceof Error)
        console.error(`\x1b[31mError during delete: ${err.message}`);
    }
  }

  async function handleSubmitPost() {
    try {
      const id: number = posts?.length ? posts[posts.length - 1].id + 1 : 1;
      const datetime: string = format(new Date(), 'MMMM dd, yyyy pp');
      const title: string = postTitle;
      const body: string = postBody;
      const postObj = { id, title, datetime, body };

      const response = await api.post('/posts', postObj);
      const addedPost = [...posts, response.data];
      setPosts(addedPost);

      setPostTitle('');
      setPostBody('');
      history.push('/');
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.error(`\x1b[31mError during submit: ${err.response?.status}`);
        console.error(`\x1b[31mError during submit: ${err.response?.data}`);
        console.error(`\x1b[31mError during submit: ${err.response?.headers}`);
      }
      if (err instanceof Error)
        console.error(`\x1b[31mError during submit: ${err.message}`);
    }
  }

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        search,
        setSearch,
        searchResults,
        setSearchResults,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        updateTitle,
        setUpdateTitle,
        updateBody,
        setUpdateBody,
        width,
        fetchError,
        loading,
        handleUpdatePost,
        handleDeletePost,
        handleSubmitPost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default { DataContext, DataProvider };
