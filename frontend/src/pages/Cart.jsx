import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import { useCart } from "../context/CartContext";

/* ─────────────────────────────────────────────
   Inline keyframe styles injected once
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap');

  :root {
    --cart-bg: #f0f4ff;
    --card-bg: #ffffff;
    --candy-red:    #ff6b6b;
    --candy-orange: #ff9f43;
    --candy-yellow: #ffd32a;
    --candy-green:  #1dd1a1;
    --candy-blue:   #48dbfb;
    --candy-purple: #a29bfe;
    --candy-pink:   #fd79a8;
    --text-dark:    #2d3436;
    --text-mid:     #636e72;
    --text-light:   #b2bec3;
    --shadow-soft:  0 4px 24px rgba(0,0,0,0.07);
    --shadow-card:  0 8px 32px rgba(0,0,0,0.09);
    --radius-lg:    20px;
    --radius-pill:  999px;
  }

  .cart-root { font-family: 'Nunito', sans-serif; background: var(--cart-bg); min-height: 100vh; }

  /* Rainbow stripe header */
  .cart-hero { background: linear-gradient(135deg, #ff6b6b 0%, #ff9f43 20%, #ffd32a 40%, #1dd1a1 60%, #48dbfb 80%, #a29bfe 100%); }

  /* Confetti dots pattern on hero */
  .cart-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px);
    background-size: 22px 22px;
    pointer-events: none;
  }

  /* Card */
  .item-card {
    background: #fff;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-card);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    animation: slideIn 0.4s ease both;
    position: relative;
    overflow: hidden;
  }
  .item-card::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0; width: 5px;
    background: linear-gradient(180deg, var(--candy-blue), var(--candy-purple));
    border-radius: 20px 0 0 20px;
  }
  .item-card:nth-child(2)::before { background: linear-gradient(180deg, var(--candy-green), var(--candy-blue)); }
  .item-card:nth-child(3)::before { background: linear-gradient(180deg, var(--candy-pink), var(--candy-orange)); }
  .item-card:nth-child(4)::before { background: linear-gradient(180deg, var(--candy-yellow), var(--candy-green)); }
  .item-card:nth-child(5)::before { background: linear-gradient(180deg, var(--candy-purple), var(--candy-pink)); }

  .item-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.13); }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Quantity pill */
  .qty-pill {
    display: flex; align-items: center; gap: 0;
    background: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: var(--radius-pill);
    overflow: hidden;
  }
  .qty-btn {
    width: 36px; height: 36px;
    display: flex; align-items: center; justify-content: center;
    background: transparent;
    border: none; cursor: pointer;
    font-size: 18px; font-weight: 900; color: var(--text-dark);
    transition: background 0.18s, color 0.18s;
  }
  .qty-btn:hover { background: var(--candy-blue); color: #fff; }
  .qty-num {
    min-width: 36px; text-align: center;
    font-weight: 800; font-size: 1rem; color: var(--text-dark);
  }

  /* Remove btn */
  .remove-btn {
    display: inline-flex; align-items: center; gap: 4px;
    background: none; border: none; cursor: pointer;
    color: #b2bec3; font-size: 0.8rem; font-weight: 700;
    font-family: 'Nunito', sans-serif;
    padding: 6px 10px;
    border-radius: var(--radius-pill);
    transition: background 0.18s, color 0.18s;
  }
  .remove-btn:hover { background: #fff0f0; color: var(--candy-red); }

  /* Summary box */
  .summary-box {
    background: #fff;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-card);
    padding: 32px;
    position: sticky; top: 100px;
  }

  /* Checkout button */
  .checkout-btn {
    display: block; width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #a29bfe 0%, #fd79a8 50%, #ff6b6b 100%);
    color: #fff;
    border: none; border-radius: var(--radius-pill);
    font-family: 'Fredoka One', cursive;
    font-size: 1.2rem; letter-spacing: 0.5px;
    cursor: pointer; text-align: center; text-decoration: none;
    box-shadow: 0 8px 24px rgba(162,155,254,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .checkout-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(162,155,254,0.5); }
  .checkout-btn:active { transform: translateY(0); }

  /* Promo input */
  .promo-input {
    flex: 1; border: 2px solid #e9ecef; border-radius: var(--radius-pill);
    padding: 10px 16px; font-family: 'Nunito', sans-serif;
    font-size: 0.9rem; outline: none; transition: border-color 0.2s;
  }
  .promo-input:focus { border-color: var(--candy-purple); }

  .promo-btn {
    background: linear-gradient(135deg, var(--candy-purple), var(--candy-pink));
    color: #fff; border: none; border-radius: var(--radius-pill);
    padding: 10px 20px; font-family: 'Nunito', sans-serif;
    font-weight: 800; font-size: 0.9rem; cursor: pointer;
    transition: opacity 0.2s;
  }
  .promo-btn:hover { opacity: 0.88; }

  /* Empty state */
  .empty-state { text-align: center; padding: 80px 20px; }

  /* Divider row */
  .summary-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; }
  .summary-divider { border: none; border-top: 2px dashed #e9ecef; margin: 8px 0; }

  /* Badge */
  .item-badge {
    position: absolute; top: 14px; right: 14px;
    background: linear-gradient(135deg, var(--candy-yellow), var(--candy-orange));
    color: #fff; font-size: 0.68rem; font-weight: 800;
    padding: 2px 10px; border-radius: var(--radius-pill);
    letter-spacing: 0.5px; text-transform: uppercase;
  }

  /* Tag chip */
  .chip {
    display: inline-flex; align-items: center; gap: 4px;
    background: #f0f4ff; color: var(--candy-purple);
    font-size: 0.72rem; font-weight: 700;
    padding: 3px 10px; border-radius: var(--radius-pill);
    border: 1.5px solid #d8d5ff;
  }

  /* Promo banner */
  .promo-banner {
    border-radius: var(--radius-lg);
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
    padding: 24px 28px;
    display: flex; align-items: center; gap: 16px;
    box-shadow: var(--shadow-soft);
  }

  /* Trust badges */
  .trust-row { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; margin-top: 16px; }
  .trust-badge {
    display: flex; align-items: center; gap: 6px;
    color: var(--text-mid); font-size: 0.78rem; font-weight: 700;
  }

  /* Image */
  .item-img {
    width: 100px; height: 100px;
    border-radius: 14px; object-fit: cover;
    border: 3px solid #f0f4ff;
    transition: transform 0.35s ease;
    flex-shrink: 0;
  }
  .item-card:hover .item-img { transform: scale(1.06) rotate(-2deg); }

  /* Fredoka headings */
  .fredoka { font-family: 'Fredoka One', cursive; }

  @media (max-width: 640px) {
    .item-card { padding: 16px !important; }
    .summary-box { padding: 20px; }
    .item-img { width: 76px; height: 76px; }
  }
`;

/* ─────────────────────────────────────────────
   Helper: small icon (material symbols)
───────────────────────────────────────────── */
const Icon = ({ name, size = 20, style = {} }) => (
  <span
    className="material-symbols-outlined"
    style={{ fontSize: size, lineHeight: 1, verticalAlign: 'middle', ...style }}
  >
    {name}
  </span>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  /* ── Totals ── */
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal   = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping   = 15;
  const discount   = 15;
  const total      = subtotal + shipping - discount;

  /* ── Promo handler ── */
  const handlePromo = () => {
    if (promoCode.trim()) setPromoApplied(true);
  };

  return (
    <div className="cart-root">
      <style>{STYLES}</style>

      {/* ── Navigation ── */}
      <Navigation />

      {/* ── Hero Header ── */}
      <div className="cart-hero relative pt-32 pb-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto relative z-10">
          <p
            className="fredoka text-white text-opacity-90 text-sm uppercase tracking-widest mb-1"
            style={{ letterSpacing: '0.18em', opacity: 0.85 }}
          >
            Your Toy Basket
          </p>
          <h1
            className="fredoka text-white text-4xl md:text-6xl mb-2"
            style={{ textShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
          >
            🛒 Shopping Cart
          </h1>
         <p
  className="text-white font-bold text-base md:text-lg"
  style={{ opacity: 0.88 }}
>
  {totalItems > 0
    ? `${totalItems} awesome ${totalItems === 1 ? 'toy' : 'toys'} waiting for you!`
    : "Your cart is empty — let's fix that!"}
</p>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">

        {cart.length === 0 ? (
          /* ── Empty State ── */
          <div className="empty-state">
            <div style={{ fontSize: 80 }}>🧸</div>
            <h2 className="fredoka text-3xl mt-4" style={{ color: 'var(--text-dark)' }}>
              Nothing here yet!
            </h2>
            <p className="mt-2 mb-8" style={{ color: 'var(--text-mid)', fontWeight: 600 }}>
              Go pick some awesome toys and come back.
            </p>
            <Link
              to="/"
              className="checkout-btn"
              style={{ display: 'inline-block', width: 'auto', padding: '14px 40px' }}
            >
              🎉 Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ══════════════ LEFT COLUMN — Items ══════════════ */}
            <div className="lg:col-span-2 space-y-5">

              {/* Section label */}
              <div className="flex items-center gap-3 mb-2">
                <Icon name="shopping_bag" size={22} style={{ color: 'var(--candy-purple)' }} />
                <span
                  className="fredoka text-xl"
                  style={{ color: 'var(--text-dark)' }}
                >
                  Cart Items
                </span>
                <span
                  className="ml-auto text-sm font-bold"
                  style={{ color: 'var(--text-mid)' }}
                >
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              </div>

              {/* ── Item Cards ── */}
              {cart.map((item, idx) => (
                <div
                  key={item.id}
                  className="item-card"
                  style={{ padding: '20px 24px', animationDelay: `${idx * 0.07}s` }}
                >
                  {/* Category badge */}
                  {item.category && (
                    <span className="item-badge">{item.category}</span>
                  )}

                  <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">

                    {/* Product image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-img"
                    />

                    {/* Details */}
                    <div className="flex-grow min-w-0">
                      <h3
                        className="fredoka text-xl leading-tight mb-1 truncate"
                        style={{ color: 'var(--text-dark)' }}
                      >
                        {item.name}
                      </h3>

                      {/* Chip */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="chip">
                          <Icon name="sell" size={13} />
                          In Stock
                        </span>
                        <span className="chip">
                          <Icon name="local_shipping" size={13} />
                          Free Returns
                        </span>
                      </div>

                      {/* Price + Controls row */}
                      <div className="flex flex-wrap items-center gap-4">

                        {/* Price */}
                        <div>
                          <span
                            className="fredoka text-2xl"
                            style={{ color: 'var(--candy-purple)' }}
                          >
                            Rs. {(item.price * item.quantity).toLocaleString()}
                          </span>
                          {item.quantity > 1 && (
                            <span
                              className="ml-2 text-sm font-600"
                              style={{ color: 'var(--text-light)' }}
                            >
                              (Rs. {item.price} each)
                            </span>
                          )}
                        </div>

                        {/* Quantity pill */}
                        <div className="qty-pill">
                          <button
                            className="qty-btn"
                            onClick={() => decreaseQty(item.id)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="qty-num">{item.quantity}</span>
                          <button
                            className="qty-btn"
                            onClick={() => increaseQty(item.id)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                        >
                          <Icon name="delete" size={16} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* ── Promo Banner ── */}
              <div className="promo-banner mt-4">
                <span style={{ fontSize: 44 }}>🚀</span>
                <div>
                  <p
                    className="fredoka text-xl"
                    style={{ color: '#7d3c00' }}
                  >
                    Add one more STEM kit!
                  </p>
                  <p
                    className="text-sm font-700 mt-1"
                    style={{ color: '#a0522d', fontWeight: 700 }}
                  >
                    Unlock free shipping + a mystery mini-figure 🎁
                  </p>
                </div>
                <Link
                  to="/shop"
                  className="ml-auto text-sm font-800 px-5 py-2 rounded-full text-white"
                  style={{
                    background: 'linear-gradient(135deg, #ff9f43, #ff6b6b)',
                    whiteSpace: 'nowrap', fontWeight: 800,
                    textDecoration: 'none'
                  }}
                >
                  Browse STEM →
                </Link>
              </div>
            </div>

            {/* ══════════════ RIGHT COLUMN — Summary ══════════════ */}
            <div className="lg:col-span-1">
              <div className="summary-box">

                <h2
                  className="fredoka text-2xl mb-6"
                  style={{ color: 'var(--text-dark)' }}
                >
                  📋 Order Summary
                </h2>

                {/* Rows */}
                <div>
                  <div className="summary-row">
                    <span style={{ color: 'var(--text-mid)', fontWeight: 600, fontSize: '0.95rem' }}>
                      Subtotal ({totalItems} items)
                    </span>
                    <span style={{ fontWeight: 800, color: 'var(--text-dark)' }}>
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="summary-row">
                    <span style={{ color: 'var(--text-mid)', fontWeight: 600, fontSize: '0.95rem' }}>
                      🚚 Eco-Shipping
                    </span>
                    <span style={{ fontWeight: 700, color: 'var(--text-dark)' }}>
                      Rs. {shipping.toFixed(2)}
                    </span>
                  </div>

                  <div className="summary-row">
                    <span style={{ color: 'var(--candy-green)', fontWeight: 700, fontSize: '0.95rem' }}>
                      ✅ Toy Box Discount
                    </span>
                    <span style={{ fontWeight: 700, color: 'var(--candy-green)' }}>
                      − Rs. {discount.toFixed(2)}
                    </span>
                  </div>

                  {promoApplied && (
                    <div className="summary-row">
                      <span style={{ color: 'var(--candy-pink)', fontWeight: 700, fontSize: '0.95rem' }}>
                        🎉 Promo Code
                      </span>
                      <span style={{ fontWeight: 700, color: 'var(--candy-pink)' }}>
                        − Rs. 50.00
                      </span>
                    </div>
                  )}

                  <hr className="summary-divider" />

                  <div className="summary-row" style={{ paddingTop: 12 }}>
                    <span
                      className="fredoka text-xl"
                      style={{ color: 'var(--text-dark)' }}
                    >
                      💰 Total
                    </span>
                    <span
                      className="fredoka text-3xl"
                      style={{
                        background: 'linear-gradient(135deg, #a29bfe, #fd79a8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Rs. {(promoApplied ? total - 50 : total).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <Link to="/checkout" className="checkout-btn" style={{ marginTop: 24, display: 'block' }}>
                  ✨ Checkout Now
                </Link>

                {/* Trust row */}
                <div className="trust-row">
                  <span className="trust-badge">
                    <Icon name="lock" size={15} style={{ color: 'var(--candy-green)' }} />
                    SSL Secure
                  </span>
                  <span className="trust-badge">
                    <Icon name="replay" size={15} style={{ color: 'var(--candy-blue)' }} />
                    Easy Returns
                  </span>
                  <span className="trust-badge">
                    <Icon name="verified" size={15} style={{ color: 'var(--candy-purple)' }} />
                    Verified
                  </span>
                </div>

                {/* Promo Code */}
                <div
                  style={{
                    marginTop: 24,
                    background: '#f8f9ff',
                    borderRadius: 14,
                    padding: '16px 18px',
                    border: '2px dashed #d8d5ff'
                  }}
                >
                  <label
                    style={{
                      display: 'block', fontSize: '0.75rem', fontWeight: 800,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--candy-purple)', marginBottom: 8
                    }}
                  >
                    🎟 Promo Code
                  </label>
                  {promoApplied ? (
                    <p
                      style={{ color: 'var(--candy-green)', fontWeight: 800, fontSize: '0.9rem' }}
                    >
                      ✅ Code applied! You saved Rs. 50.
                    </p>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        className="promo-input"
                        type="text"
                        placeholder="GIFT2025"
                        value={promoCode}
                        onChange={e => setPromoCode(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handlePromo()}
                      />
                      <button className="promo-btn" onClick={handlePromo}>
                        Apply
                      </button>
                    </div>
                  )}
                </div>

                {/* Payment icons */}
                <div
                  className="flex justify-center gap-4 mt-6"
                  style={{ opacity: 0.55 }}
                >
                  <Icon name="credit_card" size={28} style={{ color: '#2980b9' }} />
                  <Icon name="account_balance_wallet" size={28} style={{ color: '#27ae60' }} />
                  <Icon name="contactless" size={28} style={{ color: '#8e44ad' }} />
                  <Icon name="phone_iphone" size={28} style={{ color: '#e74c3c' }} />
                </div>
              </div>
            </div>
            {/* ── End right col ── */}
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <Footer />
      <FloatingChat />
    </div>
  );
}