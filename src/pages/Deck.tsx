import { useState, useEffect, useCallback } from "react"

const SLIDES_COUNT = 12

const packages = [
  {
    level: "Генеральный партнёр",
    price: "450 000 ₽",
    color: "from-gold to-terracotta",
    textColor: "text-gold",
    perks: ["Логотип на сцене и всех баннерах", "10 VIP-мест в партере", "Интеграция в прямую трансляцию", "Анонс со сцены ведущим", "Пресс-волл и фотозона", "Эксклюзивный бренд-стенд"],
  },
  {
    level: "Титульный партнёр",
    price: "350 000 ₽",
    color: "from-rose to-indigo",
    textColor: "text-rose",
    perks: ["Логотип на баннерах и пресс-волле", "6 VIP-мест", "Упоминание со сцены", "Посты в соцсетях мероприятия", "Размещение на официальном сайте"],
  },
  {
    level: "Официальный партнёр",
    price: "300 000 ₽",
    color: "from-sage to-indigo",
    textColor: "text-sage",
    perks: ["Логотип на материалах и сайте", "4 пригласительных билета", "Брендированный стенд в фойе", "Упоминание в соцсетях", "Фото и видео с мероприятия"],
  },
  {
    level: "Информационный партнёр",
    price: "200 000 ₽",
    color: "from-stone to-stone/50",
    textColor: "text-muted-foreground",
    perks: ["Логотип на сайте и пресс-материалах", "2 пригласительных билета", "Взаимный пиар в СМИ", "Упоминание в соцсетях"],
  },
]

const timeline = [
  { date: "Март 2026", title: "Старт партнёрской кампании", desc: "Финальные переговоры со спонсорами, подписание договоров" },
  { date: "Апрель 2026", title: "Кастинг и отбор участниц", desc: "Публичный кастинг, старт PR-активностей, анонсы спонсоров" },
  { date: "Май 2026", title: "Медиакампания", desc: "Посты в соцсетях, билборды, упоминания в СМИ" },
  { date: "Июнь 2026", title: "Финальная подготовка", desc: "Репетиции, брендинг площадки, монтаж стендов спонсоров" },
  { date: "11 июля 2026", title: "День шоу", desc: "Прямая трансляция, 3 000+ гостей, звёздный артист на сцене" },
  { date: "Июль–Август", title: "Постпродакшн", desc: "Видеоотчёт, пресс-релизы, медиааналитика для спонсоров" },
]

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
      {/* Навигация */}
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

      {/* Слайд */}
      <div className="flex-1 overflow-hidden relative">
        <div className={slideClass + " h-full"}>

          {/* Слайд 1 — Титул */}
          {current === 0 && (
            <div className="h-full flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo/10 via-background to-rose/10" />
              <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-4xl">
                <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-8 font-medium">Коммерческое предложение для партнёров</p>
                <h1 className="font-serif text-6xl md:text-8xl font-light leading-[1.05] mb-6">
                  Красавица
                  <span className="block bg-gradient-to-r from-sage via-terracotta to-rose bg-clip-text text-transparent">
                    города 2026
                  </span>
                </h1>
                <div className="w-24 h-px bg-gradient-to-r from-sage to-terracotta mx-auto my-8" />
                <p className="text-xl text-muted-foreground mb-4">
                  Главный конкурс красоты Республики Мордовия
                </p>
                <p className="text-sm tracking-widest uppercase text-terracotta font-medium">
                  11 июля 2026 · Огарев Арена · Саранск
                </p>
                <p className="mt-12 text-xs text-muted-foreground/60 tracking-widest uppercase">
                  Нажмите → для перехода к следующему слайду
                </p>
              </div>
            </div>
          )}

          {/* Слайд 2 — О событии */}
          {current === 1 && (
            <div className="h-full grid lg:grid-cols-2 overflow-hidden">
              <div className="flex flex-col justify-center px-12 lg:px-16 py-10">
                <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-6">О мероприятии</p>
                <h2 className="font-serif text-4xl lg:text-5xl font-light mb-8 leading-tight">
                  Событие,<br />
                  <span className="italic text-sage">которое запоминается</span>
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>«Красавица города 2026» — ежегодный конкурс красоты и таланта, главное культурное событие Республики Мордовия. 13 финалисток соревнуются за титул символа Саранска.</p>
                  <p>Мероприятие объединяет бизнес-элиту, медиа и самую активную аудиторию региона в торжественной атмосфере Огарев Арены.</p>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {[
                    { val: "13", label: "Финалисток" },
                    { val: "3 000+", label: "Гостей в зале" },
                    { val: "6+", label: "Лет истории" },
                  ].map((s) => (
                    <div key={s.label} className="border-l-2 border-terracotta pl-4">
                      <p className="font-serif text-3xl text-foreground">{s.val}</p>
                      <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden hidden lg:block">
                <img
                  src="https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/585ce417-0642-4320-bfd1-d679b7f89523.jpg"
                  alt="Участницы конкурса"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
              </div>
            </div>
          )}

          {/* Слайд 3 — Аудитория */}
          {current === 2 && (
            <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
              <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-6">Целевая аудитория и охват</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-10 leading-tight">
                Кто <span className="italic">увидит</span> ваш бренд
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { val: "100 000+", label: "Совокупный охват", desc: "Соцсети + СМИ + трансляция", color: "border-rose" },
                  { val: "70%", label: "Женская аудитория", desc: "Лидеры мнений в своём кругу", color: "border-terracotta" },
                  { val: "18–50", label: "Возраст", desc: "Платёжеспособная активная часть", color: "border-sage" },
                  { val: "50 000+", label: "Просмотров видео", desc: "После эфира в течение месяца", color: "border-indigo" },
                ].map((item) => (
                  <div key={item.label} className={`p-6 border border-border border-t-2 ${item.color} bg-background`}>
                    <p className="font-serif text-4xl text-foreground mb-2">{item.val}</p>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: "💼", title: "Бизнес и предприниматели", desc: "Региональная деловая элита, ЛПР" },
                  { icon: "✨", title: "Lifestyle-аудитория", desc: "Мода, красота, премиум-сервисы" },
                  { icon: "📱", title: "Digital-активные", desc: "Высокое вовлечение в соцсетях" },
                ].map((a) => (
                  <div key={a.title} className="flex gap-4 p-5 bg-sand/50 rounded-sm">
                    <span className="text-2xl">{a.icon}</span>
                    <div>
                      <p className="font-medium text-foreground text-sm">{a.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Слайд 4 — Ценность для спонсоров */}
          {current === 3 && (
            <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
              <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-6">Ценность для партнёров</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-10 leading-tight">
                Что вы <span className="italic">получаете</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    num: "01",
                    title: "Бренд-видимость",
                    color: "text-gold",
                    bar: "bg-gold",
                    items: ["Логотип на сцене и баннерах Огарев Арены", "Брендирование пресс-волла и фотозоны", "3 000+ фотографий гостей с вашим брендом", "Упоминание ведущим со сцены"],
                  },
                  {
                    num: "02",
                    title: "Digital KPI / ROI",
                    color: "text-rose",
                    bar: "bg-rose",
                    items: ["100 000+ охват в соцсетях и СМИ", "Интеграция в прямую трансляцию", "Видеоролик и фотоотчёт для бренда", "Аналитика упоминаний после события"],
                  },
                  {
                    num: "03",
                    title: "PR-активности",
                    color: "text-indigo",
                    bar: "bg-indigo",
                    items: ["Публикации в региональных СМИ", "Интервью с участницами о партнёрах", "Посты в официальных аккаунтах шоу", "Пресс-релизы с упоминанием бренда"],
                  },
                ].map((block) => (
                  <div key={block.num} className="p-8 border border-border bg-background hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`font-serif text-4xl ${block.color}`}>{block.num}</span>
                      <div className={`h-0.5 flex-1 ${block.bar} opacity-40`} />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-4">{block.title}</h3>
                    <ul className="space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className={`mt-1 shrink-0 w-1.5 h-1.5 rounded-full ${block.bar}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-foreground text-primary-foreground">
                <p className="font-serif text-xl italic">"Ваш бренд появляется перед 3 000 гостей в момент праздника — при максимальной лояльности аудитории."</p>
              </div>
            </div>
          )}

          {/* Слайд 5 — Медиаплан */}
          {current === 4 && (
            <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
              <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-6">Медиаплан и продвижение</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-10 leading-tight">
                6 недель <span className="italic text-terracotta">медиаприсутствия</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    channel: "Социальные сети",
                    reach: "60 000+",
                    color: "bg-rose/10 border-rose/30",
                    numColor: "text-rose",
                    items: ["ВКонтакте, Telegram, Instagram*", "Анонсы, stories, reels с участницами", "Посты-упоминания партнёров", "Прямые эфиры с кастинга"],
                  },
                  {
                    channel: "СМИ и пресса",
                    reach: "30 000+",
                    color: "bg-indigo/10 border-indigo/30",
                    numColor: "text-indigo",
                    items: ["Региональные издания Мордовии", "Новостные агентства и порталы", "ТВ-анонсы и репортажи", "Пресс-релизы с логотипами спонсоров"],
                  },
                  {
                    channel: "Наружная реклама",
                    reach: "50 000+",
                    color: "bg-gold/10 border-gold/30",
                    numColor: "text-gold",
                    items: ["150+ билбордов и ситилайтов", "Афиши в центре Саранска", "Логотипы партнёров на афишах", "Баннеры на площадке за 2 недели"],
                  },
                  {
                    channel: "Трансляция и видео",
                    reach: "50 000+",
                    color: "bg-sage/10 border-sage/30",
                    numColor: "text-sage",
                    items: ["Прямая трансляция шоу онлайн", "Логотип в рамке трансляции", "Видеозапись остаётся в сети", "Рилсы с хайлайтами шоу"],
                  },
                ].map((ch) => (
                  <div key={ch.channel} className={`p-6 border rounded-sm ${ch.color}`}>
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-serif text-lg text-foreground">{ch.channel}</p>
                      <p className={`font-serif text-xl font-medium ${ch.numColor}`}>{ch.reach}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {ch.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className={`w-1 h-1 rounded-full shrink-0 ${ch.numColor.replace("text-", "bg-")}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/60">* Instagram — Meta Platforms Inc., признана нежелательной в РФ</p>
            </div>
          )}

          {/* Слайд 6 — Пакеты спонсорства */}
          {current === 5 && (
            <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
              <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-6">Пакеты спонсорства</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-8 leading-tight">
                Выберите свой <span className="italic text-sage">уровень</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {packages.map((pkg) => (
                  <div key={pkg.level} className="border border-border bg-background overflow-hidden">
                    <div className={`h-1.5 bg-gradient-to-r ${pkg.color}`} />
                    <div className="p-6">
                      <p className={`font-serif text-2xl ${pkg.textColor} mb-1`}>{pkg.price}</p>
                      <p className="font-serif text-base text-foreground mb-4">{pkg.level}</p>
                      <ul className="space-y-2">
                        {pkg.perks.map((perk) => (
                          <li key={perk} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <svg className={`w-3 h-3 mt-0.5 shrink-0 ${pkg.textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 p-5 bg-terracotta/10 border border-terracotta/30">
                <span className="text-2xl">⚡</span>
                <p className="text-sm text-foreground">
                  <span className="font-medium">Ограниченное количество мест:</span> один спонсор на каждый уровень. При подписании договора до 1 мая — скидка 10%.
                </p>
              </div>
            </div>
          )}

          {/* Слайд 7 — Активации */}
          {current === 6 && (
            <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
              <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-6">Активации спонсоров</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-10 leading-tight">
                На площадке <span className="italic text-indigo">и онлайн</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 flex items-center gap-2">
                    <span className="w-4 h-px bg-terracotta" /> На мероприятии
                  </p>
                  <div className="space-y-3">
                    {[
                      { icon: "🎯", title: "Брендированный стенд в фойе", desc: "Прямой контакт с 3 000+ гостями до и после шоу" },
                      { icon: "📸", title: "Фотозона с логотипом", desc: "Тысячи фото в соцсетях гостей — органический охват" },
                      { icon: "🎤", title: "Анонс со сцены", desc: "Ведущий представляет партнёра залу — 3 000 человек" },
                      { icon: "🥂", title: "VIP-зона для партнёров", desc: "Нетворкинг с организаторами, жюри и гостями" },
                    ].map((act) => (
                      <div key={act.title} className="flex gap-4 p-4 bg-sand/50">
                        <span className="text-xl shrink-0">{act.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{act.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{act.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 flex items-center gap-2">
                    <span className="w-4 h-px bg-indigo" /> Онлайн-активации
                  </p>
                  <div className="space-y-3">
                    {[
                      { icon: "📡", title: "Интеграция в трансляцию", desc: "Баннер и упоминание в прямом эфире" },
                      { icon: "🤳", title: "Коллаборации с участницами", desc: "Брендированные stories и посты финалисток" },
                      { icon: "📰", title: "Пресс-релизы с упоминанием", desc: "Рассылка в 20+ региональных изданий" },
                      { icon: "🎬", title: "Брендированный хайлайт-ролик", desc: "Видео с событий остаётся в сети навсегда" },
                    ].map((act) => (
                      <div key={act.title} className="flex gap-4 p-4 bg-indigo/5 border border-indigo/10">
                        <span className="text-xl shrink-0">{act.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{act.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{act.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Слайд 8 — Кейсы / прошлые результаты */}
          {current === 7 && (
            <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
              <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-6">Прошлые результаты</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-10 leading-tight">
                Цифры <span className="italic text-terracotta">предыдущих сезонов</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-8 bg-foreground text-primary-foreground">
                  <p className="text-xs tracking-widest uppercase text-primary-foreground/50 mb-4">Сезон 2025 · Саранск</p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {[
                      { val: "2 800", label: "Гостей в зале" },
                      { val: "85 000", label: "Охват онлайн" },
                      { val: "12", label: "Участниц" },
                      { val: "8", label: "Партнёров" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p className="font-serif text-3xl text-primary-foreground">{s.val}</p>
                        <p className="text-xs text-primary-foreground/50 mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed italic">
                    "Наш бренд за один вечер получил больше живых контактов, чем за месяц таргетированной рекламы."
                  </p>
                  <p className="text-xs text-primary-foreground/40 mt-2">— Партнёр сезона 2025</p>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-2">Сравнение конкурентов региона</p>
                  {[
                    { name: "Красавица города (Саранск)", val: 85, color: "bg-terracotta", num: "85 000" },
                    { name: "Мисс Нижний Новгород", val: 70, color: "bg-rose", num: "70 000" },
                    { name: "Мисс Казань", val: 95, color: "bg-indigo", num: "95 000" },
                    { name: "Мисс Мордовия", val: 60, color: "bg-sage", num: "60 000" },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                        <span>{item.name}</span>
                        <span className="font-medium">{item.num}</span>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.val}%` }} />
                      </div>
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground/60 mt-4">Охват в соцсетях и СМИ, аналитика 2025</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "×3", label: "Рост узнаваемости бренда-спонсора в регионе (по данным опросов)", color: "text-gold" },
                  { val: "6+", label: "Лет проведения конкурса — устойчивая репутация события", color: "text-rose" },
                  { val: "100%", label: "Партнёров сезона 2025 готовы рекомендовать участие", color: "text-sage" },
                ].map((s) => (
                  <div key={s.label} className="p-5 border border-border text-center">
                    <p className={`font-serif text-4xl mb-2 ${s.color}`}>{s.val}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Слайд 9 — Таймлайн */}
          {current === 8 && (
            <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
              <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-6">Расписание и таймлайн</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-10 leading-tight">
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
                          <p className={`font-serif text-lg ${i === 4 ? "text-primary-foreground" : "text-foreground"}`}>{item.title}</p>
                          <p className={`text-sm mt-1 ${i === 4 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Слайд 10 — ROI */}
          {current === 9 && (
            <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
              <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-6">Показатели и ROI</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-10 leading-tight">
                Ваши инвестиции <span className="italic text-gold">работают</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-5">KPI для Генерального партнёра</p>
                  <div className="space-y-4">
                    {[
                      { label: "Показы логотипа в прямом эфире", val: "50 000+", pct: 100, color: "bg-gold" },
                      { label: "Живые контакты на площадке", val: "3 000+", pct: 60, color: "bg-terracotta" },
                      { label: "Охват в соцсетях за 6 недель", val: "100 000+", pct: 100, color: "bg-rose" },
                      { label: "Публикации в региональных СМИ", val: "20+", pct: 40, color: "bg-indigo" },
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
                    { label: "Спонсорство «Красавица города»", cpm: "4,5 ₽", highlight: true },
                    { label: "Таргетированная реклама ВК", cpm: "12–20 ₽", highlight: false },
                    { label: "Наружная реклама (билборд/мес.)", cpm: "15–30 ₽", highlight: false },
                    { label: "ТВ-реклама регион (30 сек)", cpm: "30–60 ₽", highlight: false },
                  ].map((row) => (
                    <div key={row.label} className={`flex justify-between items-center p-4 ${row.highlight ? "bg-foreground text-primary-foreground" : "bg-sand/50"}`}>
                      <span className={`text-sm ${row.highlight ? "text-primary-foreground" : "text-muted-foreground"}`}>{row.label}</span>
                      <span className={`font-serif text-lg font-medium ${row.highlight ? "text-gold" : "text-foreground"}`}>{row.cpm}</span>
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground/60">CPM — стоимость 1 000 контактов</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-gold/15 to-terracotta/15 border border-gold/30">
                <p className="font-serif text-2xl text-foreground">
                  Спонсорство обеспечивает <span className="text-gold font-medium">в 3–7 раз</span> более низкую стоимость контакта по сравнению с традиционной рекламой в регионе.
                </p>
              </div>
            </div>
          )}

          {/* Слайд 11 — Контакты */}
          {current === 10 && (
            <div className="h-full grid lg:grid-cols-2 overflow-hidden">
              <div className="flex flex-col justify-center px-12 lg:px-16 py-10">
                <p className="text-xs tracking-[0.4em] uppercase text-terracotta mb-6">Следующий шаг</p>
                <h2 className="font-serif text-4xl lg:text-5xl font-light mb-8 leading-tight">
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
                  <p className="font-serif text-5xl text-primary-foreground leading-tight mb-4">«Быть рядом<br />со звёздным<br />событием»</p>
                  <p className="text-primary-foreground/60 text-sm tracking-widest uppercase">Красавица города 2026</p>
                </div>
              </div>
            </div>
          )}

          {/* Слайд 12 — CTA */}
          {current === 11 && (
            <div className="h-full flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-foreground" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage via-terracotta to-rose" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose via-terracotta to-sage" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-3xl">
                <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/50 mb-8">Слоган события</p>
                <h2 className="font-serif text-5xl md:text-7xl font-light text-primary-foreground leading-[1.1] mb-8">
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

        </div>
      </div>

      {/* Кнопки навигации */}
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
            {[
              "Титул", "О событии", "Аудитория", "Ценность", "Медиаплан", "Пакеты",
              "Активации", "Кейсы", "Таймлайн", "ROI", "Контакты", "CTA"
            ][current]}
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
    </div>
  )
}
