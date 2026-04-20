import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { cart } = useCart();
  
  // Calculate total items in cart
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Countdown Timer Effect
  useEffect(() => {
    // Set target date to 30 days from now (only once)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Timer ended
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-red-400 via-yellow-300 to-purple-400 backdrop-blur-md shadow-lg shadow-black/20">
      <div className="max-w-full mx-auto px-4 md:px-8 py-3">
        {/* Main Navbar */}
        <div className="flex justify-between items-center">
          {/* Left: Logo and Menu Button */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-all duration-200 active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-200"
              aria-label="LingoToys Home"
            >
              <img 
                src="https://res.cloudinary.com/divpqqbtn/image/upload/f_auto,q_auto,w_300/logo_oglzza" 
                alt="LingoToys Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <span className="hidden sm:inline text-lg md:text-xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-headline tracking-tight">
                LingoToys
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 ml-8">
              <Link 
                className="text-white hover:text-yellow-100 transition-colors duration-200 font-bold hover:scale-110 transform"
                to="/shop"
              >
                🎮 Toys
              </Link>

              <Link 
                className="text-white hover:text-yellow-100 transition-colors duration-200 font-bold hover:scale-110 transform"
                to="/about"
              >
                ℹ️ About Us
              </Link>
            </div>
          </div>

          {/* Center: Countdown Timer */}
          <div className="hidden lg:flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="text-white/70 text-xs font-bold uppercase tracking-wider">Sale Ends In:</span>
            <div className="flex gap-1 md:gap-2">
              {/* Days */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-pink-500 to-red-600 text-white px-3 py-1.5 rounded-lg font-black text-sm md:text-base min-w-[3rem] text-center">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <span className="text-white/60 text-[10px] font-bold mt-0.5">Days</span>
              </div>
              <div className="text-white/40 font-black text-xl">:</div>
              
              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-lg font-black text-sm md:text-base min-w-[3rem] text-center">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-white/60 text-[10px] font-bold mt-0.5">Hrs</span>
              </div>
              <div className="text-white/40 font-black text-xl">:</div>
              
              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white px-3 py-1.5 rounded-lg font-black text-sm md:text-base min-w-[3rem] text-center">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span className="text-white/60 text-[10px] font-bold mt-0.5">Min</span>
              </div>
              <div className="text-white/40 font-black text-xl">:</div>
              
              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white px-3 py-1.5 rounded-lg font-black text-sm md:text-base min-w-[3rem] text-center">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <span className="text-white/60 text-[10px] font-bold mt-0.5">Sec</span>
              </div>
            </div>
          </div>

          {/* Right: Search and Cart */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search Bar - Desktop Only */}


            {/* Cart Button */}
            <Link
              to="/cart"
              className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-3 md:px-4 py-2 rounded-full font-bold hover:scale-110 hover:shadow-lg transition-all duration-200 active:scale-95 inline-flex items-center gap-2 shadow-md relative group"
            >
              <span className="material-symbols-outlined text-lg">shopping_cart</span>
              <span className="hidden sm:inline text-sm md:text-base">Cart</span>
              
              {/* Cart Counter Badge */}
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shadow-lg ring-2 ring-white animate-pulse">
                  {totalCartItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Countdown Timer */}
        <div className="lg:hidden mt-3 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 overflow-x-auto">
          <div className="flex items-center gap-1 min-w-max">
            <span className="text-white/70 text-xs font-bold whitespace-nowrap">Launching:</span>
            
            {/* Days */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-pink-500 to-red-600 text-white px-2 py-1 rounded-md font-black text-xs min-w-[2.5rem] text-center">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <span className="text-white/60 text-[8px] font-bold mt-0.5">D</span>
            </div>
            <div className="text-white/40 font-bold text-sm">:</div>
            
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white px-2 py-1 rounded-md font-black text-xs min-w-[2.5rem] text-center">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-white/60 text-[8px] font-bold mt-0.5">H</span>
            </div>
            <div className="text-white/40 font-bold text-sm">:</div>
            
            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-md font-black text-xs min-w-[2.5rem] text-center">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-white/60 text-[8px] font-bold mt-0.5">M</span>
            </div>
            <div className="text-white/40 font-bold text-sm">:</div>
            
            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white px-2 py-1 rounded-md font-black text-xs min-w-[2.5rem] text-center">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="text-white/60 text-[8px] font-bold mt-0.5">S</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-red-400 via-yellow-300 to-purple-400 border-t-2 border-white/30 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            <Link 
              className="block text-white hover:text-yellow-100 transition-colors duration-200 font-bold py-3 px-4 rounded-lg hover:bg-white/20 backdrop-blur-sm" 
              to="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🎮 Toys
            </Link>
            <Link 
              className="block text-white hover:text-yellow-100 transition-colors duration-200 font-bold py-3 px-4 rounded-lg hover:bg-white/20 backdrop-blur-sm" 
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ℹ️ About Us
            </Link>
            
            {/* Mobile Search */}
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 mt-4">
              <span className="material-symbols-outlined text-white text-sm mr-2">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full p-0 outline-none text-white placeholder-white/60"
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
