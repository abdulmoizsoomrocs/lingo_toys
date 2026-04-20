import React from 'react';

const testimonials = [
  {
    quote:
      '"The STEM kits from LingoToys have completely changed how my son views math. He doesn\'t see it as homework anymore; it\'s a game of building robots!"',
    author: 'Sarah Jenkins',
    role: 'Mother of 2, Educator',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbQEenEN0eUUI8mOVK0Iv5UiEY6VpMXwlGJP8bPgMUJZT9ynJjme1FLJaVSuYM1ZnQ-YEc3bsClUWnXMthTHx0eIydBcd2PZyB4FU72R1pvL9tufUN1FwiMUDSXHsZaj_kl3Xgkr1LAvj8LPTYgb7jKmt3frgKBNXqLc5JIetARBk7fQt1rqhvnT86ERrnwtjvonKU8rzV5v53Ybq1EhDOWT3C5es1ih3iE5UOyizbVJyQT_W5AAzmWxyqQtUkEKciKTvLLrdORwi_',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <span className="text-[12rem] font-black absolute -top-20 -left-10 text-white/10 pointer-events-none font-headline animate-fade-in">
          "
        </span>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 font-headline drop-shadow-lg animate-slide-in-down">
            Loved by Parents, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-yellow-200 to-orange-100 bg-clip-text text-transparent">Adored by Kids.</span>
          </h2>
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="border-l-4 border-yellow-200/70 pl-6 md:pl-8 backdrop-blur-sm bg-white/10 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-x-2 animate-fade-in group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 italic drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300 text-yellow-50">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    alt={testimonial.author}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-3 border-yellow-200/70 shadow-lg group-hover:scale-125 group-hover:shadow-xl group-hover:border-yellow-100 transition-all duration-300"
                    src={testimonial.image}
                  />
                  <div>
                    <p className="font-black text-sm md:text-base text-yellow-100">{testimonial.author}</p>
                    <p className="text-xs md:text-sm text-yellow-100/80 group-hover:text-yellow-50 transition-colors duration-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
