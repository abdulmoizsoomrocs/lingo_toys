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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8">
      {products.map((product) => (
        <Link
          key={product._id}
          to={`/product/${product._id}`}
          className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 flex flex-col border border-white/20 hover:border-purple-200/50 hover:-translate-y-2"
        >
          <div className="relative aspect-square mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-4 group-hover:p-2 transition-all duration-500">
            <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-secondary p-2 rounded-full shadow-lg hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110 z-10">
              <span className="material-symbols-outlined text-lg" data-icon="favorite">favorite</span>
            </button>
            <img
              alt={product.name || 'Product'}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
              src={product.images?.main || '/placeholder.svg'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex justify-between items-start">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                {product.category || 'PRODUCT'}
              </span>
              <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-sm mr-1" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xs font-bold">{product.review?.rating || 'N/A'}</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2 leading-tight">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-black text-gray-800">
              ${product.price?.toFixed(2)}
            </span>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl hover:from-purple-600 hover:to-pink-600 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-purple-500/25">
              <span className="material-symbols-outlined text-lg" data-icon="shopping_basket">shopping_basket</span>
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
