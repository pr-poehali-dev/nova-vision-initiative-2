import { packages } from "./DeckData"

interface Props {
  current: number
}

export default function DeckSlidesMid({ current }: Props) {
  return (
    <>
      {/* Слайд 4 — Медиаплан */}
      {current === 3 && (
        <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6 font-semibold">Медиаплан и продвижение</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-10 leading-[1.2]">
            6 недель <span className="italic text-terracotta">медиаприсутствия</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                channel: "Социальные сети",
                reach: "80 000+",
                color: "bg-rose/10 border-rose/30",
                numColor: "text-rose",
                items: ["ВКонтакте, Telegram, Instagram*", "Анонсы, stories, reels с участницами", "Посты-упоминания партнёров"],
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
                items: ["Афиши в центре Саранска", "Логотипы партнёров на афишах", "Баннеры на площадке за 2 недели"],
              },
              {
                channel: "Видеоконтент и рилсы",
                reach: "40 000+",
                color: "bg-sage/10 border-sage/30",
                numColor: "text-sage",
                items: ["Рилсы с хайлайтами шоу", "Видеозапись события остаётся в сети", "Брендированные видео с участницами", "Видеоотчёт для спонсоров"],
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

      {/* Слайд 5 — Пакеты спонсорства */}
      {current === 4 && (
        <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6 font-semibold">Пакеты спонсорства</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-8 leading-[1.2]">
            Выберите свой <span className="italic text-sage">уровень</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {packages.map((pkg) => (
              <div key={pkg.level} className="border border-border bg-background overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${pkg.color}`} />
                <div className="p-6">
                  <p className={`font-serif text-xl font-semibold ${pkg.textColor} mb-1`}>{pkg.price}</p>
                  <p className="font-serif text-sm font-normal text-foreground mb-4">{pkg.level}</p>
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
            <span className="text-2xl">🤝</span>
            <p className="text-sm text-foreground">
              <span className="font-medium">Переговоры открыты прямо сейчас.</span> Чем раньше вы войдёте — тем больше точек касания с аудиторией до старта шоу.
            </p>
          </div>
        </div>
      )}

      {/* Слайд 6 — Активации */}
      {current === 5 && (
        <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6 font-semibold">Активации спонсоров</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-10 leading-[1.2]">
            На площадке <span className="italic text-indigo">и онлайн</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-5">На площадке (офлайн)</p>
              <div className="space-y-3">
                {[
                  { title: "Брендированный стенд", desc: "Ваш стенд в фойе Огарев Арены — живые продажи и коммуникация с гостями" },
                  { title: "Именная номинация", desc: "Вручение приза «Бренд [компания]» — выход на сцену и отдельный блок шоу" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-sand/50 border-l-2 border-terracotta">
                    <div>
                      <p className="font-medium text-sm text-foreground mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-5">В digital (онлайн)</p>
              <div className="space-y-3">
                {[
                  { title: "Совместный контент", desc: "Совместные рилсы и stories с участницами — публикация в их аккаунтах" },
                  { title: "Брендированный хэштег", desc: "Отдельный хэштег события с упоминанием бренда во всех постах" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-indigo/5 border-l-2 border-indigo">
                    <div>
                      <p className="font-medium text-sm text-foreground mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Слайд 7 — Кейс GENESIS PRO MMA 5 */}
      {current === 6 && (
        <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta mb-4 font-semibold">Наш опыт · Кейс</p>
          <div className="flex items-end gap-4 mb-8">
            <h2 className="font-serif text-3xl lg:text-4xl font-normal leading-[1.2]">
              GENESIS PRO MMA 5
            </h2>
            <p className="text-sm text-muted-foreground mb-1">18 октября 2025 · Огарев Арена, Саранск</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Левая колонка — цифры */}
            <div className="p-8 bg-foreground text-primary-foreground">
              <p className="text-xs tracking-widest uppercase text-primary-foreground/50 mb-6">Результаты мероприятия</p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {[
                  { val: "2 000+", label: "Зрителей в зале" },
                  { val: "1 500+", label: "Продано билетов" },
                  { val: "25 000+", label: "Онлайн-трансляция" },
                  { val: "12", label: "Профессиональных боёв" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-2xl font-semibold text-primary-foreground">{s.val}</p>
                    <p className="text-xs text-primary-foreground/50 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-primary-foreground/20 pt-5">
                <p className="text-xs text-primary-foreground/50 uppercase tracking-widest mb-2">Совокупный охват</p>
                <p className="font-serif text-4xl font-semibold text-terracotta">100 000+</p>
                <p className="text-xs text-primary-foreground/40 mt-1">совокупный охват во всех каналах</p>
              </div>
            </div>

            {/* Правая колонка — детали */}
            <div className="space-y-4">
              <div className="p-5 border border-border bg-sand/30">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Участники</p>
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-semibold">20 бойцов</span> — спортсмены из регионов России и стран СНГ.
                  Под знамёнами Мордовии выступили местные бойцы.
                </p>
              </div>
              <div className="p-5 border border-border bg-sand/30">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Почётные гости</p>
                <ul className="space-y-2">
                  {[
                    "Никита Ларьков — министр спорта Мордовии",
                    "Сергей Мытенков — вице-президент РСПП",
                    "Михаил Маваши",
                  ].map((g) => (
                    <li key={g} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-1.5 shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 border border-border bg-sand/30">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">География болельщиков</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Саранск, Нижний Новгород, Ульяновск, Пенза, Самара, Тольятти, Москва
                </p>
              </div>
            </div>
          </div>

          {/* Фотогалерея */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { url: "https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/30122446-ae3a-4b75-86d2-0b32468c33c4.jpg", alt: "Экран GENESIS PRO MMA 5" },
              { url: "https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/3b723e61-697a-4b9e-9075-65b1c0930517.jpg", alt: "Победитель поединка" },
              { url: "https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/dece3025-d1fe-41de-99a0-fe0bbf4a16db.jpg", alt: "Зрители в Огарев Арене" },
            ].map((img) => (
              <div key={img.alt} className="relative overflow-hidden aspect-video bg-foreground/10">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { val: "20", label: "Бойцов из России и СНГ", color: "text-gold" },
              { val: "7+", label: "Городов-участников по географии болельщиков", color: "text-rose" },
              { val: "100 000+", label: "Суммарный охват — подтверждённый результат", color: "text-terracotta" },
            ].map((s) => (
              <div key={s.label} className="p-5 border border-border text-center">
                <p className={`font-serif text-3xl font-semibold mb-2 ${s.color}`}>{s.val}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Слайд 9 — Тайный артист */}
      {current === 8 && (
        <div className="h-full flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/files/dca1efbc-0bd4-424b-b066-c4d6aebe2a0f.jpg"
              alt="Артист на сцене"
              className="w-full h-full object-cover blur-sm brightness-[0.35]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-8 font-semibold">Специальный гость вечера</p>

            <div className="mb-8 mx-auto w-24 h-24 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center">
              <span className="text-4xl">🎤</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary-foreground leading-[1.2] mb-6">
              Тайный<br />
              <span className="bg-gradient-to-r from-gold via-terracotta to-rose bg-clip-text text-transparent italic">
                артист
              </span>
            </h2>

            <p className="text-primary-foreground/60 text-base leading-relaxed mb-10 max-w-lg mx-auto">
              В этот вечер на сцену Огарев Арены выйдет специальный гость — известный артист, чьё имя будет объявлено ближе к дате события. Живое выступление станет кульминацией шоу и привлечёт ещё больше гостей и медиавнимания.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {[
                { label: "Дополнительный охват", val: "×2" },
                { label: "Медиаупоминания", val: "+30%" },
                { label: "Ажиотаж до события", val: "100%" },
              ].map((s) => (
                <div key={s.label} className="flex-1 border border-gold/20 bg-gold/5 px-6 py-5">
                  <p className="font-serif text-3xl font-semibold text-gold mb-1">{s.val}</p>
                  <p className="text-xs text-primary-foreground/50 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xs text-primary-foreground/30 tracking-widest uppercase">
              Имя артиста · Скоро
            </p>
          </div>
        </div>
      )}
    </>
  )
}