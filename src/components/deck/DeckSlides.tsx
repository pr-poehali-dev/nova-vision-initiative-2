import DeckSlidesIntro from "./DeckSlidesIntro"
import DeckSlidesMid from "./DeckSlidesMid"
import DeckSlidesOutro from "./DeckSlidesOutro"

interface DeckSlidesProps {
  current: number
}

export default function DeckSlides({ current }: DeckSlidesProps) {
  return (
    <>
      <DeckSlidesIntro current={current} />
      <DeckSlidesMid current={current} />
      <DeckSlidesOutro current={current} />
    </>
  )
}
