import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

import { AddItemProps } from '@/types/additem.type';

export default function AddItem({
  setNewItem,
  newItem,
  handleSubmitButton,
}: AddItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    // evt is implicity passed to handleSubmitButton function
    <form className="addForm" onSubmit={handleSubmitButton}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        name="addItem"
        id="addItem"
        placeholder="Add item to the list..."
        onChange={(evt) => setNewItem(evt.target.value)}
        value={newItem}
        required
      />
      <button
        aria-label={'Add Item'}
        type="submit"
        onClick={() => inputRef.current?.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
}
