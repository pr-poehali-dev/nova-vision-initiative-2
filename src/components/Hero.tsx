export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      {/* Фоновое фото — все участницы конкурса */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/585ce417-0642-4320-bfd1-d679b7f89523.jpg"
          alt="Участницы конкурса Красавица города"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-8">
          Коммерческое предложение для спонсоров · Саранск · 2026
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-primary-foreground mb-8 text-balance">
          Красавица
          <span className="block text-sage">города 2026</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-4">
          Главный конкурс красоты Республики Мордовия возвращается — грандиознее, чем когда-либо. 13 участниц, живая музыка от звёздного артиста и более 3 000 гостей в зале.
        </p>
        <p className="text-sm text-sage tracking-widest uppercase mb-12">
          11 июля 2026 · Огарев Арена · Саранск
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#packages"
            className="inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-colors duration-300"
          >
            Спонсорские пакеты
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 border border-primary-foreground/30 hover:border-primary-foreground/60"
          >
            Связаться с нами
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary-foreground/40 to-transparent" />
      </div>
    </section>
  )
}
