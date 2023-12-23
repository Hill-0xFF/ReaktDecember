import { TPosts } from './posts.type';

export type HomeProps = {
  posts: TPosts[];
  fetchError: string | null;
  loading: boolean;
};
