const benefits = [
  {
    number: "01",
    title: "Брендинг на площадке",
    description:
      "Логотип на сцене, баннерах, пресс-волле и экранах Огарев Арены. Тысячи фотографий гостей в соцсетях — с вашим брендом на заднем плане. Брендированная зона в фойе для прямого контакта с аудиторией.",
  },
  {
    number: "02",
    title: "PR и медиа-освещение",
    description:
      "Упоминания в региональных СМИ, на телевидении и в новостных пабликах Мордовии. Ваш бренд — в центре информационной повестки самого обсуждаемого события лета 2026 года.",
  },
  {
    number: "03",
    title: "Живое взаимодействие с аудиторией",
    description:
      "Прямой контакт с 3 000+ гостями в зале: активации, раздача материалов, брендированный стенд. Аудитория в праздничном настроении — максимальная лояльность к вашему бренду.",
  },
  {
    number: "04",
    title: "Digital-присутствие",
    description:
      "Интеграция в прямую трансляцию, упоминания в соцсетях мероприятия и участниц. Совокупный охват — более 100 000 контактов. Видеозапись шоу продолжит работать на вас после события.",
  },
]

export function Process() {
  return (
    <section id="benefits" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
                Выгоды для спонсоров
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
                Что вы
                <span className="italic"> получаете</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Участие в «Красавице города 2026» — это не просто логотип на баннере. Это живое присутствие бренда внутри события, которое обсуждают, снимают и помнят.
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