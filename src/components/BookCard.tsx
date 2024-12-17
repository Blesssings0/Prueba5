import { BookOpen, CheckCircle, XCircle } from 'lucide-react';
import type { Book } from '../types';

export function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
          </div>
          <p className="text-gray-600 mt-2">Published: {book.year}</p>
          <p className="text-sm text-gray-500 mt-1">Author ID: {book.authorId}</p>
        </div>
        <div className="ml-4">
          {book.available ? (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-1" />
              <span className="text-sm">Available</span>
            </div>
          ) : (
            <div className="flex items-center text-red-600">
              <XCircle className="h-5 w-5 mr-1" />
              <span className="text-sm">Unavailable</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}