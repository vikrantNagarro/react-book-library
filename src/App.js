import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Filter from './components/Filter';
import BookList from './components/BookList';
import BookFormModal from './components/BookFormModal';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddClick = () => {
    setEditingBook(null);
    setModalShow(true);
  };

  const handleEditClick = (book) => {
    setEditingBook(book);
    setModalShow(true);
  };

  return (
    <>
      <Header onAddClick={handleAddClick} />

      <Container className="mt-4">
        <Filter />
        <BookList onEdit={handleEditClick} />
      </Container>

      <BookFormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        editingBook={editingBook}
      />
    </>
  );
}

export default App;
