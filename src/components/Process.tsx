const benefits = [
  {
    number: "01",
    title: "Охват целевой аудитории",
    description:
      "Более 3000 зрителей в зале Огарев Арены и свыше 100 000 человек в онлайн-трансляции. Активная женская аудитория 18–45 лет — платёжеспособный сегмент региона.",
  },
  {
    number: "02",
    title: "Медиа-присутствие",
    description:
      "Освещение в региональных СМИ, телевидении и крупных пабликах Республики Мордовия. Ваш бренд в центре информационной повестки ключевого события года.",
  },
  {
    number: "03",
    title: "Брендинг на площадке",
    description:
      "Логотип на баннерах, пресс-волле, сцене и экранах Огарев Арены. Фотофон с вашим брендом — тысячи снимков в социальных сетях участников и гостей.",
  },
  {
    number: "04",
    title: "Долгосрочная ценность",
    description:
      "Ассоциация с престижным событием укрепляет репутацию бренда. Видеозапись шоу и фотоматериалы остаются в сети и продолжают работать на ваш имидж.",
  },
]

export function Process() {
  return (
    <section id="audience" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
                Почему выгодно
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
                Ценность
                <span className="italic"> партнёрства</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Спонсорство «Красавицы города 2026» — это прямой контакт с аудиторией, которая доверяет рекомендациям своих любимых событий и лидеров мнений.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {benefits.map((item) => (
                <div
                  key={item.number}
                  className="group py-10 lg:py-14 border-t border-border last:border-b"
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-sage transition-colors duration-300">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
