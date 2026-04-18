import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-8">
        <div className="bg-primary-container rounded-xl p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-container/30 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-on-primary-container mb-6 font-headline">
              Join the Workshop
            </h2>
            <p className="text-lg text-on-primary-container/80 mb-10 max-w-lg mx-auto">
              Get 15% off your first order and stay updated with new toy launches and STEM tips.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={handleSubmit}>
              <input
                className="flex-1 px-8 py-5 rounded-lg bg-surface border-none focus:ring-4 focus:ring-tertiary-fixed text-lg outline-none"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="bg-secondary text-on-secondary px-10 py-5 rounded-lg text-lg font-bold hover:bg-secondary-dim shadow-xl transition-all active:scale-95"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-6 text-sm text-on-primary-container/60">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
