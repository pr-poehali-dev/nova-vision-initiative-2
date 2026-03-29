import { useState, useEffect, useCallback } from "react"
import { SLIDES_COUNT } from "@/components/deck/DeckData"
import { DeckNavHeader, DeckNavFooter } from "@/components/deck/DeckNav"
import DeckSlides from "@/components/deck/DeckSlides"

export default function Deck() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const goTo = useCallback((index: number, dir: "next" | "prev") => {
    if (animating || index < 0 || index >= SLIDES_COUNT) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 220)
  }, [animating])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1, "next")
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1, "prev")
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [current, goTo])

  const slideClass = `transition-all duration-200 ${animating
    ? direction === "next" ? "opacity-0 translate-y-4" : "opacity-0 -translate-y-4"
    : "opacity-100 translate-y-0"}`

  return (
    <div className="fixed inset-0 bg-background flex flex-col overflow-hidden">
      <DeckNavHeader current={current} goTo={goTo} />

      <div className="flex-1 overflow-hidden relative">
        <div className={slideClass + " h-full"}>
          <DeckSlides current={current} />
        </div>
      </div>

      <DeckNavFooter current={current} goTo={goTo} />
    </div>
  )
}
