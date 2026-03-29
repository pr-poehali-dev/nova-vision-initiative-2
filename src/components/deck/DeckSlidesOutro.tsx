import { timeline } from "./DeckData"

interface Props {
  current: number
}

export default function DeckSlidesOutro({ current }: Props) {
  return (
    <>
      {/* Слайд 8 — Таймлайн */}
      {current === 7 && (
        <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6 font-semibold">Расписание и таймлайн</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-10 leading-[1.2]">
            Путь к <span className="italic text-sage">11 июля</span>
          </h2>
          <div className="relative">
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-terracotta via-rose to-indigo hidden md:block" />
            <div className="space-y-4">
              {timeline.map((item, i) => {
                const colors = ["text-terracotta", "text-rose", "text-gold", "text-sage", "text-indigo", "text-stone"]
                const dots = ["bg-terracotta", "bg-rose", "bg-gold", "bg-sage", "bg-indigo", "bg-stone"]
                return (
                  <div key={item.date} className="md:flex items-start gap-8">
                    <p className={`text-sm font-medium shrink-0 w-28 text-right ${colors[i]} hidden md:block`}>{item.date}</p>
                    <div className={`hidden md:flex w-4 h-4 rounded-full shrink-0 mt-0.5 ${dots[i]} ring-4 ring-background`} />
                    <div className={`p-5 flex-1 border-l-2 md:border-l-0 ${i === 4 ? "bg-foreground text-primary-foreground border-terracotta" : "bg-sand/50 border-terracotta/30"}`}>
                      <p className={`text-xs font-medium mb-0.5 md:hidden ${colors[i]}`}>{item.date}</p>
                      <p className={`font-serif text-base font-medium ${i === 4 ? "text-primary-foreground" : "text-foreground"}`}>{item.title}</p>
                      <p className={`text-sm mt-1 ${i === 4 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Слайд 9 — ROI */}
      {current === 8 && (
        <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6 font-semibold">Показатели и ROI</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-10 leading-[1.2]">
            Ваши инвестиции <span className="italic text-gold">работают</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-5">KPI для Генерального партнёра</p>
              <div className="space-y-4">
                {[
                  { label: "Охват в соцсетях за 6 недель", val: "80 000+", pct: 100, color: "bg-rose" },
                  { label: "Живые контакты на площадке", val: "3 000+", pct: 60, color: "bg-terracotta" },
                  { label: "Охват через СМИ и пресс-релизы", val: "30 000+", pct: 50, color: "bg-indigo" },
                  { label: "Публикации в региональных СМИ", val: "20+", pct: 40, color: "bg-gold" },
                ].map((kpi) => (
                  <div key={kpi.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-muted-foreground">{kpi.label}</span>
                      <span className="font-medium text-foreground">{kpi.val}</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div className={`h-2 rounded-full ${kpi.color}`} style={{ width: `${kpi.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs tracking-widests uppercase text-muted-foreground mb-5">Стоимость контакта vs альтернативы</p>
              {[
                { label: "Спонсорство «Красавица города»", cpm: "5 ₽", highlight: true },
                { label: "Таргетированная реклама ВК", cpm: "12–20 ₽", highlight: false },
                { label: "Наружная реклама (билборд/мес.)", cpm: "15–30 ₽", highlight: false },
                { label: "ТВ-реклама регион (30 сек)", cpm: "30–60 ₽", highlight: false },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between items-center p-4 ${row.highlight ? "bg-foreground text-primary-foreground" : "bg-sand/50"}`}>
                  <span className={`text-sm ${row.highlight ? "text-primary-foreground" : "text-muted-foreground"}`}>{row.label}</span>
                  <span className={`font-serif text-base font-semibold ${row.highlight ? "text-gold" : "text-foreground"}`}>{row.cpm}</span>
                </div>
              ))}
              <p className="text-xs text-muted-foreground/60">CPM — стоимость 1 000 контактов</p>
            </div>
          </div>
          <div className="p-5 border border-gold/30 bg-gold/5 flex items-center gap-4">
            <span className="text-3xl">💡</span>
            <p className="text-sm text-foreground leading-relaxed">
              Генеральный партнёр за <span className="font-medium">500 000 ₽+</span> получает <span className="font-medium">~100 000 контактов</span> — итоговый CPM составляет <span className="font-medium text-gold">5 ₽</span>, что в 3–10 раз дешевле альтернативных каналов.
            </p>
          </div>
        </div>
      )}

      {/* Слайд 10 — Контакты */}
      {current === 9 && (
        <div className="h-full grid lg:grid-cols-2 overflow-hidden">
          <div className="flex flex-col justify-center px-12 lg:px-16 py-10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6 font-semibold">Следующий шаг</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-8 leading-[1.2]">
              Давайте<br />
              <span className="italic text-sage">познакомимся</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Готовы ответить на вопросы, провести переговоры и подготовить индивидуальное предложение под цели вашего бренда. Места ограничены.
            </p>
            <div className="space-y-6">
              {[
                { label: "Почта", val: "hello@krasavica2026.ru", href: "mailto:hello@krasavica2026.ru" },
                { label: "Телефон", val: "+7 (834) 2XX-XX-XX", href: "tel:+78342000000" },
                { label: "Площадка", val: "Огарев Арена, Саранск", href: null },
                { label: "Дата", val: "11 июля 2026", href: null },
              ].map((c) => (
                <div key={c.label} className="flex gap-6 items-start border-b border-border/50 pb-5">
                  <p className="text-xs tracking-widests uppercase text-muted-foreground w-20 shrink-0 pt-0.5">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-foreground hover:text-sage transition-colors font-medium">{c.val}</a>
                  ) : (
                    <p className="text-foreground font-medium">{c.val}</p>
                  )}
                </div>
              ))}
            </div>
            <a
              href="/#contact"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sage to-sage/80 text-primary-foreground text-sm tracking-widest uppercase hover:opacity-90 transition-all shadow-lg shadow-sage/20 self-start"
            >
              Оставить заявку
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="relative overflow-hidden hidden lg:block bg-foreground">
            <img
              src="https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/a87ea2bb-cfbb-4b0e-aa26-2eaab266cce6.jpg"
              alt="Мероприятие"
              className="w-full h-full object-cover object-top opacity-50 mix-blend-luminosity"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <p className="font-serif text-4xl font-normal text-primary-foreground leading-[1.2] mb-4">«Быть рядом<br />со звёздным<br />событием»</p>
              <p className="text-primary-foreground/60 text-sm tracking-widest uppercase">Красавица города 2026</p>
            </div>
          </div>
        </div>
      )}

      {/* Слайд 11 — CTA */}
      {current === 10 && (
        <div className="h-full flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-foreground" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage via-terracotta to-rose" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose via-terracotta to-sage" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-[10px] tracking-[0.35em] uppercase text-primary-foreground/50 mb-8 font-semibold">Слоган события</p>
            <h2 className="font-serif text-4xl md:text-6xl font-normal text-primary-foreground leading-[1.15] mb-8">
              Красота.<br />
              <span className="bg-gradient-to-r from-gold via-terracotta to-rose bg-clip-text text-transparent">
                Город. Вы.
              </span>
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-4 max-w-xl mx-auto leading-relaxed">
              Станьте частью главного события Саранска — и пусть тысячи гостей узнают о вашем бренде в самую праздничную ночь года.
            </p>
            <p className="text-sm text-primary-foreground/50 tracking-widest uppercase mb-12">
              11 июля 2026 · Огарев Арена · Саранск
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-terracotta to-rose text-white text-sm tracking-widest uppercase hover:opacity-90 transition-all shadow-xl shadow-terracotta/30"
              >
                Стать партнёром
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground/50 transition-all"
              >
                На главную
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}