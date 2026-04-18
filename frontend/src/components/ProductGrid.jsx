import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductGrid({ products = [] }) {
  if (!products.length) {
    return (
      <div className="text-center py-12">
        <p className="text-on-surface-variant">No products available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-6">
      {products.map((product) => (
        <Link
          key={product._id}
          to={`/product/${product._id}`}
          className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-200/20 transition-all duration-400 flex flex-col border border-slate-100 hover:border-purple-100 hover:-translate-y-1"
        >
          {/* Image */}
          <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-purple-50/40 overflow-hidden flex items-center justify-center p-5 group-hover:p-3 transition-all duration-500">
            <button className="absolute top-3 right-3 bg-white text-slate-400 hover:text-pink-500 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 z-10">
              <span className="material-symbols-outlined text-base" data-icon="favorite">favorite</span>
            </button>
            <img
              alt={product.name || 'Product'}
              className="w-full h-full object-contain group-hover:scale-[1.08] transition-transform duration-600"
              src={product.images?.main || '/placeholder.svg'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Info */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            <div className="flex justify-between items-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {product.category || 'PRODUCT'}
              </span>
              <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 text-yellow-700 px-2 py-0.5 rounded-full">
                <span className="material-symbols-outlined text-xs" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-[11px] font-bold">{product.review?.rating || 'N/A'}</span>
              </div>
            </div>

            <div className="flex-1 space-y-1.5">
              <h3 className="text-[15px] font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2 leading-snug">
                {product.name}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-xl font-black text-slate-800">
                ${product.price?.toFixed(2)}
              </span>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2.5 rounded-xl active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-200/40">
                <span className="material-symbols-outlined text-base" data-icon="shopping_basket">shopping_basket</span>
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
