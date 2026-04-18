import React from 'react';

const categories = [
  {
    id: 'stem',
    title: 'STEM Kits',
    description: 'Build, code, and discover the laws of physics.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPqBTwvCyEJ3HVHUEow0aJPWw50W_PfXujeS5FFj2AR0d1jLCQ28ElStHEYo9brYB8PVWLRlDTpONrf72LVIXDwce29JSI4OWL2jeNE09Ve-t-1FB_iLAqsKfry1Ln6fKl90BgRZ2Y3Bg-PzyMrvcevnw4OHGClIQds2nRrS1n4yITrrSG3mB7o9w9-RqaYVtZ1vdSWiau3DfW0KqTUDPpHff7doN02YWaUzF3ESzuVINZ71oPJ0hXvRxGC4VDIfD-01bEhoOjvwHE',
    bgColor: 'bg-gradient-to-t from-primary/90',
    iconBg: 'bg-primary-container',
    iconText: 'text-on-primary-container',
  },
  {
    id: 'anime',
    title: 'Anime',
    description: 'Premium collectibles for the ultimate fan.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgwNtzF9jpz1saRMyYz_JRGTU-A6w10eIHX6Y5Vh5WSNYQCPmtliaMmsOr3u71amuZtA1tgNYYRYDDQU62VnRzDNfEX69VRUK3vMhsMDDwN49XaPLL_r1CLp1DuZusddQXpQR8SEErr2YJ--5ecepcMC6oo2pD0QkCr1wiEqZL1r_JBWkroT2510snTGEXJKz53kjW4TwM3UXAGeR4OOSatEXslPG_Gf9ytcBt0KPV-82e-KmjJ9NFJMPEU0X8seKnIM_kSTX5y6Qj',
    bgColor: 'bg-gradient-to-t from-tertiary/90',
    iconBg: 'bg-tertiary-container',
    iconText: 'text-on-tertiary-container',
  },
  {
    id: 'educational',
    title: 'Educational',
    description: 'Foundational play for growing minds.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyeprvoY7EJGEAxOPaQXVZDrspfkzDn-gOv6i7WEhyRCoi6tf2wK2eejaXP4aePlRsVqrrs6-kUfHPM9hIkTfftP0LReDLp1OH71FRbMYzWu4-6VztkJzxiXSeL6cpVQ8vi2QcOz96Ce0N2H0x2rZp6fcaZC_vlwxzAQ6vrM77XBzuibxgLKLzUaT4UTCnLtGnwxR98HkgLdb1mgDGGO1geuifQCWds56eB3FbYNeI-ze9w6jHFY8XKbORpcc1ed7aT69VdbWj52cB',
    bgColor: 'bg-gradient-to-t from-secondary/90',
    iconBg: 'bg-secondary-container',
    iconText: 'text-on-secondary-container',
  },
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

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="group relative overflow-hidden rounded-xl bg-surface-container-low p-8 h-[450px] flex flex-col justify-end transition-all hover:-translate-y-2 cursor-pointer"
            >
              <img
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                src={category.image}
              />
              <div className={`absolute inset-0 ${category.bgColor} via-transparent to-transparent`}></div>
              <div className="relative z-10 text-white">
                <h3 className="text-3xl font-black mb-2 font-headline">{category.title}</h3>
                <p className="text-white/80 mb-6">{category.description}</p>
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
