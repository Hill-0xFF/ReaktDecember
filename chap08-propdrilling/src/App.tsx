import { useState } from 'react';

import { TItems } from '@/types/items.type';

import './css/styles2.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
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
    <>
      <Header title="Groceries List" />
      <Content
        items={items}
        handleChangeCheckbox={handleChangeCheckbox}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}
