import { ContentProps } from '@/types/content.type';

import ItemList from './ItemList';

export default function Content({
  items,
  handleChangeCheckbox,
  handleDelete,
}: ContentProps) {
  return (
    <>
      {items?.[0] && items?.length ? (
        <ItemList
          items={items}
          handleChangeCheckbox={handleChangeCheckbox}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>No items in the list!</p>
      )}
    </>
  );
}
