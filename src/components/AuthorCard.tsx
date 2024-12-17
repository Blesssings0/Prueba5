import { User, BookOpen } from 'lucide-react';
import type { Author } from '../types';

export function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="bg-indigo-100 p-3 rounded-full">
          <User className="h-6 w-6 text-indigo-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{author.name}</h3>
          <div className="mt-2 flex items-center text-gray-600">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>{author.title}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Nationality: {author.nationality}</p>
        </div>
      </div>
    </div>
  );
}