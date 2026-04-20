import { useCart } from "../context/CartContext";
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

/* ─────────────────────────────────────────────
   Global styles + keyframes
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap');

  :root {
    --co-bg:        #f2f4ff;
    --co-card:      #ffffff;
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
    --radius-xl:    22px;
    --radius-pill:  999px;
    --shadow-card:  0 8px 32px rgba(0,0,0,0.09);
  }

  .co-root { font-family: 'Nunito', sans-serif; background: var(--co-bg); min-height: 100vh; }
  .fredoka { font-family: 'Fredoka One', cursive; }

  /* ── Hero ── */
  .co-hero {
    background: linear-gradient(135deg,
      #ff6b6b 0%, #ff9f43 20%, #ffd32a 38%, #1dd1a1 56%, #48dbfb 74%, #a29bfe 88%, #fd79a8 100%
    );
    position: relative; overflow: hidden;
  }
  .co-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.25) 1.5px, transparent 1.5px);
    background-size: 24px 24px;
    pointer-events: none;
  }

  /* ── Section card ── */
  .co-section {
    background: #fff;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-card);
    overflow: hidden;
    animation: fadeUp 0.4s ease both;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .co-section:nth-child(2) { animation-delay: 0.08s; }
  .co-section:nth-child(3) { animation-delay: 0.16s; }

  .section-bar {
    height: 6px;
    background: linear-gradient(90deg, var(--candy-blue), var(--candy-purple));
  }
  .section-bar.green { background: linear-gradient(90deg, var(--candy-green), var(--candy-blue)); }

  /* ── Input ── */
  .co-input {
    width: 100%;
    background: #f8f9ff;
    border: 2px solid #e8eaf6;
    border-radius: 12px;
    padding: 12px 16px;
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem;
    color: var(--text-dark);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .co-input:focus {
    border-color: var(--candy-purple);
    box-shadow: 0 0 0 3px rgba(162,155,254,0.18);
  }
  .co-input::placeholder { color: var(--text-light); }

  .co-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-mid);
    margin-bottom: 6px;
  }

  /* ── Summary sidebar ── */
  .summary-card {
    background: #fff;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-card);
    overflow: hidden;
    position: sticky; top: 100px;
  }
  .summary-top {
    background: linear-gradient(135deg, #fff9ec 0%, #fff4e0 100%);
    border-bottom: 2px dashed #ffe8b0;
    padding: 24px 28px 20px;
  }

  /* ── Cart item row ── */
  .order-item {
    display: flex; gap: 14px; align-items: center;
    padding: 14px 0;
    border-bottom: 1.5px solid #f0f2ff;
    transition: background 0.18s;
    border-radius: 10px;
  }
  .order-item:last-child { border-bottom: none; }
  .order-item:hover { background: #f8f9ff; }

  .order-img {
    width: 64px; height: 64px;
    border-radius: 12px; object-fit: cover;
    border: 2px solid #f0f2ff;
    flex-shrink: 0;
    transition: transform 0.3s;
  }
  .order-item:hover .order-img { transform: scale(1.07) rotate(-2deg); }

  /* ── Row dividers ── */
  .sum-row { display: flex; justify-content: space-between; align-items: center; padding: 9px 0; }
  .sum-divider { border: none; border-top: 2px dashed #ffe8b0; margin: 6px 0; }

  /* ── CTA ── */
  .cta-btn {
    display: block; width: 100%;
    padding: 17px;
    background: linear-gradient(135deg, #a29bfe 0%, #fd79a8 60%, #ff6b6b 100%);
    color: #fff; border: none;
    border-radius: var(--radius-pill);
    font-family: 'Fredoka One', cursive;
    font-size: 1.22rem; letter-spacing: 0.4px;
    cursor: pointer; text-align: center;
    box-shadow: 0 8px 28px rgba(162,155,254,0.42);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(162,155,254,0.52); }
  .cta-btn:active { transform: translateY(0); }

  /* ── Promo ── */
  .promo-box {
    background: linear-gradient(135deg, #fff0f8 0%, #f5f0ff 100%);
    border: 2px dashed var(--candy-purple);
    border-radius: var(--radius-xl);
    padding: 20px 24px;
    margin-top: 20px;
  }
  .promo-input {
    flex: 1; border: 2px solid #e8eaf6; border-radius: var(--radius-pill);
    padding: 10px 18px; font-family: 'Nunito', sans-serif;
    font-size: 0.9rem; outline: none;
    transition: border-color 0.2s;
  }
  .promo-input:focus { border-color: var(--candy-purple); }
  .promo-btn {
    background: linear-gradient(135deg, var(--candy-purple), var(--candy-pink));
    color: #fff; border: none; border-radius: var(--radius-pill);
    padding: 10px 22px; font-family: 'Nunito', sans-serif;
    font-weight: 800; font-size: 0.9rem; cursor: pointer;
    transition: opacity 0.2s;
  }
  .promo-btn:hover { opacity: 0.87; }

  /* ── Badge chips ── */
  .badge-chip {
    display: inline-flex; align-items: center; gap: 5px;
    background: #f0f4ff; color: var(--candy-purple);
    border: 1.5px solid #d8d5ff;
    border-radius: var(--radius-pill);
    padding: 5px 14px; font-size: 0.75rem; font-weight: 800;
  }

  /* ── Step indicator ── */
  .step-pill {
    display: inline-flex; align-items: center; justify-content: center;
    width: 36px; height: 36px; border-radius: 50%;
    font-family: 'Fredoka One', cursive; font-size: 1.1rem;
    color: #fff; flex-shrink: 0;
  }

  /* ── Trust strip ── */
  .trust-strip {
    display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;
    margin-top: 16px;
  }
  .trust-item {
    display: flex; align-items: center; gap: 5px;
    font-size: 0.76rem; font-weight: 700; color: var(--text-mid);
  }

  /* Icon helper */
  .ico { font-variation-settings: 'FILL' 1; }

  @media (max-width: 640px) {
    .co-section { border-radius: 14px; }
    .summary-card { border-radius: 14px; }
  }
`;

const Icon = ({ name, size = 18, color, filled = false }) => (
  <span
    className="material-symbols-outlined"
    style={{
      fontSize: size,
      lineHeight: 1,
      verticalAlign: 'middle',
      color: color || 'inherit',
      fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
    }}
  >
    {name}
  </span>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function CheckOut() {
  const { clearCart, cart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  /* ── Totals (unchanged logic) ── */
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax      = subtotal * 0.08;
  const total    = subtotal + tax;

  const handlePromo = () => { if (promoCode.trim()) setPromoApplied(true); };

  return (
    <>
      <style>{STYLES}</style>
      <div className="co-root">

        {/* ── Navigation ── */}
        <Navigation />

        {/* ── Hero Banner ── */}
        <div className="co-hero pt-32 pb-10 px-6 md:px-10">
          <div className="max-w-6xl mx-auto relative z-10">
            <p
              className="fredoka text-white text-sm uppercase tracking-widest mb-1"
              style={{ opacity: 0.85, letterSpacing: '0.18em' }}
            >
              Almost There!
            </p>
            <h1
              className="fredoka text-white text-4xl md:text-6xl mb-2"
              style={{ textShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
            >
              🎉 Checkout
            </h1>
            <p className="text-white font-bold text-base md:text-lg" style={{ opacity: 0.9 }}>
              You're one step away from bringing home some awesome toys!
            </p>

            {/* Progress breadcrumb */}
            <div className="flex items-center gap-2 mt-6 flex-wrap">
              {['🛒 Cart', '📦 Shipping', '💳 Payment', '✅ Done'].map((step, i) => (
                <React.Fragment key={i}>
                  <span
                    className="text-white text-sm font-800 px-3 py-1 rounded-full"
                    style={{
                      background: i <= 1 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.12)',
                      fontWeight: i <= 1 ? 800 : 600,
                      opacity: i <= 1 ? 1 : 0.65,
                    }}
                  >
                    {step}
                  </span>
                  {i < 3 && <span className="text-white opacity-50 text-xs">›</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main Content ── */}
        <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ══════════ LEFT — Forms ══════════ */}
            <div className="flex-1 space-y-8">

              {/* ── Shipping Section ── */}
              <div className="co-section" style={{ animationDelay: '0s' }}>
                <div className="section-bar" />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span
                      className="step-pill"
                      style={{ background: 'linear-gradient(135deg, #48dbfb, #a29bfe)' }}
                    >
                      1
                    </span>
                    <div>
                      <h2 className="fredoka text-2xl" style={{ color: '#2d3436' }}>
                        Shipping Address
                      </h2>
                      <p className="text-sm font-600 mt-0.5" style={{ color: '#636e72', fontWeight: 600 }}>
                        Where should we send your toys?
                      </p>
                    </div>
                    <span className="ml-auto text-2xl">📦</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="co-label">First Name</label>
                      <input className="co-input" placeholder="Alex" type="text" />
                    </div>
                    <div>
                      <label className="co-label">Last Name</label>
                      <input className="co-input" placeholder="Workshop" type="text" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="co-label">Street Address</label>
                      <div className="relative">
                        <input
                          className="co-input"
                          style={{ paddingLeft: 44 }}
                          placeholder="123 Playful Lane"
                          type="text"
                        />
                        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}>
                          <Icon name="home" size={18} color="#a29bfe" filled />
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="co-label">City</label>
                      <input className="co-input" placeholder="Brickville" type="text" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="co-label">State</label>
                        <input className="co-input" placeholder="CA" type="text" />
                      </div>
                      <div>
                        <label className="co-label">Zip Code</label>
                        <input className="co-input" placeholder="90210" type="text" />
                      </div>
                    </div>
                  </div>

                  {/* Delivery option pills */}
                  <div className="mt-6">
                    <label className="co-label mb-3">Delivery Speed</label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { label: '🚚 Standard', sub: '5–7 days · Free', active: true },
                        { label: '⚡ Express', sub: '2–3 days · Rs. 120', active: false },
                        { label: '🚀 Next Day', sub: '1 day · Rs. 250', active: false },
                      ].map((opt, i) => (
                        <div
                          key={i}
                          className="flex flex-col px-5 py-3 rounded-2xl cursor-pointer transition-all"
                          style={{
                            border: opt.active ? '2.5px solid #a29bfe' : '2px solid #e8eaf6',
                            background: opt.active ? '#f5f0ff' : '#f8f9ff',
                            minWidth: 120,
                          }}
                        >
                          <span style={{ fontWeight: 800, fontSize: '0.88rem', color: '#2d3436' }}>{opt.label}</span>
                          <span style={{ fontSize: '0.72rem', color: '#636e72', marginTop: 2 }}>{opt.sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Payment Section ── */}
              <div className="co-section" style={{ animationDelay: '0.1s' }}>
                <div className="section-bar green" />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span
                      className="step-pill"
                      style={{ background: 'linear-gradient(135deg, #1dd1a1, #48dbfb)' }}
                    >
                      2
                    </span>
                    <div>
                      <h2 className="fredoka text-2xl" style={{ color: '#2d3436' }}>
                        Payment Details
                      </h2>
                      <p className="text-sm mt-0.5" style={{ color: '#636e72', fontWeight: 600 }}>
                        Your info is always encrypted 🔒
                      </p>
                    </div>
                    <span className="ml-auto text-2xl">💳</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className="co-label">Cardholder Name</label>
                      <input className="co-input" placeholder="Alex Workshop" type="text" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="co-label">Card Number</label>
                      <div className="relative">
                        <input
                          className="co-input"
                          style={{ paddingLeft: 44, letterSpacing: '0.15em' }}
                          placeholder="0000 0000 0000 0000"
                          type="text"
                          maxLength={19}
                        />
                        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}>
                          <Icon name="credit_card" size={18} color="#1dd1a1" filled />
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="co-label">Expiry Date</label>
                      <input className="co-input" placeholder="MM / YY" type="text" maxLength={7} />
                    </div>
                    <div>
                      <label className="co-label">CVV</label>
                      <div className="relative">
                        <input
                          className="co-input"
                          style={{ paddingLeft: 44 }}
                          placeholder="• • •"
                          type="password"
                          maxLength={4}
                        />
                        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}>
                          <Icon name="lock" size={16} color="#636e72" filled />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Security badges */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="badge-chip">
                      <Icon name="verified_user" size={14} color="#1dd1a1" filled />
                      SSL Secured
                    </span>
                    <span className="badge-chip">
                      <Icon name="shield" size={14} color="#a29bfe" filled />
                      256-bit Encrypted
                    </span>
                    <span className="badge-chip">
                      <Icon name="replay" size={14} color="#ff9f43" filled />
                      Easy Returns
                    </span>
                  </div>

                  {/* Payment method icons */}
                  <div className="flex gap-4 mt-5 opacity-50">
                    <Icon name="credit_card" size={28} color="#2980b9" filled />
                    <Icon name="account_balance_wallet" size={28} color="#27ae60" filled />
                    <Icon name="contactless" size={28} color="#8e44ad" filled />
                    <Icon name="phone_iphone" size={28} color="#e74c3c" filled />
                  </div>
                </div>
              </div>
            </div>

            {/* ══════════ RIGHT — Order Summary ══════════ */}
            <aside style={{ width: '100%', maxWidth: 400 }}>
              <div className="summary-card">

                {/* Top header */}
                <div className="summary-top">
                  <h3 className="fredoka text-2xl mb-1" style={{ color: '#2d3436' }}>
                    📋 Order Summary
                  </h3>
                  <p className="text-sm font-600" style={{ color: '#636e72', fontWeight: 600 }}>
                    {cart.reduce((s, i) => s + i.quantity, 0)} items in your bag
                  </p>
                </div>

                <div className="px-7 py-6">

                  {/* Item list */}
                  <div className="space-y-1 mb-2">
                    {cart.map(item => (
                      <div key={item.id} className="order-item">
                        <img
                          className="order-img"
                          src={item.image}
                          alt={item.name}
                        />
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-800 text-sm truncate"
                            style={{ fontWeight: 800, color: '#2d3436' }}
                          >
                            {item.name}
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: '#b2bec3', fontWeight: 600 }}>
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <span
                          className="fredoka text-base whitespace-nowrap"
                          style={{ color: '#a29bfe' }}
                        >
                          Rs. {(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <hr className="sum-divider" style={{ margin: '16px 0' }} />

                  <div className="sum-row">
                    <span style={{ color: '#636e72', fontWeight: 600, fontSize: '0.9rem' }}>Subtotal</span>
                    <span style={{ fontWeight: 800, color: '#2d3436' }}>Rs. {subtotal.toFixed(2)}</span>
                  </div>

                  <div className="sum-row">
                    <span style={{ color: '#636e72', fontWeight: 600, fontSize: '0.9rem' }}>
                      🚚 Shipping
                    </span>
                    <span style={{ fontWeight: 800, color: '#1dd1a1' }}>FREE</span>
                  </div>

                  <div className="sum-row">
                    <span style={{ color: '#636e72', fontWeight: 600, fontSize: '0.9rem' }}>Tax (8%)</span>
                    <span style={{ fontWeight: 700, color: '#2d3436' }}>Rs. {tax.toFixed(2)}</span>
                  </div>

                  {promoApplied && (
                    <div className="sum-row">
                      <span style={{ color: '#fd79a8', fontWeight: 700, fontSize: '0.9rem' }}>
                        🎉 Promo Applied
                      </span>
                      <span style={{ fontWeight: 700, color: '#fd79a8' }}>− Rs. 50.00</span>
                    </div>
                  )}

                  <hr className="sum-divider" />

                  <div className="sum-row" style={{ paddingTop: 8 }}>
                    <span className="fredoka text-xl" style={{ color: '#2d3436' }}>
                      💰 Total
                    </span>
                    <span
                      className="fredoka text-3xl"
                      style={{
                        background: 'linear-gradient(135deg, #a29bfe, #fd79a8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Rs. {(promoApplied ? total - 50 : total).toFixed(2)}
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    className="cta-btn"
                    style={{ marginTop: 24 }}
                    onClick={() => {
                      alert('Order placed successfully! 🎉');
                      clearCart();
                    }}
                  >
                    ✨ Complete Purchase
                  </button>

                  <p
                    className="text-center mt-3"
                    style={{ fontSize: '0.72rem', color: '#b2bec3', lineHeight: 1.5 }}
                  >
                    By clicking "Complete Purchase" you agree to LingoToys'&nbsp;
                    <span style={{ color: '#a29bfe', fontWeight: 700, cursor: 'pointer' }}>Terms</span> &amp;&nbsp;
                    <span style={{ color: '#a29bfe', fontWeight: 700, cursor: 'pointer' }}>Privacy Policy</span>.
                  </p>

                  {/* Trust strip */}
                  <div className="trust-strip">
                    <span className="trust-item">
                      <Icon name="lock" size={14} color="#1dd1a1" filled /> Secure
                    </span>
                    <span className="trust-item">
                      <Icon name="verified" size={14} color="#a29bfe" filled /> Verified
                    </span>
                    <span className="trust-item">
                      <Icon name="replay" size={14} color="#ff9f43" filled /> Easy Returns
                    </span>
                  </div>

                  {/* Promo code */}
                  <div className="promo-box">
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.74rem', fontWeight: 800,
                        textTransform: 'uppercase', letterSpacing: '0.12em',
                        color: '#a29bfe', marginBottom: 10,
                      }}
                    >
                      🎟 Promo Code
                    </label>
                    {promoApplied ? (
                      <p style={{ color: '#1dd1a1', fontWeight: 800, fontSize: '0.9rem' }}>
                        ✅ Code applied! You saved Rs. 50.
                      </p>
                    ) : (
                      <div className="flex gap-2">
                        <input
                          className="promo-input"
                          placeholder="PLAY20"
                          type="text"
                          value={promoCode}
                          onChange={e => setPromoCode(e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && handlePromo()}
                        />
                        <button className="promo-btn" onClick={handlePromo}>Apply</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </main>

        {/* ── Footer ── */}
        <Footer />
      </div>
    </>
  );
}