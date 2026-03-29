export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 overflow-hidden">
      {/* Многослойный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo/10 via-background to-rose/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-sage/5" />

      {/* Декоративные цветовые пятна */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo/12 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/3 left-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-8 font-medium">
          Коммерческое предложение для спонсоров · Саранск · 2026
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-foreground mb-8 text-balance">
          Красавица
          <span className="block bg-gradient-to-r from-sage via-terracotta to-rose bg-clip-text text-transparent">
            города 2026
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
          Главный конкурс красоты Республики Мордовия возвращается — грандиознее, чем когда-либо. 13 участниц, живая музыка от звёздного артиста и более 3 000 гостей в зале.
        </p>

        {/* Цветная плашка с датой */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 mb-12 border border-terracotta/30 bg-terracotta/8">
          <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
          <p className="text-sm text-terracotta tracking-widest uppercase font-medium">
            11 июля 2026 · Огарев Арена · Саранск
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#packages"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sage to-sage/80 text-primary-foreground text-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300 shadow-lg shadow-sage/25"
          >
            Спонсорские пакеты
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 border border-border hover:border-foreground/40"
          >
            Связаться с нами
          </a>
        </div>
      </div>

      {/* Нижние цветные полосы */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sage via-terracotta to-rose opacity-60" />

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone to-transparent" />
      </div>
    </section>
  )
}
