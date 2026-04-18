import React from 'react';

const instagramPhotos = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw8MrJMEVI7I5nK5tyxElAhjDfi8WX8uez3q6H-L1WurfmENZZYdFky1nUs8XYMgh8fgvTiknkteHqN8of4pVFIjKErSBfKbZQw0j8ttciESCu41w5FJdM-aX-e1oJrEQknRZIDYAV6WSyAsEBvHb7cBxBZuBghZEjfgv68WwbqROuurj9rh2GsgUMzdvIx_FHWJLGzLsLr6uEBO7HoDeec6G-QiM0liGtdTCZilGc0P7QXy8hFS7TdGEkqr5zKeGIxSvPGAQsRNEN',
    alt: 'Child playing with building blocks',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNf1Vh0s0NWU8pKO77PuHvMufnJSfsmXxAjBpWFNMurTuXeGxAA6pWZkw_MjstWQTfsXlwkCXnDUCmzsbBlwDPvjOUNhKBXmcpz7pWBLObwQ90Km7LTQPwHTiXicabgH8X1Zqnzo-WaeMeZ7vFL53czPlWvjhs0r5bBYAaNUFfRLxebR2VY-zut7EfHseMmP2lg8ygX8hCecxFk1vY5Dzdn0twtPXwQeHySbIVR6c1PhbSyGFivid9teDnUswwKBByFVlvdcMWZVBc',
    alt: 'Hands assembling toy robot',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9fDwj-Kz-0wuqWUZleCHxvo7nmkZY_-yMurM_CBunkdb80iBhr6V_N9UgKbfGM4zkiydegFD9osk_M5p-nqoeiaKQx6GxrAKGpxSOUAaC5yLsNNb9GbtbOw2gLzGgaTEAJ0X3G-a1tHmAPgu6cyLOewk9h4X_3uzX0JEJNXrPO3yTiJ1G_X-OkVfWKEx3DWOcQklD_gysJdWJaXAV34OACzFl3LQdixf5lLqEAbj33_moi00KuuF7vq3rYV14N1ao3EMOD5j8GGw',
    alt: 'Anime collectibles shelf',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1s_DBQiBDtqwSHfLDrRCC681mKfw84azTyhQ12E4o_GZn6wjO2Ho24-k4RLGc9zN6qA8vkNDNnloYFdxurXuCc-4Hl3v933EmmyA2V6u2TIFSS9Z7ngNXz6zieOMa9oUyKSgBpJoejtHE6Swh6ZyvmRX1YY_8S1j7XXhZ5028Y-YHfe8qn8Yi_r_z0Qgv0IB0cSZQLEBl6JekFuetR_xjukeK9hEkmCTeplNNpPJAeviQ9BWKJTVocIQe6JAd3o0Lpf99vnkXIa1U',
    alt: 'Workshop tools and project',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO0pJmxVjuVB2dFyaYUZTfGN_VCPrVFumMgOvDsZoDndlbDl6R1ZvboB1lhvAxayXdYc9KrN4eZpNCdXAVKd17pFXE-_yFO4fQ2uYgDsbS_gehprLkDIa1tdSAZ6je6WmA2AO2TEm3rtxbbA4xTj6KCmB-xAjirV6qp6j_Oob9qapW-ucflB74vhhr6AEgKABmx5Mcwy6PxhOL7uKBN0yUsw9ilXksED1Oke242AcXyb-bSiVtj6yz4rLvd0NAY0JW2Pj_sV7kblky',
    alt: 'Children collaborating on science experiment',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9pQ1KbgOVpVTf9NA4jG4vHFdwzc1iQoVzkRDyegooi1N-qWb3Nq7fKpZzvN0pFiTw8EZIqYVfMULptsMK7V6R-cJdznauEHVNqtouGnKGqeu6STUXbe1_MrAHnixKEkCf1DJ9geG2kHfGnP9j77CeHKB6he2lCHutNa8h_7UsfL9yTr8jobm2M8E2Bnpbg6iE5OsK9hnHbXI77gAe-E7M-lSp88c7nJC27b4g-Ngh4cks8UC92M12OniYaOayQ3imDycIh2_f6e6W',
    alt: 'Wooden toys on nursery rug',
  },
];

export default function InstagramGrid() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-full overflow-hidden">
        <div className="px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-black text-on-surface font-headline">#LingoToysLife</h2>
            <p className="text-on-surface-variant">See how our community plays.</p>
          </div>
          <span className="font-bold text-tertiary">@lingotoys_official</span>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar">
          {instagramPhotos.map((photo, index) => (
            <div key={index} className="min-w-[250px] sm:min-w-[300px] h-[250px] sm:h-[300px] rounded-lg overflow-hidden flex-shrink-0 hover:shadow-lg transition-shadow">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt={photo.alt} src={photo.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
