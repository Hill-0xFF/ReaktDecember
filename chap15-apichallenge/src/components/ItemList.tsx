import { ItemListProps } from '@/types/itemlist.type';

import Item from './Item';

export default function ItemList({
  handleChangeCheckbox,
  handleDelete,
  items,
}: ItemListProps) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          item={item}
          handleChangeCheckbox={handleChangeCheckbox}
          handleDelete={handleDelete}
          key={item.id}
        />
      ))}
    </ul>
  );
}
