const packages = [
  {
    title: "Генеральный партнёр",
    description: "Эксклюзивное размещение логотипа на всех материалах, баннерах и сцене. Анонс с главной сцены, VIP-места для 10 гостей, интеграция в трансляцию и пресс-релизы.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Титульный партнёр",
    description: "Логотип на баннерах и пресс-волле, упоминание с главной сцены, 6 VIP-мест, размещение в социальных сетях мероприятия и на официальном сайте.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Официальный партнёр",
    description: "Логотип на официальных материалах и сайте, упоминание в социальных сетях, 4 пригласительных билета на шоу, возможность брендированного стенда в фойе.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Информационный партнёр",
    description: "Размещение логотипа на сайте мероприятия и в пресс-материалах, взаимное упоминание в СМИ и социальных сетях, 2 пригласительных на шоу.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="packages" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
            Партнёрство
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            Спонсорские пакеты
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="group bg-background p-10 lg:p-14 hover:bg-card transition-colors duration-300"
            >
              <div className="text-sage mb-6">
                {pkg.icon}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{pkg.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
