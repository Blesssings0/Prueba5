import { useState, useEffect } from 'react';
import { Book } from '../types';
import { bookService } from '../services/bookService';

export function useBooks(type: 'all' | 'available' | 'unavailable') {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      setError(null);

      const service = {
        all: bookService.getAll,
        available: bookService.getAvailable,
        unavailable: bookService.getUnavailable,
      }[type];

      const response = await service();
      
      if (response.error) {
        setError(response.error);
      } else {
        setBooks(response.data);
      }
      
      setLoading(false);
    }

    fetchBooks();
  }, [type]);

  return { books, loading, error };
}