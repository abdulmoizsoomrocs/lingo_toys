import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  
  // Calculate total items in cart
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-red-400 via-yellow-300 to-purple-400 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-full mx-auto">
        <div className="flex items-center gap-4 md:gap-8">
          {/* Mobile Menu Button - positioned at the start */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          
          <Link className="text-xl md:text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-headline tracking-tight" to="/">
            LingoToys
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {/* <a className="text-tertiary border-b-4 border-tertiary pb-1 font-bold" href="#stem">
              STEM Kits
            </a> */}
            
            {/* <a className="text-secondary hover:text-tertiary transition-colors font-bold" href="#educational">
              Product Detials
            </a> */}
         

            <Link className="text-white hover:text-yellow-100 transition-colors font-bold hover:scale-110 transform duration-200" to="/shop">
             🎮 Toys
            </Link>

            <Link className="text-white hover:text-yellow-100 transition-colors font-bold hover:scale-110 transform duration-200" to="/about">
             ℹ️ About US
            </Link>

          

            

            

            

            

          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden lg:flex items-center bg-surface-container-highest/50 px-4 py-2 rounded-full border border-outline-variant/15">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-32 sm:w-48 p-0 outline-none"
              placeholder="Search toys..."
              type="text"
            />
          </div>
          <div className="flex gap-4">

            
<Link
  to="/cart"
  className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-4 py-2 rounded-full font-bold hover:scale-110 transition-transform duration-200 active:scale-95 inline-flex items-center gap-2 shadow-lg relative"
>
  <span className="material-symbols-outlined">shopping_cart</span>
  <span className="hidden sm:inline">Cart</span>
  
  {/* Cart Counter Badge */}
  {totalCartItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shadow-lg ring-2 ring-white animate-pulse">
      {totalCartItems}
    </span>
  )}
</Link>
            
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-red-400 via-yellow-300 to-purple-400 border-t border-white/20">
          <div className="px-4 py-4 space-y-4">
            <Link 
              className="block text-white hover:text-yellow-100 transition-colors font-bold py-2 px-4 rounded-lg hover:bg-white/10" 
              to="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
            >
             🎮 Toys
            </Link>
            <Link 
              className="block text-white hover:text-yellow-100 transition-colors font-bold py-2 px-4 rounded-lg hover:bg-white/10" 
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
             ℹ️ About Us
            </Link>
            
            {/* Mobile Search */}
            <div className="lg:hidden flex items-center bg-surface-container-highest/50 px-4 py-2 rounded-full border border-outline-variant/15 mt-4">
              <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full p-0 outline-none"
                placeholder="Search toys..."
                type="text"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
