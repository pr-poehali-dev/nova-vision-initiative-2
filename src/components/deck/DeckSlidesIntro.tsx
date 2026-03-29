interface Props {
  current: number
}

export default function DeckSlidesIntro({ current }: Props) {
  return (
    <>
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
              { val: "3 000+", label: "Гостей в зале", desc: "Живая аудитория 11 июля", color: "border-gold" },
              { val: "50 000+", label: "Онлайн-зрителей", desc: "Прямая трансляция шоу", color: "border-sage" },
              { val: "60%", label: "Женщины 25–45", desc: "Ключевой демографический срез", color: "border-indigo" },
            ].map((m) => (
              <div key={m.label} className={`p-6 border-t-2 ${m.color} bg-sand/30`}>
                <p className="font-serif text-4xl text-foreground mb-2">{m.val}</p>
                <p className="font-medium text-sm text-foreground mb-1">{m.label}</p>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Бизнес-аудитория", items: ["Руководители компаний", "Предприниматели Мордовии", "Региональные топ-менеджеры"] },
              { title: "Медиа и инфлюенсеры", items: ["Журналисты региональных СМИ", "Lifestyle-блогеры", "ТВ и радио персоны"] },
              { title: "Широкая аудитория", items: ["Активные женщины 25–45 лет", "Студенты и молодёжь", "Семьи и гости города"] },
            ].map((seg) => (
              <div key={seg.title} className="p-6 border border-border">
                <p className="font-serif text-lg text-foreground mb-4">{seg.title}</p>
                <ul className="space-y-2.5">
                  {seg.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
    </>
  )
}
