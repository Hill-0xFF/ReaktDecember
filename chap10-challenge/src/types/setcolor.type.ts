import { SetStateAction } from 'react';

export type SetColorProps = {
  setColor: React.Dispatch<SetStateAction<string>>;
  color: string;
};
