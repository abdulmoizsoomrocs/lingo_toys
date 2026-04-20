import React from 'react';

const categories = [
  {id:'education',title:'Education',description:'Smart toys that boost learning and creativity.',image:'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop',bgColor:'bg-gradient-to-t from-primary/85',iconBg:'bg-primary-container',iconText:'text-on-primary-container'},
  {id:'indoor-1',title:'Indoor',description:'Fun and engaging toys for indoor playtime.',image:'https://images.unsplash.com/photo-1587654380645-4fcf6f86e0dc?q=80&w=1200&auto=format&fit=crop',bgColor:'bg-gradient-to-t from-tertiary/85',iconBg:'bg-tertiary-container',iconText:'text-on-tertiary-container'},
  {id:'outdoor',title:'Outdoor',description:'Active toys for outdoor adventures and fun.',image:'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop',bgColor:'bg-gradient-to-t from-secondary/85',iconBg:'bg-secondary-container',iconText:'text-on-secondary-container'},
  {id:'soft-toys',title:'Soft Toys',description:'Cute and cuddly companions for all ages.',image:'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1200&auto=format&fit=crop',bgColor:'bg-gradient-to-t from-primary/80',iconBg:'bg-primary-container',iconText:'text-on-primary-container'}
];

export default function CategoryShowcase() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-2 font-headline">
              Explore the Workshop
            </h2>
            <p className="text-on-surface-variant max-w-md text-sm md:text-base">
              Find the perfect match for every inquisitive mind.
            </p>
          </div>

          <div className="flex gap-3">
            <span className="px-4 py-2 md:px-6 md:py-2 bg-tertiary-container text-on-tertiary-container rounded-full font-bold text-xs md:text-sm">
              All Ages
            </span>
            <span className="px-6 py-2 bg-surface-container-high text-on-surface rounded-full font-bold text-sm">
              Preschool
            </span>
            <span className="px-6 py-2 bg-surface-container-high text-on-surface rounded-full font-bold text-sm">
              Elementary
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="group relative overflow-hidden rounded-xl bg-surface-container-low h-[450px] flex flex-col justify-end transition-all hover:-translate-y-2 cursor-pointer"
            >
              <img
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={category.image}
              />

              <div className={`absolute inset-0 bg-gradient-to-t ${category.bgColor} opacity-75`}></div>

              <div className="relative z-10 text-white p-6">
                <h3 className="text-3xl font-black mb-2 font-headline">
                  {category.title}
                </h3>
                <p className="text-white/90 mb-6 text-sm md:text-base">
                  {category.description}
                </p>

                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${category.iconBg} ${category.iconText} material-symbols-outlined`}>
                  arrow_outward
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}