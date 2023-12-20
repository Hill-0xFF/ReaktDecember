import { TItems } from './items.type';

export type ItemProps = {
  item: TItems;
  handleChangeCheckbox: (id: number) => void;
  handleDelete: (id: number) => void;
  key: number;
};
