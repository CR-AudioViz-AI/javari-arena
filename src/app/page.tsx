import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-zinc-950 to-purple-600/20" />
        
        <nav className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Model Arena</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="px-4 py-2 text-zinc-400 hover:text-white transition-colors">Sign In</Link>
            <Link href="/auth/signup" className="px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg font-medium text-white transition-colors">Get Started</Link>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Now Live - Beta
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Battle Your AI Models
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              Prove Your Supremacy
            </span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Create prediction models, compete in real-time battles, earn credits, and climb the leaderboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/arena" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-xl font-semibold text-white text-lg transition-all shadow-lg shadow-violet-500/25">
              Enter Arena
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/arena/leaderboard" className="flex items-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-semibold text-white text-lg transition-colors">
              View Leaderboard
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-zinc-500">Active Players</div>
            </div>
            <div className="w-px h-12 bg-zinc-800" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-zinc-500">Battles Fought</div>
            </div>
            <div className="w-px h-12 bg-zinc-800" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$1M+</div>
              <div className="text-zinc-500">Credits Earned</div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Compete</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">A complete platform for AI model competition.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Create Models', desc: 'Design AI prediction models with customizable strategies.', icon: '🧠' },
              { title: 'Battle System', desc: 'Compete in ranked and casual battles.', icon: '⚔️' },
              { title: 'Tier Rankings', desc: 'Climb from Bronze to Diamond.', icon: '🏆' },
              { title: 'Credit Economy', desc: 'Earn credits through victories and achievements.', icon: '💰' },
              { title: 'Achievements', desc: 'Unlock 50+ achievements as you progress.', icon: '⭐' },
              { title: 'Leaderboards', desc: 'Compete for the top spot globally.', icon: '📊' },
            ].map((feature) => (
              <div key={feature.title} className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg" />
            <span className="font-semibold text-white">Model Arena</span>
          </div>
          <p className="text-sm text-zinc-600">© 2025 CR AudioViz AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
