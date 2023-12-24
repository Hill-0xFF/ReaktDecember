import { Dispatch, SetStateAction } from 'react';

import { TPosts } from './posts.type';
import { TResults } from './results.type';

export type TContext = {
  posts: TPosts[];
  setPosts: Dispatch<React.SetStateAction<TPosts[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchResults: TResults[];
  setSearchresults: Dispatch<React.SetStateAction<TResults[]>>;
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
  // handleUpdatePost,
  // handleDeletePost,
  // handleSubmitPost,
};
