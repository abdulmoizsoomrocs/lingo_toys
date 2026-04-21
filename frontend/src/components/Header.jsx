export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fdd355]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(47,47,46,0.08)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black text-[#705900] tracking-tight">
            LingoToys
          </span>

          <div className="hidden md:flex gap-6">
            <a className="text-[#00618e] border-b-4 border-[#00618e] pb-1 font-bold">
              STEM Kits
            </a>
            <a className="text-[#8c4a00] hover:text-[#00618e] font-bold">
              Anime
            </a>
            <a className="text-[#8c4a00] hover:text-[#00618e] font-bold">
              Educational
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-white/50 px-4 py-2 rounded-full">
            <span className="material-symbols-outlined mr-2">search</span>
            <input
              className="bg-transparent outline-none text-sm"
              placeholder="Search toys..."
            />
          </div>

          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer">
              favorite
            </span>
            <span className="material-symbols-outlined cursor-pointer">
              shopping_cart
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}