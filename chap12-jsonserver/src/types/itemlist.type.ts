import { TItems } from './items.type';

export type ItemListProps = {
  items: TItems[];
  handleChangeCheckbox: (id: number) => void;
  handleDelete: (id: number) => void;
};
