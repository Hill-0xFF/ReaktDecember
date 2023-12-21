import { FormEvent } from 'react';

export type AddItemProps = {
  newItem: string;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitButton: (evt: FormEvent<HTMLFormElement>) => void;
  addItem: (item: string) => void;
};
