import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/* ── Injected styles ──────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Baloo+2:wght@500;600;700&display=swap');

  @keyframes shop-float {
    0%,100% { transform: translateY(0) rotate(6deg); }
    50%      { transform: translateY(-10px) rotate(8deg); }
  }
  @keyframes shop-shimmer {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes shop-badge-spin {
    from { transform: rotate(-12deg) scale(1); }
    to   { transform: rotate(-12deg) scale(1.08); }
  }
  @keyframes shop-pop {
    from { opacity:0; transform: scale(0.92) translateY(12px); }
    to   { opacity:1; transform: scale(1)    translateY(0); }
  }
  @keyframes shop-bounce-dot {
    0%,80%,100% { transform: scale(0); opacity:0.3; }
    40%         { transform: scale(1); opacity:1; }
  }
  @keyframes shop-page-flip {
    0%   { transform: scale(1); }
    40%  { transform: scale(0.88); }
    100% { transform: scale(1); }
  }

  .shop-root { font-family: 'Baloo 2', sans-serif; }

  /* ── Hero ── */
  .shop-hero {
    background: linear-gradient(135deg, #fff0a0 0%, #ffd6e7 40%, #d4f0ff 100%);
    border-bottom: 4px solid #ffb347;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 8px 32px rgba(255,140,60,0.12);
    overflow: hidden;
    position: relative;
    padding: 3rem 2rem;
    margin-bottom: 2.5rem;
  }
  .shop-hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle at 80% 20%, rgba(255,200,100,0.3) 0%, transparent 60%),
                radial-gradient(circle at 20% 80%, rgba(200,150,255,0.2) 0%, transparent 50%);
    pointer-events: none;
  }
  .shop-hero-title {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: clamp(2.4rem, 5vw, 3.5rem);
    line-height: 1.1;
    background: linear-gradient(135deg, #f97316, #ec4899);
    background-size: 200% 200%;
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shop-shimmer 4s ease infinite;
  }
  .shop-hero-title span {
    background: linear-gradient(135deg, #7c3aed, #2563eb);
    background-size: 200% 200%;
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shop-shimmer 3s ease infinite reverse;
  }
  .shop-hero-sub { color: #c2410c; font-weight: 700; font-size: 1rem; max-width: 36rem; line-height: 1.6; }

  .shop-hero-img-wrap {
    width: clamp(10rem, 18vw, 16rem);
    height: clamp(10rem, 18vw, 16rem);
    background: linear-gradient(135deg, #fde68a, #fbcfe8);
    border: 4px solid #fcd34d;
    border-radius: 1.25rem;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 12px 40px rgba(251,191,36,0.3);
    position: relative;
    animation: shop-float 5s ease-in-out infinite;
    flex-shrink: 0;
  }
  .shop-hero-badge {
    position: absolute; top: -1rem; right: -1rem;
    background: linear-gradient(135deg, #ef4444, #ec4899);
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 0.88rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.6rem;
    box-shadow: 0 4px 12px rgba(239,68,68,0.4);
    transform: rotate(-12deg);
    animation: shop-badge-spin 1.5s ease-in-out infinite alternate;
    white-space: nowrap;
  }

  /* ── Sidebar ── */
  .shop-sidebar-card {
    background: linear-gradient(145deg, #f0e7ff, #e7f0ff);
    border-left: 5px solid #a855f7;
    border-radius: 1.25rem;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(168,85,247,0.1);
  }
  .shop-sidebar-title {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 1.15rem;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .shop-filter-btn {
    width: 100%;
    text-align: left;
    padding: 0.65rem 1rem;
    border-radius: 1rem;
    font-weight: 700;
    font-size: 0.85rem;
    border: none;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .shop-filter-btn:hover { transform: translateX(3px); }
  .shop-filter-btn.active {
    background: linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4);
    color: #fff;
    box-shadow: 0 4px 14px rgba(236,72,153,0.35);
    transform: translateX(4px);
  }
  .shop-filter-btn.inactive {
    background: rgba(255,255,255,0.85);
    color: #6d28d9;
    border: 1.5px solid #e9d5ff;
  }
  .shop-filter-btn.inactive:hover { background: #f5f0ff; }

  .shop-club-card {
    border-radius: 1.25rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: #fff;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(124,58,237,0.3);
  }
  .shop-club-card h4 { font-family:'Nunito',sans-serif; font-weight:900; font-size:1.25rem; margin:0 0 0.4rem; }
  .shop-club-card p  { font-size:0.82rem; opacity:0.88; margin:0 0 1.1rem; line-height:1.5; }
  .shop-club-btn {
    background: rgba(255,255,255,0.22);
    border: 2px solid rgba(255,255,255,0.5);
    color: #fff;
    padding: 0.45rem 1.2rem;
    border-radius: 50px;
    font-weight: 900;
    font-size: 0.85rem;
    cursor: pointer;
    transition: background 0.18s, transform 0.18s;
    font-family: 'Nunito', sans-serif;
  }
  .shop-club-btn:hover { background: rgba(255,255,255,0.38); transform: scale(1.05); }
  .shop-club-star {
    position: absolute; bottom: -1rem; right: -1rem;
    font-size: 7rem; opacity: 0.1; pointer-events: none;
    transition: transform 0.5s;
  }
  .shop-club-card:hover .shop-club-star { transform: rotate(15deg); }

  /* ── Toolbar ── */
  .shop-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.75rem;
    padding: 1rem 1.25rem;
    background: linear-gradient(135deg, #fdf4ff, #f0f9ff);
    border-radius: 1rem;
    border: 1.5px solid #e9d5ff;
  }
  .shop-toolbar-count {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 1.15rem;
    color: #1e1b4b;
  }
  .shop-toolbar-tag {
    display: inline-block;
    background: linear-gradient(135deg, #fce7f3, #ede9fe);
    color: #7c3aed;
    font-size: 0.75rem;
    font-weight: 800;
    padding: 0.2rem 0.65rem;
    border-radius: 50px;
    margin-left: 0.4rem;
    border: 1px solid #ddd6fe;
  }
  .shop-sort-wrap {
    display: flex; align-items: center; gap: 0.6rem;
    background: rgba(255,255,255,0.8);
    border: 1.5px solid #e9d5ff;
    border-radius: 0.75rem;
    padding: 0.45rem 0.85rem;
  }
  .shop-sort-label { font-size:0.8rem; font-weight:700; color:#7c3aed; white-space:nowrap; }
  .shop-sort-select {
    background: transparent;
    border: none;
    outline: none;
    font-size: 0.82rem;
    font-weight: 700;
    color: #4f46e5;
    font-family: 'Baloo 2', sans-serif;
    cursor: pointer;
  }

  /* ── Loading ── */
  .shop-loading {
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; gap: 1rem;
    padding: 5rem 0;
  }
  .shop-loading-dots { display: flex; gap: 0.5rem; }
  .shop-loading-dot {
    width: 14px; height: 14px;
    border-radius: 50%;
    animation: shop-bounce-dot 1.2s ease-in-out infinite;
  }
  .shop-loading-dot:nth-child(1) { background:#ec4899; animation-delay:0s; }
  .shop-loading-dot:nth-child(2) { background:#8b5cf6; animation-delay:0.2s; }
  .shop-loading-dot:nth-child(3) { background:#06b6d4; animation-delay:0.4s; }
  .shop-loading p { color:#7c3aed; font-weight:700; font-size:0.95rem; }

  /* ── Empty state ── */
  .shop-empty {
    text-align: center;
    padding: 4rem 1rem;
    animation: shop-pop 0.4s ease;
  }
  .shop-empty-emoji { font-size: 4rem; display:block; margin-bottom:1rem; }
  .shop-empty h3 { font-family:'Nunito',sans-serif; font-weight:900; font-size:1.4rem; color:#6d28d9; margin:0 0 0.5rem; }
  .shop-empty p  { color:#9ca3af; font-size:0.9rem; }

  /* ── Product grid wrapper ── */
  .shop-grid-wrapper { animation: shop-pop 0.35s ease; }

  /* ── Pagination ── */
  .shop-pagination {
    display: flex; justify-content: center; align-items: center;
    gap: 0.4rem;
    margin-top: 3rem;
    flex-wrap: wrap;
  }
  .shop-pg-btn {
    width: 2.75rem; height: 2.75rem;
    display: flex; align-items: center; justify-content: center;
    border-radius: 0.75rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
    transition: transform 0.18s, box-shadow 0.18s;
  }
  .shop-pg-btn:hover:not(:disabled) { transform: scale(1.12); }
  .shop-pg-btn:active:not(:disabled) { transform: scale(0.95); }
  .shop-pg-btn.active {
    background: linear-gradient(135deg, #ec4899, #8b5cf6);
    color: #fff;
    box-shadow: 0 4px 14px rgba(236,72,153,0.4);
    animation: shop-page-flip 0.3s ease;
  }
  .shop-pg-btn.inactive {
    background: #f5f0ff;
    color: #6d28d9;
    border: 1.5px solid #e9d5ff;
  }
  .shop-pg-btn.inactive:hover { background: #ede9fe; }
  .shop-pg-btn:disabled { opacity: 0.35; cursor: not-allowed; }
  .shop-pg-btn.arrow {
    background: #f0fdf4;
    color: #16a34a;
    border: 1.5px solid #bbf7d0;
    font-size: 1.2rem;
  }
  .shop-pg-btn.arrow:hover:not(:disabled) { background: #dcfce7; }
  .shop-pg-ellipsis {
    width: 2.75rem; height: 2.75rem;
    display: flex; align-items: center; justify-content: center;
    color: #a78bfa; font-weight: 900; font-size: 1.1rem;
    user-select: none;
  }
  .shop-pg-info {
    text-align: center;
    margin-top: 0.85rem;
    font-size: 0.78rem;
    color: #9ca3af;
    font-weight: 700;
    letter-spacing: 0.04em;
  }
`;

function injectStyles() {
  if (document.getElementById('lingo-shop-styles')) return;
  const el = document.createElement('style');
  el.id = 'lingo-shop-styles';
  el.textContent = STYLES;
  document.head.appendChild(el);
}

/* ── Pagination hook ──────────────────────────────────────────── */
const ITEMS_PER_PAGE = 4;

function usePagination(items) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));

  // Reset to page 1 whenever the items list changes (filter changed)
  useEffect(() => { setPage(1); }, [items]);

  const paged = items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  return { page, setPage, totalPages, paged };
}

/* ── Pagination UI ────────────────────────────────────────────── */
function Pagination({ page, totalPages, setPage }) {
  if (totalPages <= 1) return null;

  // Build visible page numbers with ellipsis
  const buildPages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = [];
    if (page <= 4) {
      pages.push(1, 2, 3, 4, 5, '...', totalPages);
    } else if (page >= totalPages - 3) {
      pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', page - 1, page, page + 1, '...', totalPages);
    }
    return pages;
  };

  const go = (n) => {
    setPage(n);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <>
      <div className="shop-pagination" role="navigation" aria-label="Product pages">
        {/* Prev */}
        <button
          className="shop-pg-btn arrow"
          onClick={() => go(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
        >
          ‹
        </button>

        {buildPages().map((p, i) =>
          p === '...'
            ? <span key={`ellipsis-${i}`} className="shop-pg-ellipsis">…</span>
            : <button
                key={p}
                className={`shop-pg-btn ${p === page ? 'active' : 'inactive'}`}
                onClick={() => go(p)}
                aria-label={`Page ${p}`}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </button>
        )}

        {/* Next */}
        <button
          className="shop-pg-btn arrow"
          onClick={() => go(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
        >
          ›
        </button>
      </div>
      <p className="shop-pg-info">
        Page {page} of {totalPages} · {ITEMS_PER_PAGE} products per page
      </p>
    </>
  );
}

/* ── Filter options ───────────────────────────────────────────── */
const filterOptions = [
  { key: 'all',         label: '✨ Show All'                   },
  { key: 'educational', label: '📚 Educational & Creative'     },
  { key: 'indoor',      label: '🎲 Indoor Games'               },
  { key: 'outdoor',     label: '⚽ Outdoor & Sport Toys'       },
  { key: 'stuff',       label: '🧸 Stuff Toys'                 },
];

/* ── Main component ───────────────────────────────────────────── */
export default function Shop() {
  injectStyles();
  const [searchParams] = useSearchParams();
  const [products, setProducts]       = useState([]);
  const [loading, setLoading]         = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(searchParams.get('filter') || 'all');

  const { page, setPage, totalPages, paged } = usePagination(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const BASE_URL = import.meta.env.VITE_API_URL;
        let url = `${BASE_URL}/api/products`;
        if (selectedFilter !== 'all') url += `?filter=${selectedFilter}`;
        console.log("Selected Filter:", selectedFilter);
        console.log("FETCH URL:", url);
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedFilter]);

  const handleFilterChange = (key) => {
    setSelectedFilter(key);
    // usePagination resets to page 1 automatically when products change
  };

  const activeLabel = filterOptions.find(f => f.key === selectedFilter)?.label ?? 'All';

  return (
    <div className="shop-root bg-background text-on-surface selection:bg-primary-container min-h-screen">
      <Navigation />

      <main className="pt-24 min-h-screen">

        {/* ── Hero ── */}
        <header className="shop-hero">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="shop-hero-title">
                Master the <span>Workshop</span>
              </h1>
              <p className="shop-hero-sub">
                Discover premium educational toys and collectibles designed to inspire
                curiosity and spark endless creativity.
              </p>
            </div>
            <div className="shop-hero-img-wrap">
              <div className="shop-hero-badge">🆕 New!</div>
              <img
                alt="Featured Toy"
                style={{ width:'80%', height:'80%', objectFit:'contain' }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaSDXkhgt81t8XjvLBYpdAVvcjfYKYRoRv-LH2_fNHZdnOTeWpIM-YDEcpu0xHYDEA7yZsSj_eRrsOLydmotxyKXmPcJzSqiccoJZ_rornOhU6RWXHQr4bcXYP3swzxsM4xaarawK1WHsbV4783sMrCF6gmG4srCzkWf4cIOTy1IUt6e9bS5p1urZZmXKSX9qsNhEJnZx896GUkjlCpwx7uGNr0O6SkWeRP7XE-zP9pFwPumrDwdSQ5TlX75y_IVqi4ce1B80AfuaT"
              />
            </div>
          </div>
        </header>

        {/* ── Body ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pb-16">

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            {/* Filter card */}
            <div className="shop-sidebar-card">
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.25rem' }}>
                <span className="shop-sidebar-title">🔍 Filters</span>
                <button
                  type="button"
                  onClick={() => handleFilterChange('all')}
                  style={{ fontSize:'0.78rem', fontWeight:800, color:'#a855f7', background:'none', border:'none', cursor:'pointer' }}
                >
                  Clear All
                </button>
              </div>
              <p style={{ fontSize:'0.7rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', color:'#7c3aed', marginBottom:'0.75rem' }}>
                Categories
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                {filterOptions.map(f => (
                  <button
                    key={f.key}
                    type="button"
                    className={`shop-filter-btn ${selectedFilter === f.key ? 'active' : 'inactive'}`}
                    onClick={() => handleFilterChange(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Club card */}
            <div className="shop-club-card">
              <h4>Join the Workshop Club 🌟</h4>
              <p>Get 15% off your first order when you sign up today.</p>
              <button className="shop-club-btn">Sign Up →</button>
              <span className="shop-club-star material-symbols-outlined" aria-hidden="true">star</span>
            </div>
          </aside>

          {/* ── Products area ── */}
          <div className="lg:col-span-9 order-1 lg:order-2">

            {/* Toolbar */}
            <div className="shop-toolbar">
              <div>
                <span className="shop-toolbar-count">
                  {loading ? 'Loading…' : `${products.length} Result${products.length !== 1 ? 's' : ''}`}
                </span>
                {!loading && (
                  <span className="shop-toolbar-tag">{activeLabel}</span>
                )}
                {!loading && totalPages > 1 && (
                  <span className="shop-toolbar-tag" style={{ background:'linear-gradient(135deg,#d1fae5,#d1fae5)', color:'#059669', borderColor:'#6ee7b7' }}>
                    pg {page}/{totalPages}
                  </span>
                )}
              </div>
              <div className="shop-sort-wrap">
                <span className="shop-sort-label">Sort:</span>
                <select className="shop-sort-select">
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            {/* Content */}
            {loading ? (
              <div className="shop-loading">
                <div className="shop-loading-dots" aria-hidden="true">
                  <div className="shop-loading-dot" />
                  <div className="shop-loading-dot" />
                  <div className="shop-loading-dot" />
                </div>
                <p>Loading awesome toys…</p>
              </div>
            ) : paged.length === 0 ? (
              <div className="shop-empty">
                <span className="shop-empty-emoji">🧸</span>
                <h3>No toys found!</h3>
                <p>Try a different category or clear your filters.</p>
              </div>
            ) : (
              <div className="shop-grid-wrapper" key={`${selectedFilter}-${page}`}>
                <ProductGrid products={paged} />
              </div>
            )}

            {/* Pagination */}
            {!loading && (
              <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}