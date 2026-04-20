import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../utils/authHelper';
import AuthNavbar from '../auth/AuthNavbar';
import Footer from '../components/Footer';

export default function AuthHome() {
  const authenticated = isAuthenticated();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
      <AuthNavbar />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl animate-fadeIn">
          {/* Welcome Message */}
          <div className="mb-12">
            {authenticated ? (
              <>
                <h1 className="text-6xl md:text-7xl font-black mb-4">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Welcome Back! 🎉
                  </span>
                </h1>
                <p className="text-xl text-gray-700 font-semibold mb-8">
                  You're authenticated and ready to explore all the amazing toys!
                </p>
                <Link
                  to="/shop"
                  className="inline-block px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  🛍️ Start Shopping
                </Link>
              </>
            ) : (
              <>
                <h1 className="text-6xl md:text-7xl font-black mb-4">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Welcome to LingoToys 🧸
                  </span>
                </h1>
                <p className="text-xl text-gray-700 font-semibold mb-8">
                  Please login or register to access all features and start shopping!
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link
                    to="/login"
                    className="px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-10 py-4 text-lg font-bold text-cyan-600 border-2 border-cyan-600 rounded-xl hover:bg-cyan-50 transition-all"
                  >
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="font-bold text-gray-800 mb-2">STEM Kits</h3>
              <p className="text-gray-600 text-sm">Premium educational toys designed for curious minds</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-gray-800 mb-2">Learn & Play</h3>
              <p className="text-gray-600 text-sm">Combine learning with fun for the best experience</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-gray-800 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm">Spark creativity and build confidence in children</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
