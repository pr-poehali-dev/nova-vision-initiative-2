import { packages } from "./DeckData"

interface Props {
  current: number
}

export default function DeckSlidesMid({ current }: Props) {
  return (
    <>
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
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-5">На площадке (офлайн)</p>
              <div className="space-y-3">
                {[
                  { title: "Брендированный стенд", desc: "Ваш стенд в фойе Огарев Арены — живые продажи и коммуникация с гостями" },
                  { title: "Именная номинация", desc: "Вручение приза «Бренд [компания]» — выход на сцену и отдельный блок шоу" },
                  { title: "Продакт-плейсмент", desc: "Ваш продукт в образе финалисток или подарочных наборах для гостей" },
                  { title: "Розыгрыш для зала", desc: "Интерактивный конкурс с призами от вашего бренда для 3 000 гостей" },
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
                  { title: "Email-рассылка", desc: "Ваш логотип и оффер в письмах базы подписчиков мероприятия" },
                  { title: "Интеграция в трансляцию", desc: "Баннер и озвучка вашего бренда каждые 15 минут во время шоу" },
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
    </>
  )
}
