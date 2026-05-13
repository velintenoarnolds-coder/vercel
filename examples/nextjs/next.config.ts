export default function AnimeLunaticsSite() { return ( <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans"> {/* Background Glow */} <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

{/* Dragon Smoke Effects */}
  <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-cyan-500/20 to-transparent blur-3xl opacity-60" />
  <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-red-500/20 to-transparent blur-3xl opacity-60" />

  {/* Floating Smoke */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />

  {/* Main Content */}
  <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center">
    {/* Logo Circle */}
    <div className="relative mb-8">
      <div className="w-44 h-44 rounded-full border border-zinc-700 bg-zinc-900/80 backdrop-blur-lg shadow-2xl flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-red-500/20" />

        {/* Yin Yang Inspired Symbol */}
        <div className="relative w-24 h-24 rounded-full border-4 border-white flex items-center justify-center rotate-12">
          <div className="absolute left-0 w-12 h-24 bg-black rounded-l-full" />
          <div className="absolute right-0 w-12 h-24 bg-white rounded-r-full" />
          <div className="absolute top-4 left-8 w-4 h-4 bg-white rounded-full" />
          <div className="absolute bottom-4 right-8 w-4 h-4 bg-black rounded-full" />
        </div>
      </div>
    </div>

    {/* Title */}
    <h1 className="text-5xl md:text-7xl font-black tracking-widest uppercase bg-gradient-to-r from-cyan-400 via-white to-red-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
      The Anime Lunatics
    </h1>

    {/* Slogan */}
    <p className="mt-6 max-w-2xl text-zinc-300 text-lg md:text-2xl italic leading-relaxed">
      “Debates about updates, you want it, we got it.”
    </p>

    {/* Underground Cafe Card */}
    <div className="mt-16 max-w-5xl w-full grid md:grid-cols-2 gap-8">
      <div className="bg-zinc-900/70 border border-zinc-800 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition duration-300">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          Underground Vibes
        </h2>
        <p className="text-zinc-300 leading-relaxed text-lg">
          Hidden café energy. Dark corners. Anime posters on concrete walls.
          Whispered theories about the latest arcs and heated debates over
          the strongest characters ever created.
        </p>
      </div>

      <div className="bg-zinc-900/70 border border-zinc-800 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition duration-300">
        <h2 className="text-3xl font-bold text-red-400 mb-4">
          Lunatic Members
        </h2>
        <p className="text-zinc-300 leading-relaxed text-lg">
          Join the elite anime thinkers, manga readers, theorists, meme
          masters, and chaos debaters. If you can defend your anime takes,
          you belong here.
        </p>
      </div>
    </div>

    {/* Buttons */}
    <div className="mt-14 flex flex-wrap justify-center gap-6">
      <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg shadow-[0_0_25px_rgba(34,211,238,0.6)] transition duration-300">
        Enter The Café
      </button>

      <button className="px-8 py-4 rounded-2xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-black font-bold text-lg shadow-[0_0_25px_rgba(239,68,68,0.4)] transition duration-300">
        Join The Lunatics
      </button>
    </div>

    {/* Quote */}
    <div className="mt-20 max-w-3xl">
      <p className="text-zinc-500 text-lg md:text-xl italic">
        “In the shadows of the underground café, legends argue over anime,
        destiny, and who really solos the verse.”
      </p>
    </div>
  </div>

  {/* Bottom Glow */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-500/10 to-transparent blur-2xl" />
</div>

); }
