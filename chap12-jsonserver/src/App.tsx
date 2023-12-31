import { FormEvent, useState, useEffect } from 'react';

import './css/styles2.css';

import AddItem from './components/AddItem';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import { TItems } from './types/items.type';

export default function App() {
  const [search, setSearch] = useState<string>('');

  const [newItem, setNewItem] = useState<string>('');

  const [items, setItems] = useState<TItems[]>(
    JSON.parse(localStorage.getItem('items')!)
      ? JSON.parse(localStorage.getItem('items')!)
      : localStorage.setItem('items', JSON.stringify([]))
  );

  useEffect(
    function () {
      localStorage.setItem('items', JSON.stringify(items));
    },
    [items]
  );

  // const saveLocalStorage = (item: SetStateAction<TItems[]>) => {
  //   setItems(item);
  // };

  const addItem = (item: string) => {
    const id: number = items?.length ? items[items.length - 1].id + 1 : 1;
    const objItem = { id, checked: false, item };
    const listItems = [...items, objItem];
    setItems(listItems);
  };

  const handleChangeCheckbox = (id: number) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);
  };

  const handleDelete = (id: number) => {
    const selectedItems = items.filter((item) => item.id !== id);
    setItems(selectedItems);
  };

  const handleSubmitButton = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <>
      <Header title="Groceries List System v.0.0.1" />
      <AddItem
        handleSubmitButton={handleSubmitButton}
        addItem={addItem}
        setNewItem={setNewItem}
        newItem={newItem}
      />
      <Search search={search} setSearch={setSearch} />
      <Content
        items={items?.filter((item) =>
          item?.item.toLowerCase().includes(search?.toLowerCase())
        )}
        handleChangeCheckbox={handleChangeCheckbox}
        handleDelete={handleDelete}
      />
      <Footer length={items?.length} />
    </>
  );
}
