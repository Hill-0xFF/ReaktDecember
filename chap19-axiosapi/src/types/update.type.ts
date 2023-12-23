import { Dispatch, SetStateAction } from 'react';

import { TPosts } from './posts.type';

export type UpdatePostProps = {
  posts: TPosts[];
  updateTitle: string;
  setUpdateTitle: Dispatch<SetStateAction<string>>;
  updateBody: string;
  setUpdateBody: Dispatch<SetStateAction<string>>;
  handleUpdatePost: (id: number) => void;
};
