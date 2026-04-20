import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {id:'educational',title:'Education',description:'Smart toys that boost learning and creativity.',image:'https://res.cloudinary.com/divpqqbtn/image/upload/f_auto,q_auto/edu_qvfy4s',bgColor:'bg-gradient-to-t from-primary/85',iconBg:'bg-primary-container',iconText:'text-on-primary-container'},
  {id:'indoor',title:'Indoor',description:'Fun and engaging toys for indoor playtime.',image:'https://res.cloudinary.com/divpqqbtn/image/upload/f_auto,q_auto/WhatsApp_Image_2026-04-20_at_7.55.17_PM_zwzy8v',bgColor:'bg-gradient-to-t from-tertiary/90',iconBg:'bg-tertiary-container',iconText:'text-on-tertiary-container'},
  {id:'outdoor',title:'Outdoor',description:'Active toys for outdoor adventures and fun.',image:'https://res.cloudinary.com/divpqqbtn/image/upload/f_auto,q_auto/outdoor_tntzil',bgColor:'bg-gradient-to-t from-secondary/85',iconBg:'bg-secondary-container',iconText:'text-on-secondary-container'},
  {id:'stuff',title:'Stuff Toys',description:'Cute and cuddly companions for all ages.',image:'https://res.cloudinary.com/divpqqbtn/image/upload/f_auto,q_auto/WhatsApp_Image_2026-04-20_at_9.44.19_PM_dhjx41',bgColor:'bg-gradient-to-t from-primary/80',iconBg:'bg-primary-container',iconText:'text-on-primary-container'}
];

export default function CategoryShowcase() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/shop?filter=${categoryId}`);
  };

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

        {/* Category Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              id={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="group relative overflow-hidden rounded-2xl bg-surface-container-low h-[450px] flex flex-col justify-end transition-all hover:-translate-y-3 cursor-pointer hover:ring-4 hover:ring-purple-400/70 hover:shadow-2xl shadow-lg animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <img
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-120 transition-transform duration-1000"
                src={category.image}
              />

              <div className={`absolute inset-0 bg-gradient-to-t ${category.bgColor} opacity-85 group-hover:opacity-75 transition-opacity duration-300`}></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 group-hover:via-white/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative z-10 text-white p-6 transform group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl md:text-4xl font-black mb-2 font-headline drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300">
                  {category.title}
                </h3>
                <p className="text-white/95 mb-6 text-sm md:text-base drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300">
                  {category.description}
                </p>

                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${category.iconBg} ${category.iconText} material-symbols-outlined transition-all duration-300 group-hover:scale-125 group-hover:rotate-45 group-hover:shadow-lg shadow-md`}>
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