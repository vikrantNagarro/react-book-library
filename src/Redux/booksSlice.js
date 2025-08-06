import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  filter: 'all', // 'all', 'read', 'unread'
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = { id: nanoid(), ...action.payload, isRead: false };
      state.list.push(book);
    },
    deleteBook: (state, action) => {
      state.list = state.list.filter(book => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const index = state.list.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
      }
    },
    toggleReadStatus: (state, action) => {
      const book = state.list.find(book => book.id === action.payload);
      if (book) book.isRead = !book.isRead;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addBook,
  deleteBook,
  updateBook,
  toggleReadStatus,
  setFilter,
} = booksSlice.actions;

export default booksSlice.reducer;
