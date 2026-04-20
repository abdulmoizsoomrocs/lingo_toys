import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/* ─── Keyframe injection (once) ──────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;900&family=Poppins:wght@500;700&display=swap');

  @keyframes shimmer {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-badge {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,80,120,0.5); }
    50%       { transform: scale(1.15); box-shadow: 0 0 0 5px rgba(255,80,120,0); }
  }
  @keyframes flip {
    0%   { transform: rotateX(0deg);   }
    45%  { transform: rotateX(-90deg); opacity: 0.3; }
    55%  { transform: rotateX(90deg);  opacity: 0.3; }
    100% { transform: rotateX(0deg);   }
  }
  @keyframes rainbowBorder {
    0%   { border-color: #ff6b9d; }
    20%  { border-color: #f9a03f; }
    40%  { border-color: #ffe066; }
    60%  { border-color: #6bcfff; }
    80%  { border-color: #b97aff; }
    100% { border-color: #ff6b9d; }
  }
  @keyframes menuWipe {
    from { opacity: 0; transform: translateY(-6px) scaleY(0.95); transform-origin: top; }
    to   { opacity: 1; transform: translateY(0)  scaleY(1); }
  }

  .nav-root {
    font-family: 'Poppins', sans-serif;
    position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
    background: linear-gradient(
      135deg,
      rgba(255,107,157,0.22) 0%,
      rgba(249,160,63,0.18) 20%,
      rgba(255,224,102,0.16) 40%,
      rgba(107,207,255,0.18) 60%,
      rgba(185,122,255,0.22) 80%,
      rgba(255,107,157,0.22) 100%
    );
    backdrop-filter: blur(18px) saturate(1.6);
    -webkit-backdrop-filter: blur(18px) saturate(1.6);
    border-bottom: 1px solid rgba(255,255,255,0.28);
    box-shadow: 0 4px 32px rgba(100,60,200,0.08), 0 1px 0 rgba(255,255,255,0.3) inset;
  }

  /* animated rainbow glow line at very top */
  .nav-root::before {
    content: '';
    display: block;
    height: 2.5px;
    background: linear-gradient(90deg, #ff6b9d, #f9a03f, #ffe066, #6bcfff, #b97aff, #ff6b9d);
    background-size: 300% 100%;
    animation: shimmer 4s linear infinite;
  }

  .nav-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.25rem;
    display: flex;
    align-items: center;
    height: 62px;
    gap: 0;
  }

  /* ── Logo ── */
  .nav-logo {
    display: flex; align-items: center; gap: 0.55rem;
    text-decoration: none;
    flex-shrink: 0;
    transition: transform 0.2s, filter 0.2s;
  }
  .nav-logo:hover { transform: scale(1.04); filter: drop-shadow(0 2px 8px rgba(0,0,0,0.12)); }
  .nav-logo img {
    height: 38px;
    width: auto;
    object-fit: contain;
    /* Rounded corners */
    border-radius: 19px;
    /* Blend modes to hide white background */
    mix-blend-mode: multiply;
    /* Brightness and contrast adjustments for clean look */
    filter: brightness(1.1) contrast(1.05);
    /* Smooth transitions */
    transition: filter 0.2s, transform 0.2s;
  }
  .nav-logo:hover img { filter: brightness(1.15) contrast(1.1) drop-shadow(0 1px 4px rgba(0,0,0,0.1)); }
  .nav-logo-text {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 1.25rem;
    background: linear-gradient(135deg, #d946a8, #7c3aed);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
    display: none;
  }
  @media (min-width: 480px) { .nav-logo-text { display: block; } }

  /* ── Desktop links ── */
  .nav-links {
    display: none;
    align-items: center;
    gap: 0.25rem;
    margin-left: 1.5rem;
  }
  @media (min-width: 768px) { .nav-links { display: flex; } }

  .nav-link {
    display: flex; align-items: center; gap: 0.35rem;
    color: rgba(50,20,90,0.85);
    font-weight: 700;
    font-size: 0.88rem;
    text-decoration: none;
    padding: 0.45rem 0.85rem;
    border-radius: 50px;
    transition: background 0.18s, color 0.18s, transform 0.18s;
    white-space: nowrap;
  }
  .nav-link:hover {
    background: rgba(255,255,255,0.42);
    color: #5b21b6;
    transform: translateY(-1px);
  }
  .nav-link.active {
    background: rgba(255,255,255,0.55);
    color: #7c3aed;
    animation: rainbowBorder 3s linear infinite;
    border: 1px solid #b97aff;
  }
  .nav-link-icon { font-size: 1rem; }

  /* ── Countdown ── */
  .nav-timer-wrap {
    display: none;
    align-items: center;
    gap: 0.6rem;
    background: rgba(255,255,255,0.22);
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 50px;
    padding: 0.35rem 0.9rem 0.35rem 0.75rem;
    flex-shrink: 0;
  }
  @media (min-width: 1024px) { .nav-timer-wrap { display: flex; } }

  .nav-timer-label {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(60,20,100,0.6);
    white-space: nowrap;
  }

  .nav-timer-units { display: flex; align-items: center; gap: 0.3rem; }
  .nav-timer-sep { font-weight: 900; color: rgba(120,60,200,0.4); font-size: 1rem; line-height: 1; margin-bottom: 0.6rem; }

  .nav-timer-unit { display: flex; flex-direction: column; align-items: center; gap: 0.15rem; }
  .nav-timer-digit {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 0.9rem;
    min-width: 2rem;
    text-align: center;
    padding: 0.25rem 0.4rem;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    animation: flip 0.4s ease;
    animation-play-state: paused;
  }
  .nav-timer-digit.flip-anim { animation-play-state: running; }
  .nav-timer-digit-d { background: linear-gradient(135deg, #f472b6, #db2777); }
  .nav-timer-digit-h { background: linear-gradient(135deg, #fb923c, #ea580c); }
  .nav-timer-digit-m { background: linear-gradient(135deg, #facc15, #d97706); }
  .nav-timer-digit-s { background: linear-gradient(135deg, #a78bfa, #7c3aed); }
  .nav-timer-sublabel {
    font-size: 0.6rem;
    font-weight: 700;
    color: rgba(70,30,120,0.55);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  /* ── Right actions ── */
  .nav-actions { display: flex; align-items: center; gap: 0.55rem; margin-left: auto; }

  .nav-cart-btn {
    display: flex; align-items: center; gap: 0.4rem;
    background: linear-gradient(135deg, #38bdf8, #34d399);
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    border: none;
    border-radius: 50px;
    padding: 0.48rem 1rem 0.48rem 0.75rem;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 3px 12px rgba(56,189,248,0.35);
    transition: transform 0.18s, box-shadow 0.18s, filter 0.18s;
    position: relative;
    flex-shrink: 0;
  }
  .nav-cart-btn:hover {
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 6px 18px rgba(56,189,248,0.45);
    filter: brightness(1.06);
  }
  .nav-cart-btn:active { transform: scale(0.97); }
  .nav-cart-icon { font-size: 1.1rem; }
  .nav-cart-label { display: none; }
  @media (min-width: 480px) { .nav-cart-label { display: inline; } }

  .nav-auth-btn {
    display: flex; align-items: center; gap: 0.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    border: none;
    border-radius: 50px;
    padding: 0.48rem 1rem;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.18s;
    flex-shrink: 0;
  }

  /* Login button - Light glass style */
  .nav-auth-btn.login {
    background: rgba(255,255,255,0.35);
    color: #5b21b6;
    border: 1.5px solid rgba(255,255,255,0.5);
    box-shadow: 0 4px 16px rgba(91,33,182,0.15);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .nav-auth-btn.login:hover {
    background: rgba(255,255,255,0.5);
    border-color: rgba(255,255,255,0.8);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(91,33,182,0.25);
    color: #7c3aed;
  }
  .nav-auth-btn.login:active { transform: scale(0.97); }

  /* Register button - Gradient style */
  .nav-auth-btn.register {
    background: linear-gradient(135deg, #a29bfe 0%, #fd79a8 50%, #ff6b6b 100%);
    color: #fff;
    box-shadow: 0 4px 16px rgba(253,121,168,0.4);
    border: 1.5px solid rgba(255,255,255,0.4);
  }
  .nav-auth-btn.register:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 24px rgba(253,121,168,0.5);
    filter: brightness(1.08);
    border-color: rgba(255,255,255,0.6);
  }
  .nav-auth-btn.register:active { transform: scale(0.95); }

  .nav-badge {
    position: absolute;
    top: -7px; right: -7px;
    width: 20px; height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff4d7d, #f43f5e);
    color: #fff;
    font-size: 0.65rem;
    font-weight: 900;
    display: flex; align-items: center; justify-content: center;
    ring: 2px solid white;
    box-shadow: 0 0 0 2px rgba(255,255,255,0.8);
    animation: pulse-badge 1.8s ease-in-out infinite;
  }

  /* ── Hamburger ── */
  .nav-hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 38px; height: 38px;
    background: rgba(255,255,255,0.3);
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.18s;
    margin-right: 0.75rem;
  }
  @media (min-width: 768px) { .nav-hamburger { display: none; } }
  .nav-hamburger:hover { background: rgba(255,255,255,0.5); }
  .nav-hamburger span {
    display: block;
    height: 2px;
    background: #5b21b6;
    border-radius: 2px;
    transition: transform 0.25s, opacity 0.25s;
    transform-origin: center;
  }
  .nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  /* ── Divider spacer ── */
  .nav-spacer { flex: 1; }

  /* ── Mobile timer pill ── */
  .mobile-timer {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    overflow-x: auto;
    padding: 0.35rem 1.25rem 0.45rem;
    background: rgba(255,255,255,0.12);
    border-top: 1px solid rgba(255,255,255,0.2);
    scrollbar-width: none;
  }
  .mobile-timer::-webkit-scrollbar { display: none; }
  @media (min-width: 1024px) { .mobile-timer { display: none; } }
  .mobile-timer-label {
    font-size: 0.62rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    color: rgba(60,20,100,0.6);
    white-space: nowrap;
  }
  .mobile-timer-digit {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 0.78rem;
    padding: 0.2rem 0.45rem;
    border-radius: 7px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    white-space: nowrap;
  }
  .mobile-timer-sep { font-weight: 900; color: rgba(120,60,200,0.4); font-size: 0.85rem; }

  /* ── Mobile menu drawer ── */
  .mobile-menu {
    animation: menuWipe 0.22s ease;
    background: linear-gradient(
      160deg,
      rgba(255,107,157,0.18),
      rgba(249,160,63,0.14),
      rgba(185,122,255,0.18)
    );
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-top: 1px solid rgba(255,255,255,0.25);
    padding: 0.75rem 1.25rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  @media (min-width: 768px) { .mobile-menu { display: none !important; } }

  .mobile-link {
    display: flex; align-items: center; gap: 0.6rem;
    color: rgba(50,20,90,0.9);
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    padding: 0.65rem 0.85rem;
    border-radius: 12px;
    transition: background 0.15s, transform 0.15s;
    animation: fadeInUp 0.22s ease backwards;
  }
  .mobile-link:nth-child(1) { animation-delay: 0.03s; }
  .mobile-link:nth-child(2) { animation-delay: 0.07s; }
  .mobile-link:hover {
    background: rgba(255,255,255,0.45);
    transform: translateX(4px);
  }
  .mobile-search {
    display: flex; align-items: center; gap: 0.5rem;
    background: rgba(255,255,255,0.3);
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 12px;
    padding: 0.6rem 0.85rem;
    margin-top: 0.3rem;
    animation: fadeInUp 0.22s 0.1s ease backwards;
  }
  .mobile-search-icon { font-size: 1rem; color: #7c3aed; }
  .mobile-search input {
    background: transparent;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    color: rgba(40,10,80,0.85);
    width: 100%;
  }
  .mobile-search input::placeholder { color: rgba(100,60,180,0.45); }
`;

function injectStyles() {
  if (document.getElementById('lingo-nav-styles')) return;
  const el = document.createElement('style');
  el.id = 'lingo-nav-styles';
  el.textContent = STYLES;
  document.head.appendChild(el);
}

/* ── Flip digit component ─────────────────────────────────────── */
function FlipDigit({ value, colorClass }) {
  const [flipping, setFlipping] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      setFlipping(true);
      const t = setTimeout(() => setFlipping(false), 400);
      prevValue.current = value;
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div
      className={`nav-timer-digit ${colorClass}${flipping ? ' flip-anim' : ''}`}
    >
      {String(value).padStart(2, '0')}
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { cart } = useCart();
  const location = useLocation();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  injectStyles();

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 30);
    const tick = () => {
      const diff = target - new Date();
      if (diff > 0) {
        setTimeLeft({
          days:    Math.floor(diff / 86400000),
          hours:   Math.floor((diff / 3600000) % 24),
          minutes: Math.floor((diff / 60000) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const isActive = (path) => location.pathname === path;

  const TimerUnits = ({ small = false }) => (
    <>
      {[
        { v: timeLeft.days,    cls: 'nav-timer-digit-d', sub: small ? 'D' : 'Days'  },
        { v: timeLeft.hours,   cls: 'nav-timer-digit-h', sub: small ? 'H' : 'Hrs'   },
        { v: timeLeft.minutes, cls: 'nav-timer-digit-m', sub: small ? 'M' : 'Min'   },
        { v: timeLeft.seconds, cls: 'nav-timer-digit-s', sub: small ? 'S' : 'Sec'   },
      ].map(({ v, cls, sub }, i) => (
        <React.Fragment key={sub}>
          {i > 0 && <span className={small ? 'mobile-timer-sep' : 'nav-timer-sep'}>:</span>}
          {small ? (
            <span className={`mobile-timer-digit ${cls}`}>{String(v).padStart(2, '0')}</span>
          ) : (
            <div className="nav-timer-unit">
              <FlipDigit value={v} colorClass={cls} />
              <span className="nav-timer-sublabel">{sub}</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );

  return (
    <nav className="nav-root" role="navigation" aria-label="Main navigation">
      {/* Main bar */}
      <div className="nav-inner">
        {/* Hamburger (mobile) */}
        <button
          className={`nav-hamburger${isOpen ? ' open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span /><span /><span />
        </button>

        {/* Logo */}
        <Link to="/" className="nav-logo" aria-label="LingoToys home">
          <img
            src="https://res.cloudinary.com/divpqqbtn/image/upload/f_auto,q_auto,w_300/logo_oglzza"
            alt="LingoToys"
          />
          <span className="nav-logo-text">LingoToys</span>
        </Link>

        {/* Desktop nav links */}
        <div className="nav-links" role="menubar">
          <Link
            to="/shop"
            className={`nav-link${isActive('/shop') ? ' active' : ''}`}
            role="menuitem"
          >
            <span className="nav-link-icon">🎮</span> Toys
          </Link>
          <Link
            to="/about"
            className={`nav-link${isActive('/about') ? ' active' : ''}`}
            role="menuitem"
          >
            <span className="nav-link-icon">ℹ️</span> About Us
          </Link>
        </div>

        <div className="nav-spacer" />

        {/* Desktop countdown */}
        <div className="nav-timer-wrap" aria-label="Sale countdown timer">
          <span className="nav-timer-label">Launching in</span>
          <div className="nav-timer-units">
            <TimerUnits />
          </div>
        </div>

        <div className="nav-spacer" style={{ maxWidth: '1.25rem' }} />

        {/* Cart + Auth Buttons */}
        <div className="nav-actions">
          <Link to="/login" className="nav-auth-btn login" aria-label="Login">
            🔐 Login
          </Link>
          <Link to="/register" className="nav-auth-btn register" aria-label="Register">
            ✨ Register
          </Link>
          <Link to="/cart" className="nav-cart-btn" aria-label={`Cart, ${totalItems} items`}>
            <span className="nav-cart-icon material-symbols-outlined">shopping_cart</span>
            <span className="nav-cart-label">Cart</span>
            {totalItems > 0 && (
              <span className="nav-badge" aria-hidden="true">{totalItems}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile timer strip */}
      <div className="mobile-timer" aria-label="Sale countdown timer">
        <span className="mobile-timer-label">Launching in</span>
        <TimerUnits small />
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="mobile-menu" role="menu">
          <Link
            className="mobile-link"
            to="/shop"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            🎮 Toys
          </Link>
          <Link
            className="mobile-link"
            to="/about"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            ℹ️ About Us
          </Link>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '0.5rem', paddingTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
            <Link
              className="nav-auth-btn login"
              to="/login"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              style={{ flex: 1, textAlign: 'center', fontSize: '0.8rem' }}
            >
              🔐 Login
            </Link>
            <Link
              className="nav-auth-btn register"
              to="/register"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              style={{ flex: 1, textAlign: 'center', fontSize: '0.8rem' }}
            >
              ✨ Register
            </Link>
          </div>
          <div className="mobile-search">
            <span className="mobile-search-icon material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search toys…"
              aria-label="Search toys"
            />
          </div>
        </div>
      )}
    </nav>
  );
}