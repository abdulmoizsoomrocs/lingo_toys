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

const response = await fetch(`${BASE_URL}/api/products/${id}`);        if (!response.ok) {
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
    <div className="bg-gradient-to-br from-fuchsia-100 via-cyan-100 to-amber-100 text-on-background font-body min-h-screen">
      <Navigation />
      <main className="pt-28 pb-32">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Image Gallery */}
            <div className="lg:col-span-7 grid grid-cols-4 gap-4">
              <div className="col-span-4 aspect-square rounded-xl overflow-hidden shadow-2xl shadow-pink-200/40 bg-white border border-pink-200/40 ring-1 ring-fuchsia-100/60">
                <img
                  alt={product.name || 'Product'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src={product.images?.main || '/placeholder.svg'}
                />
              </div>
              {product.images?.gallery?.slice(0, 3).map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:ring-4 hover:ring-fuchsia-300/40">
                  <img className="w-full h-full object-cover" alt={`Gallery ${index + 1}`} src={image} />
                </div>
              ))}
              {product.images?.gallery && product.images.gallery.length > 3 && (
                <div className="aspect-square rounded-lg bg-gradient-to-br from-fuchsia-100 via-sky-100 to-yellow-100 flex items-center justify-center text-fuchsia-700 font-bold cursor-pointer hover:bg-fuchsia-200 transition-colors shadow-inner shadow-fuchsia-200/40">
                  +{product.images.gallery.length - 3} More
                </div>
              )}
            </div>

            {/* Header & CTA */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(168,85,247,0.25)]">
                  {product.category || 'STEM Essentials'}
                </span>
                <h1 className="font-headline text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-orange-500 to-cyan-600 bg-clip-text text-transparent leading-tight tracking-tighter">
                  {product.name}
                </h1>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center gap-4 py-6 px-8 rounded-xl bg-gradient-to-br from-fuchsia-100 via-violet-100 to-cyan-100 border border-purple-200/50 shadow-[0_20px_60px_rgba(168,85,247,0.12)]">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-purple-600">Retail Price</span>
                  <span className="text-4xl font-black text-fuchsia-700">${product.price?.toFixed(2)}</span>
                </div>
                <div className="ml-auto flex items-center bg-gradient-to-r from-emerald-200 via-lime-200 to-cyan-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold shadow-[0_0_18px_rgba(34,197,94,0.25)]">
                  <span className="material-symbols-outlined text-base mr-1 text-emerald-700">check_circle</span>
                  In Stock
                </div>
              </div>

              <div className="space-y-4">
<button
  onClick={() => {
    console.log("CLICKED");
    addToCart(product);
  }}
  className="w-full py-5 px-8 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-sky-500 text-white font-bold text-xl shadow-2xl shadow-pink-300/25 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 ring-1 ring-white/30"
>
  <span className="material-symbols-outlined text-white drop-shadow-[0_0_20px_rgba(236,72,153,0.45)]">
    shopping_bag
  </span>
  Add to CART
</button>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-yellow-50 shadow-lg shadow-fuchsia-200/20 space-y-4 border border-fuchsia-100/70">
                <h4 className="font-headline font-bold text-sm text-fuchsia-700">Curated Learning Path</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <span>Logic Skills</span>
                    <span>85% Boost</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-fuchsia-500 via-amber-400 to-emerald-500 rounded-full relative">
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold">Spatial Logic</span>
                    <span className="px-2 py-1 rounded-full bg-cyan-100 text-cyan-700 text-[10px] font-bold">Fine Motor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-10 rounded-3xl bg-white/95 shadow-2xl shadow-fuchsia-100/30 border border-fuchsia-100/50 ring-1 ring-fuchsia-50">
              <h3 className="font-headline text-3xl font-extrabold mb-6 text-fuchsia-700">Product Details</h3>
              <div className="space-y-4 text-slate-600 leading-loose text-lg">
                <p>{product.details?.paragraph || 'A thoughtfully designed educational tool that grows with your child through every stage of imaginative play and spatial reasoning.'}</p>
                <p>{product.details?.additional || 'Crafted from premium materials, this set blends learning and creativity into a premium tactile experience for early learners.'}</p>
              </div>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-amber-50 shadow-xl shadow-cyan-100/30 border border-cyan-100/70">
              <h3 className="font-headline text-2xl font-extrabold mb-6 text-slate-900">Specifications</h3>
              <ul className="space-y-6">
                {product.specs?.ageGroup && (
                  <li className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="text-slate-500 font-medium">Age Group</span>
                    <span className="font-bold text-fuchsia-700">{product.specs.ageGroup}</span>
                  </li>
                )}
                {product.specs?.pieces && (
                  <li className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="text-slate-500 font-medium">Pieces</span>
                    <span className="font-bold text-slate-900">{product.specs.pieces} Blocks</span>
                  </li>
                )}
                {product.specs?.material && (
                  <li className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <span className="text-slate-500 font-medium">Material</span>
                    <span className="font-bold text-slate-900">{product.specs.material}</span>
                  </li>
                )}
                {product.specs?.ecoRating && (
                  <li className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Eco-Rating</span>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-200 via-lime-100 to-cyan-200 text-emerald-700 text-xs font-bold shadow-sm shadow-emerald-200/20">{product.specs.ecoRating}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {(product.features || []).map((feature, index) => (
              <div key={index} className="p-8 rounded-3xl bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 hover:scale-[1.03] transition-transform duration-300 shadow-xl shadow-fuchsia-100/30 ring-1 ring-fuchsia-100/50">
                <span className="material-symbols-outlined text-fuchsia-500 text-5xl mb-4 block drop-shadow-[0_0_20px_rgba(236,72,153,0.35)]">auto_awesome</span>
                <h4 className="font-headline text-xl font-bold mb-2 text-slate-900">{feature.title || `Benefit ${index + 1}`}</h4>
                <p className="text-slate-600 text-sm">{feature.description || 'Enhances learning through hands-on discovery.'}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h3 className="font-headline text-4xl font-extrabold mb-2 text-fuchsia-700">Parent Reviews</h3>
                <div className="flex items-center gap-2">
                  <div className="flex text-fuchsia-500">
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex} className="material-symbols-outlined drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <span className="font-bold text-slate-900">{product.review?.rating?.toFixed(1) || '4.9'} / 5.0</span>
                </div>
              </div>
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-orange-400 text-white font-bold hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all shadow-lg">Write Review</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.review && (
                <div className="p-8 rounded-3xl bg-white/95 shadow-2xl shadow-fuchsia-100/25 border border-fuchsia-100/40 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-8xl text-fuchsia-200">format_quote</span>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <img alt={product.review.name || 'Reviewer'} className="w-12 h-12 rounded-full ring-2 ring-fuchsia-200/80" src={product.review.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'} />
                    <div>
                      <p className="font-bold flex items-center gap-2 text-slate-900">
                        {product.review.name || 'Parent'}
                        <span className="bg-gradient-to-r from-cyan-100 to-fuchsia-100 text-cyan-700 text-[10px] px-2 py-0.5 rounded-full">Verified</span>
                      </p>
                      <p className="text-xs text-slate-500">Bought for age {product.specs?.ageGroup || '4'}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic leading-relaxed">"{product.review.comment || 'A breath of fresh air in the world of bright, noisy toys.'}"</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-fuchsia-50 via-cyan-50 to-amber-50 shadow-inner shadow-fuchsia-100/20 flex flex-col md:flex-row gap-12 items-center border border-fuchsia-100/40">
            <div className="flex-1 space-y-6">
              <h3 className="font-headline text-4xl font-extrabold text-fuchsia-700">What's in the Box?</h3>
              <p className="text-lg text-slate-600">We believe in complete transparency. Here's everything included in your {product.name} set.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(product.insideBox || []).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/80 p-4 rounded-2xl ring-1 ring-fuchsia-100/70 shadow-sm shadow-fuchsia-100/20">
                    <span className="material-symbols-outlined text-fuchsia-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.35)]">check</span>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-sm aspect-square bg-white rounded-3xl shadow-2xl overflow-hidden ring-1 ring-fuchsia-100/50">
              <img className="w-full h-full object-cover" alt="Product box contents" src={product.images?.box || product.images?.main || '/placeholder.svg'} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}