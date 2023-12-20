import { FormEvent, SetStateAction, useState } from 'react';

import { TItems } from '@/types/items.type';

import './css/styles2.css';
import AddItem from './components/AddItem';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';

export default function App() {
  const [items, setItems] = useState<TItems[]>(
    JSON.parse(localStorage.getItem('items')!)
      ? JSON.parse(localStorage.getItem('items')!)
      : localStorage.setItem('items', JSON.stringify([]))
  );
  const [newItem, setNewItem] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const saveLocalStorage = (items: SetStateAction<TItems[]>) => {
    setItems(items);
    localStorage.setItem('items', JSON.stringify(items));
  };

  const addItem = (item: string) => {
    const id: number = items?.length ? items[items.length - 1].id + 1 : 1;
    const meineNewItem = { id, checked: false, item };
    const listItems = [...items, meineNewItem];
    saveLocalStorage(listItems);
  };

  const handleChangeCheckbox = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    saveLocalStorage(listItems);
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    saveLocalStorage(listItems);
  };

  const handleSubmitButton = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <>
      <Header title="Groceries List" />
      <AddItem
        handleSubmitButton={handleSubmitButton}
        setNewItem={setNewItem}
        newItem={newItem}
        addItem={addItem}
      />
      <Search search={search} setSearch={setSearch} />

      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleChangeCheckbox={handleChangeCheckbox}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />
    </>
  );
}
