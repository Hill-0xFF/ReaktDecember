import { Dispatch, SetStateAction } from 'react';

export type NewPostProps = {
  postTitle: string;
  postBody: string;
  setPostBody: Dispatch<SetStateAction<string>>;
  setPostTitle: Dispatch<SetStateAction<string>>;
  handleSubmitPost: () => void;
};
