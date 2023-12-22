import { TItems } from './items.type';

export type ContentProps = {
  items: TItems[];
  handleChangeCheckbox: (id: number) => void;
  handleDelete: (id: number) => void;
};
