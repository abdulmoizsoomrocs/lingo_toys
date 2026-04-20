import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' }); // 'success' or 'error'

  // Email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage({ text: '', type: '' });

    // Validation
    if (!email.trim()) {
      setMessage({ text: 'Please enter your email address', type: 'error' });
      return;
    }

    if (!isValidEmail(email)) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/newsletter/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email.toLowerCase().trim() }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({ 
          text: data.message || 'Successfully subscribed! Check your email for 15% off.', 
          type: 'success' 
        });
        setEmail('');

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setMessage({ text: '', type: '' });
        }, 5000);
      } else {
        setMessage({ 
          text: data.message || 'Failed to subscribe. Please try again.', 
          type: 'error' 
        });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage({ 
        text: 'Subscribed Successfully.', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-8">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-headline">
              Join the Workshop
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-lg mx-auto leading-relaxed">
              Get 15% off your first order and stay updated with new toy launches and STEM tips.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-6"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full sm:flex-1 px-5 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-200 disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 bg-gradient-to-r from-yellow-300 to-orange-300 text-purple-900 font-black rounded-lg hover:scale-105 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap ${
                  loading ? 'opacity-75' : ''
                }`}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {/* Message Alert */}
            {message.text && (
              <div
                className={`animate-fadeIn px-6 py-4 rounded-lg mb-4 font-semibold transition-all duration-300 ${
                  message.type === 'success'
                    ? 'bg-green-400/20 text-green-50 border border-green-400/50'
                    : 'bg-red-400/20 text-red-50 border border-red-400/50'
                }`}
              >
                {message.type === 'success' ? '✓ ' : '✗ '}
                {message.text}
              </div>
            )}

            <p className="mt-6 text-sm text-white/70">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
