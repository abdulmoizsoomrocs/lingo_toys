import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaYoutube, FaInstagram, FaTiktok, FaFacebook,
} from 'react-icons/fa';

/* ── Styles ──────────────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;900&family=Baloo+2:wght@500;700;800&display=swap');

  @keyframes float {
    0%,100% { transform: translateY(0px) rotate(-2deg); }
    50%      { transform: translateY(-10px) rotate(2deg); }
  }
  @keyframes float2 {
    0%,100% { transform: translateY(0px) rotate(3deg); }
    50%      { transform: translateY(-14px) rotate(-3deg); }
  }
  @keyframes float3 {
    0%,100% { transform: translateY(0px) rotate(0deg) scale(1); }
    50%      { transform: translateY(-8px) rotate(5deg) scale(1.06); }
  }
  @keyframes shimmer-text {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes wiggle {
    0%,100% { transform: rotate(-4deg) scale(1); }
    50%      { transform: rotate(4deg) scale(1.12); }
  }
  @keyframes pop-in {
    from { opacity:0; transform:scale(0.7) translateY(10px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes wave {
    0%   { d: path("M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 L1080,120 L0,120 Z"); }
    50%  { d: path("M0,20 C180,60 360,10 540,50 C720,90 900,10 1080,30 L1080,120 L0,120 Z"); }
    100% { d: path("M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 L1080,120 L0,120 Z"); }
  }

  .ft-root {
    font-family: 'Baloo 2', sans-serif;
    background: #f0f9ff;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  /* Bubbly background blobs */
  .ft-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(55px);
    opacity: 0.22;
    pointer-events: none;
  }
  .ft-blob-1 { width:320px; height:320px; background:#d946ef; top:-80px; left:-60px; animation: float 7s ease-in-out infinite; }
  .ft-blob-2 { width:260px; height:260px; background:#10b981; bottom:40px; left:20%; animation: float2 9s ease-in-out infinite; }
  .ft-blob-3 { width:300px; height:300px; background:#dbeafe; top:30px; right:10%; animation: float3 8s ease-in-out infinite; }
  .ft-blob-4 { width:220px; height:220px; background:#f59e0b; bottom:0; right:5%; animation: float 10s ease-in-out infinite 1s; }

  /* Wave separator at top */
  .ft-wave {
    display: block;
    width: 100%;
    height: 70px;
    margin-bottom: -4px;
  }

  /* Inner content */
  .ft-inner {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 1rem;
  }

  /* Brand row */
  .ft-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2.8rem;
    gap: 0.75rem;
    animation: pop-in 0.5s ease;
  }
  .ft-brand-logo {
    height: 56px;
    width: auto;
    object-fit: contain;
    border-radius: 28px;
    mix-blend-mode: multiply;
    filter: brightness(1.1) contrast(1.05);
    transition: filter 0.2s, transform 0.2s;
    cursor: pointer;
    display: inline-block;
  }
  .ft-brand:hover .ft-brand-logo {
    filter: brightness(1.15) contrast(1.1) drop-shadow(0 1px 4px rgba(0,0,0,0.1));
    transform: scale(1.04);
  }
  .ft-brand-name {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: clamp(2rem, 5vw, 3rem);
    background: linear-gradient(135deg, #ef4444, #f59e0b, #10b981, #3b82f6, #d946ef, #ef4444);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer-text 4s ease infinite;
    letter-spacing: -0.02em;
    line-height: 1;
  }
  .ft-tagline {
    font-size: 0.9rem;
    color: #3b82f6;
    font-weight: 700;
    letter-spacing: 0.04em;
    opacity: 0.8;
  }

  /* Social icons */
  .ft-socials {
    display: flex;
    justify-content: center;
    gap: 0.85rem;
    margin-top: 0.5rem;
  }
  .ft-social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px; height: 46px;
    border-radius: 50%;
    font-size: 1.2rem;
    color: #fff;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 14px rgba(0,0,0,0.15);
    flex-shrink: 0;
  }
  .ft-social-btn:hover { transform: scale(1.18) rotate(-6deg); box-shadow: 0 8px 22px rgba(0,0,0,0.2); }
  .ft-yt  { background: linear-gradient(135deg, #ef4444, #ef4444); }
  .ft-ig  { background: linear-gradient(135deg, #f59e0b, #d946ef, #d946ef); }
  .ft-tt  { background: linear-gradient(135deg, #1e293b, #475569); }
  .ft-fb  { background: linear-gradient(135deg, #3b82f6, #1e40af); }

  /* Grid of link cards */
  .ft-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.25rem;
    margin-bottom: 2.5rem;
  }

  .ft-card {
    border-radius: 20px;
    padding: 1.25rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    position: relative;
    overflow: hidden;
    animation: pop-in 0.4s ease backwards;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .ft-card:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }

  .ft-card-shop    { background: linear-gradient(145deg, #fce7f3, #f8d4e8); box-shadow: 0 4px 20px rgba(217,70,239,0.15); }
  .ft-card-support { background: linear-gradient(145deg, #f0f9ff, #dbeafe); box-shadow: 0 4px 20px rgba(59,130,246,0.15); }
  .ft-card-mission { background: linear-gradient(145deg, #f0fdf4, #dcfce7); box-shadow: 0 4px 20px rgba(16,185,129,0.15); }
  .ft-card-news    { background: linear-gradient(145deg, #fffbeb, #fef3c7); box-shadow: 0 4px 20px rgba(245,158,11,0.15); }

  .ft-card-emoji {
    font-size: 2rem;
    line-height: 1;
    animation: wiggle 3s ease-in-out infinite;
    display: inline-block;
  }
  .ft-card-title {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 0.92rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .ft-card-shop    .ft-card-title { color: #d63a8a; }
  .ft-card-support .ft-card-title { color: #0e7ab5; }
  .ft-card-mission .ft-card-title { color: #2a9048; }
  .ft-card-news    .ft-card-title { color: #b07000; }

  .ft-card-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.35rem; }
  .ft-card-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.85rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 50px;
    padding: 0.25rem 0.6rem;
    transition: background 0.15s, transform 0.15s;
    color: #555;
  }
  .ft-card-shop    .ft-card-link:hover { background: rgba(255,107,157,0.15); color: #d63a8a; transform: translateX(3px); }
  .ft-card-support .ft-card-link:hover { background: rgba(14,122,181,0.12); color: #0e7ab5; transform: translateX(3px); }
  .ft-card-mission .ft-card-link:hover { background: rgba(42,144,72,0.12);  color: #2a9048; transform: translateX(3px); }

  /* Newsletter inside card */
  .ft-newsletter-form { display: flex; flex-direction: column; gap: 0.55rem; margin-top: 0.2rem; }
  .ft-email-input {
    border: 2px solid #ffd166;
    border-radius: 50px;
    padding: 0.45rem 0.85rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    background: rgba(255,255,255,0.7);
    outline: none;
    color: #333;
    transition: border-color 0.2s, box-shadow 0.2s;
    width: 100%;
    box-sizing: border-box;
  }
  .ft-email-input::placeholder { color: #cca000; opacity: 0.7; }
  .ft-email-input:focus { border-color: #f9a03f; box-shadow: 0 0 0 3px rgba(249,160,63,0.2); }
  .ft-sub-btn {
    border: none;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 0.82rem;
    color: #fff;
    background: linear-gradient(135deg, #f9a03f, #f7c52e);
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(249,160,63,0.4);
    transition: transform 0.18s, box-shadow 0.18s;
    letter-spacing: 0.03em;
  }
  .ft-sub-btn:hover { transform: scale(1.05); box-shadow: 0 6px 18px rgba(249,160,63,0.5); }
  .ft-sub-btn:active { transform: scale(0.97); }

  /* Bottom strip */
  .ft-bottom {
    position: relative;
    z-index: 2;
    border-top: 2px dashed rgba(185,122,255,0.25);
    padding: 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    text-align: center;
  }
  @media (min-width: 640px) {
    .ft-bottom { flex-direction: row; justify-content: space-between; text-align: left; }
  }
  .ft-copy {
    font-size: 0.78rem;
    color: #9b5cc4;
    font-weight: 700;
    opacity: 0.75;
    line-height: 1.6;
  }
  .ft-copy span { color: #d63a8a; opacity: 1; }
  .ft-legal {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem 1rem;
  }
  .ft-legal a {
    font-size: 0.76rem;
    font-weight: 700;
    color: #9b5cc4;
    text-decoration: none;
    opacity: 0.65;
    transition: opacity 0.15s, color 0.15s;
  }
  .ft-legal a:hover { opacity: 1; color: #d63a8a; }

  /* floating decorative stars */
  .ft-stars {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }
  .ft-star {
    position: absolute;
    font-size: 1.2rem;
    opacity: 0.18;
    animation: float 6s ease-in-out infinite;
  }
`;

function injectStyles() {
  if (document.getElementById('lingo-footer-styles')) return;
  const el = document.createElement('style');
  el.id = 'lingo-footer-styles';
  el.textContent = STYLES;
  document.head.appendChild(el);
}

const STARS = ['⭐','🌟','✨','💫','🎈','🎀','🎁','🎊','🌈'];
const STAR_POSITIONS = [
  { top:'10%', left:'3%',  delay:'0s',   size:'1rem'   },
  { top:'25%', left:'92%', delay:'1.2s', size:'1.4rem' },
  { top:'55%', left:'8%',  delay:'2s',   size:'0.9rem' },
  { top:'70%', left:'88%', delay:'0.6s', size:'1.2rem' },
  { top:'85%', left:'45%', delay:'3s',   size:'1rem'   },
  { top:'40%', left:'50%', delay:'1.8s', size:'0.8rem' },
];

export default function Footer() {
  injectStyles();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.includes('@')) { setSubscribed(true); }
  };

  return (
    <footer className="ft-root">
      {/* bg blobs */}
      <div className="ft-blob ft-blob-1" />
      <div className="ft-blob ft-blob-2" />
      <div className="ft-blob ft-blob-3" />
      <div className="ft-blob ft-blob-4" />

      {/* floating stars */}
      <div className="ft-stars" aria-hidden="true">
        {STAR_POSITIONS.map((s, i) => (
          <span
            key={i}
            className="ft-star"
            style={{ top:s.top, left:s.left, animationDelay:s.delay, fontSize:s.size }}
          >
            {STARS[i % STARS.length]}
          </span>
        ))}
      </div>

      {/* Wave top */}
      <svg className="ft-wave" viewBox="0 0 1080 70" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 L1080,70 L0,70 Z" fill="#fdf4ff" />
        <path d="M0,50 C200,10 400,70 600,35 C800,0 950,60 1080,45 L1080,70 L0,70 Z" fill="rgba(255,107,157,0.07)" />
      </svg>

      <div className="ft-inner">
        {/* Brand */}
        <div className="ft-brand">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src="https://res.cloudinary.com/divpqqbtn/image/upload/f_auto,q_auto,w_300/logo_oglzza"
              alt="LingoToys Logo"
              className="ft-brand-logo"
            />          <div className="ft-brand-name"> LingoToys</div>

          </Link>
          

          <p className="ft-tagline">Where Play Meets Learning ✨</p>
          <div className="ft-socials">
            {[
              { Icon: FaYoutube, cls: 'ft-yt',  href: 'https://www.youtube.com/@Lingo_Toys',  label: 'YouTube'   },
              { Icon: FaInstagram, cls: 'ft-ig', href: 'https://www.instagram.com/lingo_toys?igsh=MTdvcTJyNXpyaWUyaQ%3D%3D&utm_source=qr', label: 'Instagram' },
              { Icon: FaTiktok,  cls: 'ft-tt',  href: 'https://www.tiktok.com/@lingo_toys?_r=1&_t=ZS-95YzpA6v9x2', label: 'TikTok'    },
              { Icon: FaFacebook, cls: 'ft-fb', href: 'https://www.facebook.com/share/18oZG4TdrF/?mibextid=wwXIfr', label: 'Facebook'  },
            ].map(({ Icon, cls, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={`ft-social-btn ${cls}`} aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Link cards */}
        <div className="ft-grid">
          {/* Shop */}
          <div className="ft-card ft-card-shop" style={{ animationDelay: '0.05s' }}>
            <span className="ft-card-emoji">🛍️</span>
            <div className="ft-card-title">Shop</div>
            <ul className="ft-card-links">
              {['STEM Kits','Anime','Educational','Best Sellers'].map(l => (
                <li key={l}><a href="#" className="ft-card-link">→ {l}</a></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="ft-card ft-card-support" style={{ animationDelay: '0.1s' }}>
            <span className="ft-card-emoji">💬</span>
            <div className="ft-card-title">Support</div>
            <ul className="ft-card-links">
              {['Contact','FAQ','Shipping','Returns'].map(l => (
                <li key={l}><a href="#" className="ft-card-link">→ {l}</a></li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div className="ft-card ft-card-mission" style={{ animationDelay: '0.15s' }}>
            <span className="ft-card-emoji">🌱</span>
            <div className="ft-card-title">Mission</div>
            <ul className="ft-card-links">
              {['About','Values','Sustainability','Wholesale'].map(l => (
                <li key={l}><a href="#" className="ft-card-link">→ {l}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="ft-card ft-card-news" style={{ animationDelay: '0.2s' }}>
            <span className="ft-card-emoji">📬</span>
            <div className="ft-card-title">Stay Updated</div>
            {subscribed ? (
              <p style={{ fontSize:'0.88rem', fontWeight:700, color:'#2a9048', margin:0 }}>
                🎉 You're in!
              </p>
            ) : (
              <div className="ft-newsletter-form">
                <input
                  type="email"
                  className="ft-email-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                />
                <button className="ft-sub-btn" onClick={handleSubscribe}>
                  Subscribe 🚀
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="ft-bottom">
        <p className="ft-copy">
          © 2026 LingoToys. Built for Play. 🎮<br />
          Developed by <span>Moiz Developers</span>
        </p>
        <nav className="ft-legal" aria-label="Legal links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookies</a>
        </nav>
      </div>
    </footer>
  );
}