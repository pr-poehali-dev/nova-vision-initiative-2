export function Philosophy() {
  return (
    <section id="about" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] bg-sand overflow-hidden">
            <img
              src="/minimalist-japanese-interior-design-with-natural-w.jpg"
              alt="Огарев Арена, Саранск"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-terracotta/80" />
          </div>

          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
              О мероприятии
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance">
              Событие,
              <span className="italic"> которое</span>
              <br />
              запоминается
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                «Красавица города 2026» — масштабный конкурс красоты и таланта, объединяющий лучших представительниц Республики Мордовия на одной сцене Огарев Арены в Саранске.
              </p>
              <p>
                Мероприятие привлекает широкое медиа-освещение, тысячи зрителей и создаёт мощную платформу для брендов, стремящихся достичь активной, вовлечённой аудитории региона.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">3000+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Зрителей</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">20+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Участниц</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">100к+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Охват онлайн</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
