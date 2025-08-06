import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

// Define your static default book
const defaultBook = {
  id: 'default-1',
  title: 'Atomic Habits',
  author: 'James Clear',
  description: 'A proven way to build good habits and break bad ones.',
  isRead: false,
};

// Load from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('bookAppState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error('Load error:', err);
    return undefined;
  }
};

// Save to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('bookAppState', serializedState);
  } catch (err) {
    console.error('Save error:', err);
  }
};

let preloadedState = loadState();

// If there's no saved data, load default book
if (!preloadedState) {
  preloadedState = {
    books: {
      list: [defaultBook],
      filter: 'all',
    },
  };
}

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  preloadedState,
});

// Save on state change
store.subscribe(() => {
  saveState({
    books: store.getState().books,
  });
});

export default store;