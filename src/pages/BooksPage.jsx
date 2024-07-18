import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => {
        console.log('Books data:', data);
        setBooks(data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="books-list">
        {books.map(book => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <img src={book.image} alt={book.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
