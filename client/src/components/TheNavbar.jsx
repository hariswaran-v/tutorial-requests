import { useState } from "react";
import { NavLink } from "react-router-dom";

const TheNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/create", label: "Create" },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200 shadow-lg">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              TutRequests
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20"
                      : "text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* GitHub Link */}
            <a
              href="https://github.com/hariswaran-v"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 group shadow-lg"
            >
              <svg
                className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-cyan-300 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "translate-y-1"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 translate-y-2" : "translate-y-3"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
          id="mobile-menu"
        >
          <div className="py-4 space-y-2 border-t border-gray-700/50">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20"
                      : "text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="https://github.com/hariswaran-v"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center px-4 py-3 mt-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white text-base font-medium rounded-lg transition-all duration-200 shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TheNavbar;
