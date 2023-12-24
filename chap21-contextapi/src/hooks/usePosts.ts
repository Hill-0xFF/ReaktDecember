import { Dispatch, SetStateAction, useContext } from 'react';

import { TPosts } from '@/types/posts.type';
import { TResults } from '@/types/results.type';

import DataContext from '../context/dataContext';

export interface IContext {
  posts: TPosts[];
  setPosts: Dispatch<SetStateAction<TPosts[]>>;
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

const usePosts = () => {
  return useContext<IContext>(DataContext.DataContext);
};
export default usePosts;
