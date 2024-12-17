import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BookCard } from './components/BookCard';
import { AuthorCard } from './components/AuthorCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useBooks } from './hooks/useBooks';
import { useAuthors } from './hooks/useAuthors';

function App() {
  const [activeSection, setActiveSection] = useState('authors');
  const { authors, loading: authorsLoading, error: authorsError } = useAuthors();
  const { books, loading: booksLoading, error: booksError } = useBooks(
    activeSection === 'books' ? 'all' : 
    activeSection === 'available' ? 'available' : 'unavailable'
  );

  const loading = authorsLoading || booksLoading;
  const error = authorsError || booksError;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {activeSection === 'authors' ? 'Authors' :
             activeSection === 'books' ? 'All Books' :
             activeSection === 'available' ? 'Available Books' :
             'Unavailable Books'}
          </h1>
          <p className="mt-2 text-gray-600">
            {activeSection === 'authors' ? 'Browse all authors in our library' :
             activeSection === 'books' ? 'View our complete collection of books' :
             activeSection === 'available' ? 'Books currently available for borrowing' :
             'Books currently on loan or unavailable'}
          </p>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-600 p-4">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeSection === 'authors'
              ? authors.map((author) => (
                  <AuthorCard key={author.id} author={author} />
                ))
              : books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;