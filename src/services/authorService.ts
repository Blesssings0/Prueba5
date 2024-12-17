import { Author } from '../types';
import { fetchData } from '../utils/api';

export const authorService = {
  getAll: () => fetchData<Author>('/authors'),
};