import { FaTrashAlt } from 'react-icons/fa';

import { ItemProps } from '@/types/item.type';

export default function Item({
  item,
  handleChangeCheckbox,
  handleDelete,
}: ItemProps) {
  return (
    <li key={item.id} className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChangeCheckbox(item.id)}
      />
      <label onDoubleClick={() => handleChangeCheckbox(item.id)}>
        {item.item}
      </label>
      <FaTrashAlt
        className="button"
        role="button"
        tabIndex={0}
        aria-label={`Delete ${item.item}`}
        onClick={() => handleDelete(item.id)}
      >
        <button>Delete</button>
      </FaTrashAlt>
    </li>
  );
}
