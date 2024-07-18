import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import QuotesPage from './pages/QuotesPage';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
