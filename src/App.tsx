import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const countColor =
    count > 0 ? 'text-emerald-400' : count < 0 ? 'text-rose-400' : 'text-white'

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-12 px-6 select-none">
      <h1 className="text-gray-500 text-lg font-medium tracking-widest uppercase">
        Counter
      </h1>

      <div
        className={`text-[6rem] sm:text-[9rem] font-bold tabular-nums leading-none transition-colors duration-150 ${countColor}`}
      >
        {count}
      </div>

      <div className="flex gap-4 w-full max-w-xs">
        <button
          onClick={() => setCount(c => c - 1)}
          className="flex-1 h-16 rounded-2xl bg-gray-800 text-white text-3xl font-bold active:scale-95 hover:bg-gray-700 transition-all duration-100"
          aria-label="Decrease"
        >
          −
        </button>

        <button
          onClick={() => setCount(c => c + 1)}
          className="flex-1 h-16 rounded-2xl bg-emerald-600 text-white text-3xl font-bold active:scale-95 hover:bg-emerald-500 transition-all duration-100"
          aria-label="Increase"
        >
          +
        </button>
      </div>

      <button
        onClick={() => setCount(0)}
        className="text-gray-500 text-sm font-medium tracking-wider uppercase hover:text-gray-300 transition-colors duration-150 active:scale-95"
        aria-label="Reset"
      >
        Reset
      </button>
    </div>
  )
}
