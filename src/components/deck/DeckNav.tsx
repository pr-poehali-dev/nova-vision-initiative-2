import { SLIDES_COUNT, SLIDE_TITLES } from "./DeckData"

interface DeckNavProps {
  current: number
  goTo: (index: number, dir: "next" | "prev") => void
}

export function DeckNavHeader({ current, goTo }: DeckNavProps) {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b border-border/50 shrink-0">
      <a href="/" className="font-serif text-lg text-foreground hover:text-sage transition-colors">
        Красавица города <span className="text-sage">2026</span>
      </a>
      <div className="flex items-center gap-3">
        {Array.from({ length: SLIDES_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className={`transition-all duration-200 rounded-full ${i === current ? "w-6 h-2 bg-terracotta" : "w-2 h-2 bg-border hover:bg-stone"}`}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
      <span className="font-mono text-xs text-muted-foreground tabular-nums">
        {String(current + 1).padStart(2, "0")} / {String(SLIDES_COUNT).padStart(2, "0")}
      </span>
    </div>
  )
}

export function DeckNavFooter({ current, goTo }: DeckNavProps) {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-t border-border/50 shrink-0">
      <button
        onClick={() => goTo(current - 1, "prev")}
        disabled={current === 0}
        className="flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Назад
      </button>

      <div className="text-center">
        <p className="text-xs text-muted-foreground/60 tracking-widest uppercase hidden md:block">
          {SLIDE_TITLES[current]}
        </p>
      </div>

      <button
        onClick={() => goTo(current + 1, "next")}
        disabled={current === SLIDES_COUNT - 1}
        className="flex items-center gap-2 px-4 py-2 text-xs tracking-widests uppercase text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        Далее
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  )
}
