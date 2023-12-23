import { Dispatch, SetStateAction } from 'react';

export type NavbarProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
