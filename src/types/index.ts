export interface Author {
  id: number;
  name: string;
  title: string;
  nationality: string;
}

export interface Book {
  id: number;
  title: string;
  authorId: number;
  year: number;
  available: boolean;
}

export interface ApiResponse<T> {
  data: T[];
  error?: string;
}