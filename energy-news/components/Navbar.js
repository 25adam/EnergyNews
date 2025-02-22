import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Check stored theme on mount
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="bg-blue-600 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/">
          <a className="text-white font-bold text-xl">Energy News</a>
        </Link>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="px-2 py-1 border border-white text-white rounded">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <form className="relative">
            <input
              id="searchInput"
              type="search"
              placeholder="Search articles..."
              className="w-full pl-10 pr-3 py-2 rounded-md bg-blue-500 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
              <i className="fas fa-search"></i>
            </span>
          </form>
        </div>
      </div>
    </nav>
  );
}
