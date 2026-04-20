import Navigation from "../components/Navigation";  
import Footer from "../components/Footer";  
export default function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen">
  <Navigation />   

      <main className="pt-24">
        <section className="px-8 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-bold text-sm mb-6 uppercase tracking-widest shadow-md">✨ Our Origin Story</span>
              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent leading-tight mb-8">Where Science Meets <span className="italic text-pink-600">Sakura</span>.</h1>
              <p className="text-xl text-teal-700 leading-relaxed mb-10 max-w-xl font-semibold">
                LingoToys was born in a small workshop where mechanical engineering met hand-drawn animation. We didn't just want to build robots; we wanted to build characters with souls and stories.
              </p>
              <div className="flex gap-4">
   <a
  href="https://www.instagram.com/lingo_toys?igsh=MTdvcTJyNXpyaWUyaQ%3D%3D&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-1 shadow-md"
>
  🚀 Join the Adventure
</a>

<a
  href="https://www.youtube.com/@Lingo_Toys"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-300 to-pink-300 text-purple-900 rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-1 shadow-md"
>
  🎬 Watch Our Story
</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-50 blur-3xl"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-cyan-400 rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  alt="The LingoToys Workshop"
                  className="w-full aspect-square object-cover"
                  data-alt="Modern workshop interior with vintage Japanese robot toys, blueprints, and high-tech STEM equipment in warm afternoon sunlight"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy72Be718kxfS0ThNMBsqfhbWRqLNqOHQyd5pjOfIrw3oopR0wFvKVHZWogtTpa9q5mMhkhP4ZDwY7Tku11mU37gUwduDBGr-feHsbUlDL_e9E4vPrb2zMC8dabfOOsFr0LAOw45AoKi8XitCmMSrRzI0qwPFYIQQ1EJvpWwlZVy7wJ96F-hyhRRXofG4urCRdEzBIDtKt55ryC3w7C_aNG8O9JQ5WZKsrxfLUPTYfnTxq_Lsx7jWJwUgOgnzmf6aJzV7y64rwyVCN"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-lg shadow-xl max-w-xs hidden md:block border-4 border-orange-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500"></span>
                  <span className="font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Prototype #01</span>
                </div>
                <p className="text-sm text-orange-900 font-semibold">The "Neo-Tech Samurai" was our very first kit, combining hydraulics with traditional armor design.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 py-24 rounded-t-xl">
          <div className="px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">🏛️ The Workshop Pillars</h2>
              <p className="text-purple-700 max-w-2xl mx-auto font-semibold text-lg">We are reimagining educational toys through a lens of artistic wonder and technical precision.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-gradient-to-br from-green-100 to-emerald-100 p-12 rounded-xl shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-shadow border-4 border-green-300">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-md">
                    <span className="material-symbols-outlined text-white text-3xl">rocket_launch</span>
                  </div>
                  <h3 className="text-3xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent mb-6">Our Mission</h3>
                  <p className="text-xl text-green-800 leading-relaxed font-semibold">To empower the next generation of creators by merging the logical rigor of STEM with the boundless emotional depth of Anime storytelling. We believe every child is an engineer of their own dreams.</p>
                </div>
                <div className="mt-8 pt-8 border-t-2 border-green-400 flex gap-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full text-xs font-bold text-green-900">#Innovation</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full text-xs font-bold text-green-900">#Creativity</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-12 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div>
                  <div className="w-16 h-16 bg-white/30 rounded-lg flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-white text-3xl">visibility</span>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-6">Our Vision</h3>
                  <p className="text-lg leading-relaxed italic opacity-95">"A world where the barriers between technical skill and artistic expression are dissolved through play."</p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <div className="w-12 h-1 bg-white rounded-full opacity-50"></div>
                  <span className="text-sm font-bold uppercase tracking-widest">Est. 2024</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-300 to-yellow-300 p-8 rounded-xl shadow-lg hover:translate-y-[-8px] transition-transform border-4 border-orange-400">
                <span className="material-symbols-outlined text-orange-900 text-4xl mb-4">handyman</span>
                <h4 className="text-xl font-bold text-orange-900 mb-3">✋ Tactile First</h4>
                <p className="text-orange-800 text-sm font-semibold">We believe in the power of physical building. No screens, just pieces, hands, and imagination.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-300 to-rose-300 p-8 rounded-xl shadow-lg hover:translate-y-[-8px] transition-transform border-4 border-pink-400">
                <span className="material-symbols-outlined text-pink-900 text-4xl mb-4">auto_awesome</span>
                <h4 className="text-xl font-bold text-pink-900 mb-3">📖 Narrative Driven</h4>
                <p className="text-pink-800 text-sm font-semibold">Every kit includes a manga chapter that provides context and motivation for the build.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-300 to-indigo-300 p-8 rounded-xl shadow-lg hover:translate-y-[-8px] transition-transform border-4 border-purple-400 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl font-black text-purple-900 block">100%</span>
                  <span className="text-xs font-bold uppercase text-purple-900 tracking-wider">♻️ Recyclable Acrylic</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 relative order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    alt="Details"
                    className="rounded-xl aspect-[3/4] object-cover shadow-lg border-4 border-purple-400"
                    data-alt="Close-up of colorful mechanical gears and anime-style character figurines on a bright yellow work surface"
src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop"
/>
                  <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center p-4 border-4 border-purple-400">
                    <span className="text-white font-black text-center text-sm">🔧 CRAFTED WITH PRECISION</span>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-48 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-xl overflow-hidden border-4 border-orange-400">
                    <img
                      alt="Anime Inspiration"
                      className="w-full h-full object-cover opacity-70"
                      data-alt="Digital art illustration of a futuristic city in a soft anime style with vibrant neon lights and lush greenery"
src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop
"
/>
                  </div>
                  <img
                    alt="Assembly"
                    className="rounded-xl aspect-square object-cover shadow-lg border-4 border-pink-400"
                    data-alt="Hands assembling a complex mechanical wooden toy robot with precision tools on a clean white desk"
src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop
"
/>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-8 leading-tight">🌉 Bridging Two Worlds</h2>
              <div className="space-y-6 text-teal-700 text-lg">
                <p className="font-semibold">LingoToys was founded on a simple observation: STEM education often lacks the emotional connection that drives lifelong passion. Simultaneously, Anime storytelling offers some of the most inspiring technological concepts ever imagined.</p>
                <p className="font-bold text-pink-600 text-xl">💡 We decided to build the bridge.</p>
                <p className="font-semibold">By integrating technical building kits with high-stakes narrative arcs, we transform "homework" into an "epic quest." Our kits aren't just toys—they are artifacts from a world your children help create.</p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  <img alt="Team 1" className="w-12 h-12 rounded-full border-4 border-green-400 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBFIhQnQ5QM7O0seeR6oZFVS7P6ouSksSA3znZkB6_zaLeS9QGYaoCPeWyI5WfCp6Zntvhzl0SChVKSIF4d3Hka1Y9Sj1WJhpN4Riro4js1yzMhypABr_M-hJl8X532ie8fDF83ZK6REWHfFlmbZ_LkBMBVd6Eb8FJoG3L0fGKhB0o_m46p-ubU8ciUCLVoFylEAEP8iMpym8Vxk8N1yzHxUqnbqV6lLRgQBuEpVhWIZESUxDuYG7-Gk-6Z0tJsKU_DyfL4aqFMTUz" />
                  <img alt="Team 2" className="w-12 h-12 rounded-full border-4 border-purple-400 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnAWKbcA4VJR-6hwGAQyI5LU-29mWoq7A9V743SRjiauI1fKMEfb6zzFnWkKR54cB3ou3iWbkhJ1GmUsbD7OJhxOb6J8ZpjRxMmGKf3WYpNj_bD4GT4mTWIik6ZLVtLyQDBuOPswl_JD0zRtsZXrQYyf5e88cZqXXOCMkVlXptJL50EJd9aYpVmdHM1w9_ZGBrvMvSXawNUJDy23PBTVk06oySYtFiEbo5BB9oBC-ZErKE8Jfvo_Jd0KE3vsYvQvkzjTVy5SR0x-Vh" />
                  <img alt="Team 3" className="w-12 h-12 rounded-full border-4 border-pink-400 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArUegXQDUHANJi8qBIXaB6PPHkleKwi57fdA_2SOmrN9R3tveOBLhQVsc_utNzgE7PwFcwFTiV2k9wgOmMbnB6PxHEjMEgY-gCjjz-P6KHkxGwoP_hyd6B5GpsRHbxjmanToTdsonv5wwi24WWngpBbek_kqW4y-9I7dGG-MZ2scM6yqoja-IrOE_j9J9SKQbXQoUr5-vabeNrcjtVI4Gucq9ukCxsBaFbg_8poJcb68WVDirhyVmqB0MfA7g7EipDKdudopgrh6eJ" />
                </div>
                <span className="text-sm font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">👥 Meet the Designers →</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 pb-24 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-red-300 via-yellow-300 to-green-300 p-12 md:p-20 rounded-xl relative overflow-hidden text-center border-4 border-yellow-400 shadow-xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10 drop-shadow-lg">🎉 Ready to start your first build?</h2>
            <p className="text-yellow-900 text-xl mb-10 max-w-2xl mx-auto relative z-10 font-bold drop-shadow-md">Explore our latest kits and join a community of thousands of young builders.</p>
            <a className="inline-flex items-center gap-2 px-10 py-5 bg-white text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl relative z-10" href="#">
              <span className="text-white">🛍️ Browse Kits</span> <span className="material-symbols-outlined text-white">arrow_forward</span>
            </a>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
