import React from 'react';

const values = [
  {
    icon: 'psychology',
    title: 'Cognitive Focus',
    description: 'Designed by childhood development experts.',
    bgColor: 'bg-primary-container',
    iconColor: 'text-on-primary-container',
  },
  {
    icon: 'eco',
    title: 'Sustainably Made',
    description: 'Non-toxic, organic, and ethically sourced.',
    bgColor: 'bg-tertiary-container',
    iconColor: 'text-on-tertiary-container',
  },
  {
    icon: 'school',
    title: 'Curriculum Based',
    description: 'Aligned with STEM learning standards.',
    bgColor: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
  },
  {
    icon: 'verified',
    title: 'Lifetime Quality',
    description: 'Toys built to last through generations.',
    bgColor: 'bg-primary-fixed-dim',
    iconColor: 'text-on-primary-fixed',
  },
];

export default function BrandValues() {
  return (
    <section className="py-24 bg-gradient-to-b from-surface via-blue-50/30 to-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group animate-fade-in hover:scale-110 transition-transform duration-500"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${value.bgColor} ${value.iconColor} rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-125 transition-all duration-300 group-hover:rotate-12 relative overflow-hidden`}>
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
                <span className="material-symbols-outlined text-2xl md:text-3xl relative z-10 group-hover:animate-bounce">{value.icon}</span>
              </div>
              <h3 className="font-black text-lg md:text-xl mb-2 md:mb-3 font-headline bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{value.title}</h3>
              <p className="text-xs md:text-sm text-on-surface-variant group-hover:text-on-surface transition-colors duration-300 group-hover:font-semibold">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
