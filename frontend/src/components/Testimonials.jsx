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
    <section className="py-24 bg-tertiary text-on-tertiary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <span className="text-[12rem] font-black absolute -top-20 -left-10 text-white/5 pointer-events-none font-headline">
          "
        </span>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-12 font-headline">
            Loved by Parents, <br />
            Adored by Kids.
          </h2>
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-l-4 border-tertiary-fixed pl-6 md:pl-8">
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    alt={testimonial.author}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-tertiary-fixed"
                    src={testimonial.image}
                  />
                  <div>
                    <p className="font-bold text-sm md:text-base">{testimonial.author}</p>
                    <p className="text-xs md:text-sm text-tertiary-fixed">{testimonial.role}</p>
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
