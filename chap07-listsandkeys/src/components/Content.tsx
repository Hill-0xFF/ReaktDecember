import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { TItems } from '@/types/items.type';

export default function Content() {
  // const [items, setItems] = useState<TItems[]>([]);
  const [items, setItems] = useState<TItems[]>([
    {
      id: 1,
      checked: false,
      item: 'One half pound bag of Cocoa Covered Almonds Unsalted',
    },
    {
      id: 2,
      checked: false,
      item: 'Tomatoes',
    },
    {
      id: 3,
      checked: false,
      item: 'Vanilla Ice Cream with Chocolate and Powerball',
    },
  ]);

  const handleChangeCheckbox = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('items', JSON.stringify(listItems));
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('items', JSON.stringify(listItems));
  };

  return (
    <main>
      {items?.[0] && items?.length ? (
        <ul>
          {items.map((item) => (
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
                onClick={() => handleDelete(item.id)}
              >
                <button>Delete</button>
              </FaTrashAlt>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>No items in the list!</p>
      )}
    </main>
  );
}
