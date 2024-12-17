import { Library } from 'lucide-react';

interface NavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navbar({ activeSection, onSectionChange }: NavProps) {
  const navItems = [
    { id: 'authors', label: 'Authors' },
    { id: 'books', label: 'All Books' },
    { id: 'available', label: 'Available Books' },
    { id: 'unavailable', label: 'Unavailable Books' },
  ];

  return (
    <nav className="bg-blue-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Biblioteca Virtual Solis</span>
          </div>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-indigo-100 hover:bg-blue-700'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}