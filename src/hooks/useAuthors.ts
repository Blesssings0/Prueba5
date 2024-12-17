import { useState, useEffect } from 'react';
import { Author } from '../types';
import { authorService } from '../services/authorService';

export function useAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAuthors() {
      setLoading(true);
      setError(null);

      const response = await authorService.getAll();
      
      if (response.error) {
        setError(response.error);
      } else {
        setAuthors(response.data);
      }
      
      setLoading(false);
    }

    fetchAuthors();
  }, []);

  return { authors, loading, error };
}