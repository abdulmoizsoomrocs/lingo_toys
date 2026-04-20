import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/authHelper';

export default function AuthNavbar() {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              LingoToys
            </div>
          </Link>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {!authenticated ? (
              <>
                <Link
                  to="/login"
                  className="px-6 py-2 text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <span className="text-sm font-semibold text-gray-700">✓ Logged In</span>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
