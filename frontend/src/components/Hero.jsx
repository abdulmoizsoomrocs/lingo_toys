import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-auto md:h-[870px] flex items-center overflow-hidden bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-300 px-8 lg:px-20 pt-20 md:pt-0">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto z-10 py-12">
        <div className="space-y-8">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-300 to-blue-400 text-white rounded-full text-sm font-bold tracking-wide uppercase shadow-lg">
            ✨ New Collection 2024
          </span>
          <h1 className="text-5xl md:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent leading-[0.9] tracking-tighter font-headline">
            Where Logic{' '}
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">Meets</span>{' '}
            <br />
            Imagination
          </h1>
          <p className="text-xl text-primary-dim/80 max-w-md font-medium leading-relaxed">
            Curated kits designed to spark curiosity, build confidence, and transform playtime into a
            workshop of wonders.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <Link
              to="/shop"
              className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
            >
              🛍️ Shop Now
            </Link>
            <button className="flex items-center gap-2 text-primary-dim font-bold hover:translate-x-2 transition-transform">
              View Lookbook{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-tertiary-fixed/20 rounded-full blur-3xl"></div>
          <img
            alt="Educational toys"
            className="rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 object-cover w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbkCcoQhzYd1c3O6PHG6xx_hRm7Ccpl0IplvpGe1_G6s3ETj5Y1fIig79BqYhbe8bumtqS4qSwSzVm4SvRj67As1w8m0BCsPiE-thlvCNYN7D3Q2h4cVvrckSh4nqpsiN2RZaGCMkrynHbq82CeRXxvEZTt8JkshFc9KZftJyH0vZRevXV8nyBjBtr7MxuibE1xYqvmm508o_XA_tfMCERzc9PGJUoIIQ6jrfGUD6B4Cq24fZrpqtphkNH0mESTHHL6uIUhoPh4F1-"
          />
        </div>
      </div>
    </section>
  );
}
