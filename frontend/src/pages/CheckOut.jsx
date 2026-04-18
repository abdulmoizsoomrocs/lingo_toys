import { useCart } from "../context/CartContext";
import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
export default function CheckOut() {
  const { clearCart } = useCart();
  const { cart } = useCart();
  const subtotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

const tax = subtotal * 0.08; // 8% example
const total = subtotal + tax;
  return (
    <>
      {/* Checkout Header */}
      <Navigation/>

      <main className="pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Checkout Forms */}
          <div className="flex-1 space-y-12">
            {/* Header Section */}
            <section>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-background mb-4">Complete Your Order</h1>
              <p className="text-lg text-on-surface-variant max-w-xl">You're just one step away from bringing the workshop home. All toys are shipped in eco-friendly packaging.</p>
            </section>

            {/* Shipping Form */}
            <section className="bg-gradient-to-br from-blue-100 to-cyan-100 border-4 border-blue-400 p-8 md:p-12 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-xl">
                  📦
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Shipping Address</h2>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-secondary">First Name</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-tertiary transition-all" placeholder="Alex" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-secondary">Last Name</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-tertiary transition-all" placeholder="Workshop" type="text"/>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-bold text-secondary">Street Address</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-tertiary transition-all" placeholder="123 Playful Lane" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-secondary">City</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-tertiary transition-all" placeholder="Brickville" type="text"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-secondary">State</label>
                    <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-tertiary transition-all" placeholder="CA" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-secondary">Zip</label>
                    <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-tertiary transition-all" placeholder="90210" type="text"/>
                  </div>
                </div>
              </form>
            </section>

            {/* Payment Form */}
            <section className="bg-gradient-to-br from-green-100 to-emerald-100 border-4 border-green-400 p-8 md:p-12 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center text-white font-bold text-xl">
                  💳
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Payment Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-bold text-secondary">Card Number</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 pl-12 focus:ring-2 focus:ring-tertiary transition-all" placeholder="0000 0000 0000 0000" type="text"/>
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">credit_card</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-secondary">Expiry Date</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-tertiary transition-all" placeholder="MM / YY" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-secondary">CVV</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-tertiary transition-all" placeholder="123" type="text"/>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  SSL SECURED
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">shield</span>
                  DATA ENCRYPTED
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="lg:w-96">
            <div className="sticky top-32 space-y-8">
              {/* Summary Card */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-t-8 border-orange-400 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-extrabold mb-6">Order Summary</h3>
                <div className="space-y-6 mb-8">
                  {/* Item Dynamic */}
                 {cart.map(item => (
  <div key={item.id} className="flex gap-4">
    <div className="w-20 h-20 rounded-lg bg-surface-container-highest flex-shrink-0 overflow-hidden">
      <img
        className="w-full h-full object-cover"
        alt={item.name}
        src={item.image}
      />
    </div>
    <div className="flex-1">
      <p className="font-bold text-on-surface text-sm">{item.name}</p>
      <p className="text-xs text-on-surface-variant">Qty: {item.quantity}</p>
      <p className="text-tertiary font-bold mt-1">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  </div>
))}
                  {/* Item Dynamic*/}
                 
                </div>
                <div className="space-y-3 pt-6 border-t border-outline-variant/30">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Subtotal</span>
<span className="font-medium">${subtotal.toFixed(2)}</span>                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Shipping</span>
                    <span className="text-success text-tertiary font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
<span className="font-medium">${tax.toFixed(2)}</span>                    <span className="font-medium">$7.56</span>
                  </div>
                  <div className="flex justify-between text-xl font-black pt-4 text-primary">
                    <span>Total</span>
<span>${total.toFixed(2)}</span>                  </div>
                </div>
                {/* CTA Button */}
                <button
  onClick={() => {
    alert("Order placed successfully!");
    clearCart();
  }}
  className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-5 rounded-md font-bold text-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95 duration-150 shadow-lg"
>
  ✨ Complete Purchase
</button>
                <p className="text-center text-[10px] text-on-surface-variant mt-4 px-4 leading-relaxed">
                  By clicking "Complete Purchase", you agree to LingoToys' terms of service and privacy policy.
                </p>
              </div>

              {/* Promo Code */}
              <div className="bg-gradient-to-r from-pink-200 to-purple-200 border-2 border-purple-400 p-6 rounded-xl shadow-lg">
                <label className="block text-xs font-bold text-purple-700 mb-2 uppercase tracking-wider">🎉 Have a Promo Code?</label>
                <div className="flex gap-2">
                  <input className="flex-1 bg-white border-2 border-purple-300 rounded-sm px-3 py-2 text-sm font-bold focus:ring-2 focus:ring-purple-500" placeholder="PLAY20" type="text"/>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-sm font-bold text-sm hover:shadow-lg transition-all">Apply</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}