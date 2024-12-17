import { Book } from '../types';
import { fetchData } from '../utils/api';

export const bookService = {
  getAll: () => fetchData<Book>('/books'),
  getAvailable: () => fetchData<Book>('/books/available'),
  getUnavailable: () => fetchData<Book>('/books/unavailable'),
};