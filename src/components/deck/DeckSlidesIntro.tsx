interface Props {
  current: number
}

export default function DeckSlidesIntro({ current }: Props) {
  return (
    <>
      {/* Слайд 1 — О событии */}
      {current === 0 && (
        <div className="h-full grid lg:grid-cols-2 overflow-hidden">
          <div className="flex flex-col justify-center px-12 lg:px-16 py-10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6 font-semibold">О мероприятии</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-8 leading-[1.2]">
              Событие,<br />
              <span className="italic text-sage">которое запоминается</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>«Саранская красавица 2026» — ежегодный конкурс красоты и таланта, главное культурное событие Республики Мордовия. 13 финалисток соревнуются за титул символа Саранска.</p>
              <p>Мероприятие объединяет бизнес-элиту, медиа и самую активную аудиторию региона в торжественной атмосфере Огарев Арены.</p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { val: "13", label: "Финалисток" },
                { val: "3 000+", label: "Гостей в зале" },
                { val: "3", label: "Года мероприятию" },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-terracotta pl-4">
                  <p className="font-serif text-2xl font-semibold text-foreground">{s.val}</p>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden hidden lg:block">
            <img
              src="https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/06567582-5289-4615-aa4e-3a2bad8ecec4.jpg"
              alt="Участницы конкурса"
              className="w-full h-full object-cover object-center brightness-[0.82] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
        </div>
      )}

      {/* Слайд 2 — Аудитория */}
      {current === 1 && (
        <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6 font-semibold">Целевая аудитория и охват</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-10 leading-[1.2]">
            Кто <span className="italic">увидит</span> ваш бренд
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { val: "100 000+", label: "Совокупный охват", desc: "Соцсети и региональные СМИ", color: "border-rose" },
              { val: "3 000+", label: "Гостей в зале", desc: "Живая аудитория 11 июля", color: "border-gold" },
              { val: "18–55", label: "Возраст аудитории", desc: "Мужчины и женщины", color: "border-sage" },
              { val: "60%", label: "Женщины", desc: "Ключевой демографический срез", color: "border-indigo" },
            ].map((m) => (
              <div key={m.label} className={`p-6 border-t-2 ${m.color} bg-sand/30`}>
                <p className="font-serif text-3xl font-semibold text-foreground mb-2">{m.val}</p>
                <p className="font-semibold text-xs tracking-wide text-foreground mb-1">{m.label}</p>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Бизнес-аудитория", items: ["Руководители компаний", "Предприниматели Мордовии", "Региональные топ-менеджеры"] },
              { title: "Медиа и инфлюенсеры", items: ["Журналисты региональных СМИ", "Lifestyle-блогеры", "ТВ и радио персоны"] },
              { title: "Широкая аудитория", items: ["Активные женщины и мужчины 18–55 лет", "Студенты и молодёжь", "Семьи и гости города"] },
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

      {/* Слайд 3 — Ценность для спонсоров */}
      {current === 2 && (
        <div className="h-full flex flex-col justify-center px-12 lg:px-20 py-10 overflow-y-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6 font-semibold">Ценность для партнёров</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-normal mb-10 leading-[1.2]">
            Что вы <span className="italic">получаете</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: "Бренд-видимость",
                color: "text-gold",
                bar: "bg-gold",
                items: ["Логотип на сцене и баннерах Огарев Арены", "Брендирование пресс-волла и фотозоны", "Упоминание ведущим со сцены"],
              },
              {
                num: "02",
                title: "Digital KPI / ROI",
                color: "text-rose",
                bar: "bg-rose",
                items: ["100 000+ охват в соцсетях и СМИ", "Видеоролик и фотоотчёт для бренда", "Аналитика упоминаний после события"],
              },
              {
                num: "03",
                title: "PR-активности",
                color: "text-indigo",
                bar: "bg-indigo",
                items: ["Публикации в региональных СМИ", "Посты в официальных аккаунтах шоу", "Пресс-релизы с упоминанием бренда"],
              },
            ].map((block) => (
              <div key={block.num} className="p-8 border border-border bg-background hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`font-serif text-3xl font-normal ${block.color}`}>{block.num}</span>
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