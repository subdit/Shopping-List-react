import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  // use to focus the cursor back on the input where we want it to focus on.
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add your item'
        required
        value={newItem} // Put the item in the state
        onChange={e => setNewItem(e.target.value)} // onChange is to set a new item set in the value={newItem}
      ></input>

      <button
        type='submit'
        aria-label='Add Item'
        //using useRef to focus input
        onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};
export default AddItem;
