import React from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  // cheakout
 const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

const subtotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

const shipping = 15;
const discount = 15;

const total = subtotal + shipping - discount;
// cheakout
  return (
    <div className="bg-surface text-on-surface">
      {/* TopNavBar */}
     <Navigation/>

      {/* Main Content Canvas */}
      <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
        <header className="mb-12 bg-gradient-to-r from-cyan-200 to-blue-200 p-8 rounded-lg border-4 border-cyan-400 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight mb-2">🛒 The Toy Bin</h1>
          <p className="text-blue-700 font-bold text-lg">You have 3 items ready for their new home.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items List (Bento-ish Grid) */}
          <div className="lg:col-span-2 space-y-6">

            {/* for cart addition */}

  {/* 🔥 YOUR NEW CODE HERE */}
{cart.map(item => (
  <div key={item.id} className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6 flex flex-col sm:flex-row gap-6 items-center group transition-all duration-300 hover:shadow-xl border-l-4 border-green-500">

    {/* IMAGE */}
    <div className="w-32 h-32 rounded-lg overflow-hidden bg-white shrink-0 shadow-inner">
      <img
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        src={item.image}
      />
    </div>

    {/* CONTENT */}
    <div className="flex-grow text-center sm:text-left">
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        
        <div>
          {/* NAME */}
          <h3 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
            {item.name}
          </h3>

          {/* CATEGORY (optional fallback) */}
          <p className="text-green-600 text-sm mt-1 italic font-semibold">
            {item.category || "Toy Item"}
          </p>
        </div>

        {/* PRICE */}
        <p className="text-2xl font-black text-green-600">
          Rs. {item.price}
        </p>
      </div>

      {/* QUANTITY SECTION */}
  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 mt-6">

  <div className="flex items-center bg-gradient-to-r from-green-300 to-emerald-300 rounded-full px-4 py-1 gap-4 shadow-md">
    
    {/* ➖ DECREASE */}
    <button
      onClick={() => decreaseQty(item.id)}
      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-green-200 transition-colors shadow-sm font-bold"
    >
      <span className="material-symbols-outlined text-sm">remove</span>
    </button>

    {/* QUANTITY */}
    <span className="font-bold text-lg min-w-[1.5rem] text-center text-green-700">
      {item.quantity}
    </span>

    {/* ➕ INCREASE */}
    <button
      onClick={() => increaseQty(item.id)}
      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-green-200 transition-colors shadow-sm font-bold"
    >
      <span className="material-symbols-outlined text-sm">add</span>
    </button>

  </div>

  {/* 🗑 REMOVE */}
  <button
    onClick={() => removeFromCart(item.id)}
    className="flex items-center gap-1 text-red-500 text-sm font-bold hover:text-red-700 transition-colors"
  >
    <span className="material-symbols-outlined text-lg">delete</span>
    Remove
  </button>

</div>
    </div>
  </div>
))}

            {/* for cart addition */}




            {/* Promo Banner (Asymmetric Layout) */}
            <div className="relative bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg p-8 overflow-hidden mt-12 border-4 border-purple-400 shadow-lg">
              <div className="relative z-10 max-w-md">
                <h4 className="text-purple-900 text-2xl font-black mb-2">🚀 Build a bigger world!</h4>
                <p className="text-purple-800 mb-6 font-bold">Add one more STEM kit and unlock free shipping plus a mystery mini-figure.</p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-md">Browse STEM</button>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-20 rotate-12">
                <span className="material-symbols-outlined text-[12rem]" style={{ fontVariationSettings: "'FILL' 1" }}>package_2</span>
              </div>
            </div>
          </div>

          {/* Summary Sidebar (Workshop Tray Style) */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-8 sticky top-24 shadow-[0_20px_40px_rgba(47,47,46,0.05)] border-t-8 border-gradient-to-r from-yellow-400 to-orange-400">
              <h2 className="text-2xl font-black bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent mb-8 tracking-tight">📋 Checkout Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-orange-700 font-semibold">
<span className="font-medium">Subtotal ({totalItems} items)</span>
<span className="font-bold">Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-orange-600 font-semibold">
                  <span className="font-medium">🚚 Eco-Shipping</span>
                  <span className="font-bold">Rs. 15.00</span>
                </div>
                <div className="flex justify-between items-center text-green-600 font-bold">
                  <span className="font-medium">✅ Toy Box Discount</span>
                  <span className="font-bold">-Rs. 15.00</span>
                </div>
                <div className="pt-4 border-t-2 border-yellow-300 flex justify-between items-baseline">
                  <span className="text-xl font-bold text-orange-900">💰 Total</span>

<span className="text-3xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
  Rs. {total.toFixed(2)}
</span>                
                </div>
              </div>
              <div className="space-y-4">
             <Link
  to="/checkout"
  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-black text-lg hover:shadow-lg transition-all duration-300 shadow-xl active:scale-95 text-center block"
>
  ✨ CHECKOUT NOW
</Link>
                <div className="flex items-center justify-center gap-2 text-orange-700 text-sm font-bold pt-4">
                  <span className="material-symbols-outlined">lock</span>
                  Secure 256-bit SSL Payment
                </div>
              </div>

              {/* "Pegboard" style promo input */}
              <div className="mt-12 bg-gradient-to-r from-pink-100 to-red-100 p-4 rounded-lg border-2 border-pink-300">
                <label className="block text-xs font-black uppercase tracking-widest text-pink-700 mb-2">🎉 Have a Promo Code?</label>
                <div className="flex gap-2">
                  <input className="flex-grow bg-white border-2 border-pink-300 rounded-sm px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500" placeholder="GIFT2024" type="text" />
                  <button className="bg-gradient-to-r from-pink-400 to-red-400 text-white px-4 py-2 rounded-sm font-bold text-sm hover:shadow-md transition-all">Apply</button>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-8 flex justify-center gap-4 opacity-70">
                <span className="material-symbols-outlined text-3xl text-blue-500">credit_card</span>
                <span className="material-symbols-outlined text-3xl text-green-500">account_balance_wallet</span>
                <span className="material-symbols-outlined text-3xl text-purple-500">contactless</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
     <Footer/>
    </div>
  );
}
