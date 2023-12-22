import { SetStateAction } from 'react';

export type SearchProps = {
  setSearch: React.Dispatch<SetStateAction<string>>;
  search: string;
};
