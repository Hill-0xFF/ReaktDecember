import { FormEvent, useState, useEffect } from 'react';

import './css/styles2.css';

import ApiRequest from './api/api-request';
import AddItem from './components/AddItem';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Search from './components/Search';
import { TItems } from './types/items.type';

export default function App() {
  const APIURL = import.meta.env.VITE_API_URL;

  const [search, setSearch] = useState<string>('');

  const [newItem, setNewItem] = useState<string>('');

  const [items, setItems] = useState<TItems[]>(
    JSON.parse(localStorage.getItem('items')!)
      ? JSON.parse(localStorage.getItem('items')!)
      : localStorage.setItem('items', JSON.stringify([]))
  );

  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchItems = async function () {
      try {
        const response = await fetch(APIURL, {
          method: 'GET',

          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) throw Error('Did not received expected data!');
        const data = await response.json();
        console.log(data);
        setItems(data);
        setFetchError(null);
        setLoading(false);
        console.log(`ErrorFetch: ${fetchError}`);
      } catch (err: unknown | TypeError) {
        console.error(`\x1b[31mError during request: ${err}`);
        if (err instanceof Error) setFetchError(err.message);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(function () {
      (async function () {
        await fetchItems();
      })();
    }, 3000);
  }, []);

  // const saveLocalStorage = (item: SetStateAction<TItems[]>) => {
  //   setItems(item);
  // };

  const addItem = async (item: string) => {
    const id: number = items?.length ? items[items.length - 1].id + 1 : 1;
    const objItem = { id, checked: false, item };
    const listItems = [...items, objItem];
    setItems(listItems);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objItem),
    };
    const url = APIURL;

    const result = await ApiRequest({ url, options });
    if (result) setFetchError(result);
  };

  const handleChangeCheckbox = async (id: number) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);

    const getItems = listItem.filter((item) => item.id === id);

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: getItems[0].checked }),
    };

    const url = `${APIURL}/${id}`;
    const result = await ApiRequest({ url, options });
    if (result) setFetchError(result);
  };

  const handleDelete = async (id: number) => {
    const selectedItems = items.filter((item) => item.id !== id);
    setItems(selectedItems);

    const options = {
      method: 'DELETE',
    };
    const url = `${APIURL}/${id}`;
    const result = await ApiRequest({ url, options });
    if (result) setFetchError(result);
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
      <main>
        {loading && <Loading />}
        {fetchError && (
          <p style={{ color: 'white' }}>Error: Data not fetched!</p>
        )}
        {!fetchError && !loading && (
          <Content
            items={
              items?.[0] &&
              items?.filter((item) =>
                item?.item.toLowerCase().includes(search?.toLowerCase())
              )
            }
            handleChangeCheckbox={handleChangeCheckbox}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items?.length} />
    </>
  );
}
