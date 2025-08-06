# Book Library App

A personal library manager built using **React**, **Redux Toolkit**, and **Bootstrap**. It allows users to add, edit, delete, and manage their books with read/unread status, and filter them accordingly.

---

## Features

- Add new books with title, author, and description  
- Edit existing books via modal form  
- Delete books  
- Mark books as Read or Unread  
- Filter by All, Read, or Unread  
- Data persistence using `localStorage`  
- Clean and responsive UI using **Bootstrap**

---

## Tech Stack

- React
- Redux Toolkit
- Bootstrap
- CSS Modules
- localStorage for data persistence

---

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/book-library-app.git
   cd book-library-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Open in browser**  
   [https://book-library-vikrant.surge.sh/]

---

## Default Demo Book

On first load, the app includes a sample book:

- **Title**: Atomic Habits  
- **Author**: James Clear  
- **Description**: An easy & proven way to build good habits and break bad ones.

---

## Project Structure

```
src/
├── components/
│   ├── BookCard.js
│   ├── BookForm.js
│   ├── BookList.js
│   └── Filter.js
├── Redux/
│   ├── booksSlice.js
│   └── store.js
├── App.js
├── index.js
└── App.css
```

## 👨Author

Developed by [**Vikrant Khajuria**](https://github.com/your-username)

---

## License

This project is open-source and free to use.
