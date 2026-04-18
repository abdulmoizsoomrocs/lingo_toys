import Navigation from '../components/Navigation';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

export default function ProductGridPage() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-on-background antialiased overflow-x-hidden min-h-screen">
      <Navigation />
      <main className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <header className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-12 rounded-lg border-4 border-purple-400 shadow-lg">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight mb-4">
              🎯 Explore All Products
            </h1>
            <p className="text-purple-700 text-lg font-bold">
              Discover our complete collection of educational toys, collectibles, and playthings designed for every age and interest.
            </p>
          </header>
        </div>
        <div className="max-w-7xl mx-auto px-8">
          <ProductGrid />
        </div>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
