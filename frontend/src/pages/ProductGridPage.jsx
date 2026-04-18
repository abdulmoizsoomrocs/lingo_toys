import Navigation from '../components/Navigation';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

export default function ProductGridPage() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-on-background antialiased overflow-x-hidden min-h-screen">
      <Navigation />
      <main className="pt-20 pb-24">

        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
          <header className="relative overflow-hidden bg-white rounded-2xl border border-purple-100 shadow-md shadow-purple-100/20 px-10 py-10">
            {/* Decorative gradient blob */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-80 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/30 blur-3xl pointer-events-none" />
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-3">
                🎯 Explore All Products
              </h1>
              <p className="text-purple-500 text-base font-medium max-w-xl">
                Discover our complete collection of educational toys, collectibles, and playthings designed for every age and interest.
              </p>
            </div>
          </header>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ProductGrid />
        </div>

      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
