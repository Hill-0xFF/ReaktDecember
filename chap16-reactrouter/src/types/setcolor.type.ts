import { Dispatch, SetStateAction } from 'react';

export type SetColorProps = {
  setColor: Dispatch<SetStateAction<string>>;
  // setHexValue: Dispatch<SetStateAction<string>>;
  getColor: (colorName: string) => void;
  color: string;
};
