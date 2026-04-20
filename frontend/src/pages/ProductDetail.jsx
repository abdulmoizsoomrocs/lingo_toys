import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const BASE_URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${BASE_URL}/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="bg-background text-on-surface min-h-screen">
        <Navigation />
        <main className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-on-surface-variant">Loading product...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-background text-on-surface min-h-screen">
        <Navigation />
        <main className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-on-surface-variant">Product not found</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-fuchsia-50 via-cyan-50 to-amber-50 text-on-background font-body min-h-screen">
      <Navigation />
      <main className="pt-24 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Hero: Image + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">

            {/* Image Gallery */}
            <div className="flex flex-col gap-3">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-fuchsia-200/30 bg-white border border-fuchsia-100/60">
                <img
                  alt={product.name || 'Product'}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  src={product.images?.main || '/placeholder.svg'}
                />
              </div>
              {product.images?.gallery?.length > 0 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.gallery.slice(0, 3).map((image, index) => (
                    <div key={index} className="aspect-square rounded-xl overflow-hidden cursor-pointer ring-1 ring-fuchsia-100/60 hover:ring-2 hover:ring-fuchsia-300 transition-all duration-300">
                      <img className="w-full h-full object-cover" alt={`Gallery ${index + 1}`} src={image} />
                    </div>
                  ))}
                  {product.images.gallery.length > 3 && (
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-fuchsia-100 via-sky-100 to-yellow-100 flex items-center justify-center text-fuchsia-700 text-sm font-bold cursor-pointer hover:brightness-95 transition-all ring-1 ring-fuchsia-100/60">
                      +{product.images.gallery.length - 3}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6">

              {/* Badge + Title */}
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 text-white font-semibold text-xs uppercase tracking-widest shadow-md">
                  {product.category || 'STEM Essentials'}
                </span>
                <h1 className="font-headline text-4xl xl:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-orange-500 to-cyan-600 bg-clip-text text-transparent leading-tight tracking-tight">
                  {product.name}
                </h1>
                <p className="text-base text-slate-500 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price + Stock */}
              <div className="flex items-center gap-5 py-5 px-6 rounded-2xl bg-white border border-purple-100 shadow-md shadow-fuchsia-100/20">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-purple-500 uppercase tracking-wider mb-0.5">Retail Price</span>
                  <span className="text-4xl font-black text-fuchsia-700">Rs. {product.price?.toFixed(2)}</span>
                </div>
                <div className="ml-auto flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                  In Stock
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => {
                  console.log("CLICKED");
                  addToCart(product);
                }}
                className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-sky-500 text-white font-bold text-lg shadow-lg shadow-pink-200/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 ring-1 ring-white/20"
              >
                <span className="material-symbols-outlined text-white">shopping_bag</span>
                Add to Cart
              </button>

              {/* Learning Path */}
              <div className="p-5 rounded-2xl bg-white border border-fuchsia-100 shadow-sm space-y-3">
                <h4 className="font-semibold text-xs text-fuchsia-600 uppercase tracking-wider">Curated Learning Path</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Logic Skills</span>
                    <span>85% Boost</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-fuchsia-500 via-amber-400 to-emerald-500 rounded-full" />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <span className="px-2 py-1 rounded-full bg-purple-50 text-purple-600 text-[10px] font-semibold border border-purple-100">Spatial Logic</span>
                    <span className="px-2 py-1 rounded-full bg-cyan-50 text-cyan-600 text-[10px] font-semibold border border-cyan-100">Fine Motor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details + Specs */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-8 rounded-2xl bg-white shadow-lg shadow-fuchsia-100/20 border border-fuchsia-50">
              <h3 className="font-headline text-2xl font-extrabold mb-4 text-fuchsia-700">Product Details</h3>
              <div className="space-y-3 text-slate-600 leading-relaxed text-base">
                <p>{product.details?.paragraph || 'A thoughtfully designed educational tool that grows with your child through every stage of imaginative play and spatial reasoning.'}</p>
                <p>{product.details?.additional || 'Crafted from premium materials, this set blends learning and creativity into a premium tactile experience for early learners.'}</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-amber-50 shadow-lg shadow-cyan-100/20 border border-cyan-100/50">
              <h3 className="font-headline text-xl font-extrabold mb-5 text-slate-800">Specifications</h3>
              <ul className="space-y-4">
                {product.specs?.ageGroup && (
                  <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-slate-500 text-sm">Age Group</span>
                    <span className="font-bold text-fuchsia-700 text-sm">{product.specs.ageGroup}</span>
                  </li>
                )}

                {product.specs?.features && (
  <li className="flex items-center justify-between border-b border-slate-100 pb-3">
    <span className="text-slate-500 text-sm">Features</span>
    <span className="font-bold text-fuchsia-700 text-sm">
      {product.specs.features}
    </span>
  </li>
)}

{product.specs?.color && (
  <li className="flex items-center justify-between border-b border-slate-100 pb-3">
    <span className="text-slate-500 text-sm">Color</span>
    <span className="font-bold text-fuchsia-700 text-sm">
      {product.specs.color}
    </span>
  </li>
)}

                {product.specs?.pieces && (
                  <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-slate-500 text-sm">Pieces</span>
                    <span className="font-bold text-slate-800 text-sm">{product.specs.pieces} Blocks</span>
                  </li>
                )}
                {product.specs?.material && (
                  <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-slate-500 text-sm">Material</span>
                    <span className="font-bold text-slate-800 text-sm">{product.specs.material}</span>
                  </li>
                )}
                {product.specs?.ecoRating && (
                  <li className="flex items-center justify-between">
                    <span className="text-slate-500 text-sm">Eco-Rating</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">{product.specs.ecoRating}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {(product.features || []).map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white hover:shadow-lg hover:shadow-fuchsia-100/30 hover:-translate-y-1 transition-all duration-300 border border-fuchsia-50 ring-1 ring-fuchsia-100/40">
                <span className="material-symbols-outlined text-fuchsia-400 text-4xl mb-3 block">auto_awesome</span>
                <h4 className="font-headline text-lg font-bold mb-1.5 text-slate-800">{feature.title || `Benefit ${index + 1}`}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description || 'Enhances learning through hands-on discovery.'}</p>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className="mt-20 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h3 className="font-headline text-3xl font-extrabold mb-2 text-fuchsia-700">Parent Reviews</h3>
                <div className="flex items-center gap-2">
                  <div className="flex text-fuchsia-400">
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{product.review?.rating?.toFixed(1) || '4.9'} / 5.0</span>
                </div>
              </div>
              <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-orange-400 text-white font-semibold text-sm hover:shadow-lg transition-all shadow-md">
                Write Review
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.review && (
                <div className="p-7 rounded-2xl bg-white shadow-lg shadow-fuchsia-100/20 border border-fuchsia-50 relative overflow-hidden">
                  <div className="absolute top-3 right-4 opacity-[0.07]">
                    <span className="material-symbols-outlined text-7xl text-fuchsia-400">format_quote</span>
                  </div>
                  <div className="flex items-center gap-3 mb-5">
                    <img
                      alt={product.review.name || 'Reviewer'}
                      className="w-11 h-11 rounded-full ring-2 ring-fuchsia-200"
                      src={product.review.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'}
                    />
                    <div>
                      <p className="font-bold flex items-center gap-2 text-slate-800 text-sm">
                        {product.review.name || 'Parent'}
                        <span className="bg-cyan-50 border border-cyan-200 text-cyan-600 text-[10px] px-2 py-0.5 rounded-full font-semibold">Verified</span>
                      </p>
                      <p className="text-xs text-slate-400">Bought for age {product.specs?.ageGroup || '4'}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic leading-relaxed text-sm">"{product.review.comment || 'A breath of fresh air in the world of bright, noisy toys.'}"</p>
                </div>
              )}
            </div>
          </div>

          {/* What's in the Box */}
          <div className="mt-20 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-fuchsia-50 via-cyan-50 to-amber-50 border border-fuchsia-100/50 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 space-y-5">
              <h3 className="font-headline text-3xl font-extrabold text-fuchsia-700">What's in the Box?</h3>
              <p className="text-slate-500 text-base leading-relaxed">We believe in complete transparency. Here's everything included in your {product.name} set.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(product.insideBox || []).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-fuchsia-100 shadow-sm">
                    <span className="material-symbols-outlined text-fuchsia-400 text-base">check</span>
                    <span className="font-medium text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full max-w-xs aspect-square bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-fuchsia-100/50 flex-shrink-0">
              <img className="w-full h-full object-cover" alt="Product box contents" src={product.images?.box || product.images?.main || '/placeholder.svg'} />
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
