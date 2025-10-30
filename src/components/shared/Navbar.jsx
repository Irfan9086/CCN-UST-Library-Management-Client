import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`w-full ${
        darkMode ? "bg-gray-900" : "bg-blue-700"
      } text-white`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Link to="/" className="font-bold text-xl">
          📚 UST Library
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/books" className="hover:text-yellow-300">
            Books
          </Link>
          <Link to="/about" className="hover:text-yellow-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold transition"
          >
            Login
          </Link>

          <button onClick={toggleTheme} className="p-2 rounded-full">
            {darkMode ? <Sun /> : <Moon />}
          </button>

          {/* Mobile menu toggle */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`flex flex-col gap-4 p-4 ${
            darkMode ? "bg-gray-800" : "bg-blue-600"
          } md:hidden`}
        >
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/books" onClick={toggleMenu}>
            Books
          </Link>
          <Link to="/add-books" onClick={toggleMenu}>
            Books Post
          </Link>
          {/* <>
              <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
              <Link to="/add-books" onClick={toggleMenu}>Books Post</Link>
            </>
          */}

          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>

          <Link to="/login" onClick={toggleMenu}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
