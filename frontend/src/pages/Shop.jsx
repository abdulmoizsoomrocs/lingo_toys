import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const filterOptions = [
  { key: 'all', label: 'Show All' },
  { key: 'educational', label: 'Educational and Creative' },
  { key: 'indoor', label: 'Indoor Games' },
  { key: 'outdoor', label: 'Outdoor Games and Sport Toys' },
  { key: 'stuff', label: 'Stuff Toys' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(searchParams.get('filter') || 'all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
const BASE_URL = import.meta.env.VITE_API_URL;

let url = `${BASE_URL}/api/products`;        if (selectedFilter !== 'all') {
          url += `?filter=${selectedFilter}`;
        }
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

  return (
    <div className="bg-background text-on-surface selection:bg-primary-container min-h-screen">
     <Navigation/>

      <main className="pt-24 min-h-screen">
        <header className="px-8 py-12 bg-gradient-to-br from-orange-200 via-yellow-200 to-pink-200 border-b-4 border-orange-400 mb-8 relative overflow-hidden rounded-b-xl shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Master the <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Workshop</span>
              </h1>
              <p className="text-orange-700 text-lg max-w-xl font-bold">
                Discover premium educational toys and high-quality collectibles designed to inspire curiosity and spark endless creativity.
              </p>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-yellow-300 to-pink-300 border-4 border-yellow-400 rounded-xl rotate-6 flex items-center justify-center shadow-xl relative">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-lg -rotate-12 text-white font-bold text-xl shadow-lg">🆕 New!</div>
              <img
                alt="Featured Toy"
                className="w-4/5 h-4/5 object-contain"
                data-alt="vibrant colored geometric building blocks arranged in a playful architectural stack with soft shadows on a yellow background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaSDXkhgt81t8XjvLBYpdAVvcjfYKYRoRv-LH2_fNHZdnOTeWpIM-YDEcpu0xHYDEA7yZsSj_eRrsOLydmotxyKXmPcJzSqiccoJZ_rornOhU6RWXHQr4bcXYP3swzxsM4xaarawK1WHsbV4783sMrCF6gmG4srCzkWf4cIOTy1IUt6e9bS5p1urZZmXKSX9qsNhEJnZx896GUkjlCpwx7uGNr0O6SkWeRP7XE-zP9pFwPumrDwdSQ5TlX75y_IVqi4ce1B80AfuaT"
              />
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3 space-y-8 order-2 lg:order-1">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 border-l-4 border-purple-400 p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">🔍 Filters</h3>
                <button type="button" onClick={() => setSelectedFilter('all')} className="text-purple-500 text-sm font-bold hover:underline">Clear All</button>
              </div>
              <div className="mt-6 space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-purple-700">Categories</h4>
                <div className="grid gap-3">
                  {filterOptions.map((filter) => (
                    <button
                      key={filter.key}
                      type="button"
                      onClick={() => setSelectedFilter(filter.key)}
                      className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold transition-all ${selectedFilter === filter.key ? 'bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 text-white shadow-lg shadow-pink-200/40' : 'bg-white/90 text-purple-700 hover:bg-purple-50 border border-purple-100'}`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-8 text-on-secondary relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-2 leading-tight">Join the Workshop Club</h4>
                <p className="text-sm opacity-90 mb-6">Get 15% off your first order when you sign up.</p>
                <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">Sign Up</button>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 group-hover:rotate-12 transition-transform duration-500" data-icon="star">star</span>
            </div>
          </aside>

          {/* Main Products Section - Full Width */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-on-surface">Showing {products.length} Result{products.length !== 1 ? 's' : ''}</h2>
                <div className="flex items-center gap-2 text-on-surface-variant text-sm mt-1">
                  <span className="font-medium">Filtered by:</span>
                  <span className="bg-surface-container px-2 py-0.5 rounded text-xs font-bold">{filterOptions.find((item) => item.key === selectedFilter)?.label}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-lg">
                <span className="text-sm font-bold text-on-surface-variant">Sort by:</span>
                <select className="bg-transparent border-none focus:ring-0 text-sm font-bold text-secondary">
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-on-surface-variant">Loading products...</p>
              </div>
            ) : (
              <div className="w-full">
                <ProductGrid products={products} />
              </div>
            )}

            <div className="mt-16 flex justify-center items-center gap-2">
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container hover:bg-tertiary-container transition-colors text-secondary">
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-tertiary text-on-tertiary font-bold">1</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-bold text-on-surface-variant">2</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-bold text-on-surface-variant">3</button>
              <span className="px-4 font-bold text-outline-variant">...</span>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-bold text-on-surface-variant">12</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container hover:bg-tertiary-container transition-colors text-secondary">
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
