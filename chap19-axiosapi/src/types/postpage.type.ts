import { TPosts } from './posts.type';

export type PostPageProps = {
  posts: TPosts[];
  handleDeletePostPage: (id: number) => void;
};
