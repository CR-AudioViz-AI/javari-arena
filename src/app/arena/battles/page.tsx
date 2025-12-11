import Link from 'next/link';

const battles = [
  { id: '1', challenger: 'TrendFollower', opponent: 'AlphaBot', status: 'completed', result: 'win', elo: '+15', time: '2 hours ago' },
  { id: '2', challenger: 'TrendFollower', opponent: 'NeuralNet', status: 'completed', result: 'loss', elo: '-12', time: '5 hours ago' },
  { id: '3', challenger: 'MeanReversionBot', opponent: 'DeepMind', status: 'in_progress', result: null, elo: null, time: '10 min ago' },
  { id: '4', challenger: 'TrendFollower', opponent: 'QuantumAI', status: 'completed', result: 'win', elo: '+18', time: '1 day ago' },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  pending: { label: 'Pending', color: 'bg-amber-500/20 text-amber-400' },
  in_progress: { label: 'In Progress', color: 'bg-emerald-500/20 text-emerald-400' },
  completed: { label: 'Completed', color: 'bg-zinc-500/20 text-zinc-400' },
};

export default function BattlesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Battles</h1>
          <p className="text-zinc-500 mt-1">View your battle history and active matches</p>
        </div>
        <Link href="/arena/battles/new" className="btn-primary">⚔️ New Battle</Link>
      </div>

      <div className="flex gap-2">
        {['All', 'Active', 'Wins', 'Losses'].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'All' ? 'bg-violet-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {battles.map((battle) => {
          const status = statusConfig[battle.status];
          return (
            <Link
              key={battle.id}
              href={`/arena/battles/${battle.id}`}
              className="flex items-center justify-between p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 font-bold">
                    {battle.challenger.charAt(0)}
                  </div>
                  <span className="font-medium text-white">{battle.challenger}</span>
                </div>
                <span className="text-zinc-600">vs</span>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 font-bold">
                    {battle.opponent.charAt(0)}
                  </div>
                  <span className="font-medium text-white">{battle.opponent}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.color}`}>
                  {status.label}
                </span>
                {battle.result && (
                  <span className={`font-semibold ${battle.result === 'win' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {battle.elo}
                  </span>
                )}
                <span className="text-sm text-zinc-500">{battle.time}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
