const packages = [
  {
    title: "Генеральный партнёр",
    price: "450 000 ₽",
    description: "Эксклюзивное размещение логотипа на всех материалах, баннерах и сцене. Анонс с главной сцены, VIP-места для 10 гостей, интеграция в трансляцию и пресс-релизы.",
    perks: ["Логотип на сцене и всех баннерах", "10 VIP-мест в партере", "Интеграция в прямую трансляцию", "Анонс со сцены ведущим", "Пресс-волл и фотозона"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    highlight: true,
    accent: "gold",
    accentBg: "bg-gold",
    accentText: "text-gold",
  },
  {
    title: "Титульный партнёр",
    price: "350 000 ₽",
    description: "Логотип на баннерах и пресс-волле, упоминание с главной сцены, 6 VIP-мест, размещение в социальных сетях мероприятия и на официальном сайте.",
    perks: ["Логотип на баннерах и пресс-волле", "6 VIP-мест", "Упоминание со сцены", "Посты в соцсетях мероприятия", "Размещение на официальном сайте"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Официальный партнёр",
    price: "300 000 ₽",
    description: "Логотип на официальных материалах и сайте, упоминание в социальных сетях, 4 пригласительных билета на шоу, возможность брендированного стенда в фойе.",
    perks: ["Логотип на материалах и сайте", "4 пригласительных билета", "Брендированный стенд в фойе", "Упоминание в соцсетях", "Фото и видео с мероприятия"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Информационный партнёр",
    price: "200 000 ₽",
    description: "Размещение логотипа на сайте мероприятия и в пресс-материалах, взаимное упоминание в СМИ и социальных сетях, 2 пригласительных на шоу.",
    perks: ["Логотип на сайте и пресс-материалах", "2 пригласительных билета", "Взаимный пиар в СМИ", "Упоминание в соцсетях", "Пресс-релиз с упоминанием бренда"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    highlight: false,
  },
]

export function Services() {
  return (
    <>
      {/* Спонсорские пакеты */}
      <section id="packages" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Партнёрство</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
              Спонсорские пакеты
            </h2>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
              Выберите формат присутствия, который соответствует целям вашего бренда
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Генеральный партнёр",
                price: "450 000 ₽",
                description: "Эксклюзивное размещение логотипа на всех материалах, баннерах и сцене. Анонс с главной сцены, VIP-места для 10 гостей, интеграция в трансляцию.",
                perks: ["Логотип на сцене и всех баннерах", "10 VIP-мест в партере", "Интеграция в прямую трансляцию", "Анонс со сцены ведущим", "Пресс-волл и фотозона"],
                topColor: "bg-gradient-to-r from-gold to-terracotta",
                badge: "Топ",
                badgeColor: "bg-gold text-foreground",
                numColor: "text-gold",
              },
              {
                title: "Титульный партнёр",
                price: "350 000 ₽",
                description: "Логотип на баннерах и пресс-волле, упоминание с главной сцены, 6 VIP-мест, размещение в социальных сетях и на официальном сайте.",
                perks: ["Логотип на баннерах и пресс-волле", "6 VIP-мест", "Упоминание со сцены", "Посты в соцсетях мероприятия", "Размещение на официальном сайте"],
                topColor: "bg-gradient-to-r from-rose to-indigo",
                badge: null,
                badgeColor: "",
                numColor: "text-rose",
              },
              {
                title: "Официальный партнёр",
                price: "300 000 ₽",
                description: "Логотип на официальных материалах и сайте, упоминание в соцсетях, 4 пригласительных, возможность брендированного стенда в фойе.",
                perks: ["Логотип на материалах и сайте", "4 пригласительных билета", "Брендированный стенд в фойе", "Упоминание в соцсетях", "Фото и видео с мероприятия"],
                topColor: "bg-gradient-to-r from-sage to-indigo",
                badge: null,
                badgeColor: "",
                numColor: "text-sage",
              },
              {
                title: "Информационный партнёр",
                price: "200 000 ₽",
                description: "Размещение логотипа на сайте и в пресс-материалах, взаимный пиар в СМИ и соцсетях, 2 пригласительных на шоу.",
                perks: ["Логотип на сайте и пресс-материалах", "2 пригласительных билета", "Взаимный пиар в СМИ", "Упоминание в соцсетях", "Пресс-релиз с упоминанием бренда"],
                topColor: "bg-gradient-to-r from-stone to-stone/60",
                badge: null,
                badgeColor: "",
                numColor: "text-muted-foreground",
              },
            ].map((pkg) => (
              <div
                key={pkg.title}
                className="group bg-background border border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`h-1.5 ${pkg.topColor}`} />
                <div className="p-10 lg:p-12">
                  <div className="flex items-start justify-between mb-5 gap-4">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground">{pkg.title}</h3>
                      {pkg.badge && (
                        <span className={`inline-block mt-2 px-3 py-0.5 text-xs tracking-widest uppercase font-medium ${pkg.badgeColor}`}>
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <p className={`font-serif text-xl shrink-0 ${pkg.numColor}`}>{pkg.price}</p>
                  </div>
                  <p className="leading-relaxed mb-6 text-muted-foreground text-sm">{pkg.description}</p>
                  <ul className="space-y-2.5">
                    {pkg.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <svg className={`w-4 h-4 shrink-0 ${pkg.numColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Финансовая модель */}
      <section id="finance" className="py-32 lg:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Финансовая модель</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
                  Охват и
                  <span className="italic"> отдача</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мероприятия аналогичного формата — «Мисс Мордовия», городские конкурсы Нижнего Новгорода и Казани — стабильно демонстрируют кратный рост узнаваемости брендов-спонсоров в регионе.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-0">
              {[
                { label: "Зрителей офлайн в Огарев Арене", value: "3 000+", bar: 60, color: "bg-terracotta", textColor: "text-terracotta" },
                { label: "Общий охват в аналитике (соцсети + СМИ)", value: "100 000+", bar: 100, color: "bg-rose", textColor: "text-rose" },
                { label: "Просмотры видеозаписи после эфира", value: "50 000+", bar: 50, color: "bg-indigo", textColor: "text-indigo" },
                { label: "Участниц конкурса", value: "13", bar: 13, color: "bg-sage", textColor: "text-sage" },
              ].map((item) => (
                <div key={item.label} className="py-10 lg:py-12 border-t border-border last:border-b">
                  <div className="flex items-end justify-between mb-4 gap-4">
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{item.label}</p>
                    <p className={`font-serif text-3xl lg:text-4xl shrink-0 ${item.textColor}`}>{item.value}</p>
                  </div>
                  <div className="h-1.5 bg-border rounded-full w-full mt-4 overflow-hidden">
                    <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: `${item.bar}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Афиша */}
      <section id="poster" className="py-32 lg:py-40 px-6 lg:px-12 bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mb-6">Афиша мероприятия</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-primary-foreground mb-8 text-balance">
                Ваш бренд
                <span className="italic block"> на главной</span>
                афише города
              </h2>
              <div className="space-y-6 text-primary-foreground/70 leading-relaxed">
                <p>
                  Афиша «Красавицы города 2026» появится на билбордах, ситилайтах и в digital-пространстве Саранска за 6 недель до мероприятия. Логотипы генерального и титульного партнёров — в числе первых, что увидит город.
                </p>
                <p>
                  Официальная полиграфия: программки, бэкдроп, флаеры — везде присутствуют логотипы спонсоров соответствующего уровня.
                </p>
              </div>

              {/* Звёздный артист */}
              <div className="mt-12 p-8 border border-primary-foreground/20">
                <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mb-4">Специальный гость вечера</p>
                <p className="font-serif text-3xl text-primary-foreground mb-3">Имя — в тайне</p>
                <p className="text-primary-foreground/60 leading-relaxed text-sm">
                  На сцене Огарев Арены выступит известный российский артист, имя которого будет раскрыто ближе к дате мероприятия. Анонс специального гостя гарантирует дополнительный медиа-ажиотаж и рост продаж билетов. Ваш бренд — рядом с этим событием.
                </p>
              </div>
            </div>

            {/* Фото выступления группы на сцене */}
            <div className="relative flex flex-col gap-4">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/ebfa2bf5-17dd-476d-87cf-c3433e473ba6.jpg"
                  alt="Выступление артиста на сцене"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/30" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs tracking-widest uppercase text-primary-foreground/70">Живая сцена · Саранск</p>
                </div>
              </div>

              <div className="aspect-[3/4] border border-primary-foreground/20 flex flex-col items-center justify-between p-12 text-center">
                <div>
                  <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/50 mb-6">Саранск · Огарев Арена</p>
                  <p className="font-serif text-6xl md:text-7xl font-light text-primary-foreground leading-tight">
                    Красавица<br />
                    <span className="italic">города</span>
                  </p>
                  <p className="font-serif text-8xl text-sage mt-2">2026</p>
                </div>

                <div className="w-full">
                  <div className="w-16 h-px bg-primary-foreground/30 mx-auto mb-8" />
                  <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">11 июля 2026</p>
                  <p className="text-sm text-primary-foreground/40 mb-8">Специальный гость — имя в тайне</p>

                  {/* Placeholder логотипов спонсоров */}
                  <div className="border-t border-primary-foreground/10 pt-6">
                    <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/30 mb-4">При поддержке</p>
                    <div className="flex justify-center gap-6">
                      {["Спонсор 1", "Спонсор 2", "Спонсор 3"].map((s) => (
                        <div key={s} className="px-4 py-2 border border-primary-foreground/20 text-xs text-primary-foreground/30 tracking-widest uppercase">
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}