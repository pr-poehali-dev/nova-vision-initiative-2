export function Philosophy() {
  return (
    <>
      {/* Секция 1: Введение + место/дата */}
      <section id="about" className="py-32 lg:py-40 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Коллаж из двух фото */}
            <div className="grid grid-cols-2 gap-3">
              {/* Большое фото — участницы с цветами */}
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/585ce417-0642-4320-bfd1-d679b7f89523.jpg"
                  alt="Участницы конкурса Красавица города"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-5">
                  <p className="font-serif text-lg text-primary-foreground">Участницы · Сезон 2025</p>
                </div>
              </div>
              {/* Маленькое — участницы на сцене с жюри */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/a87ea2bb-cfbb-4b0e-aa26-2eaab266cce6.jpg"
                  alt="Участницы на сцене"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Маленькое — жюри */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/d03f091f-8aab-4cf7-98f1-c0c33f947ea5/bucket/e7a89998-4450-452b-8ffd-af87005543e7.jpg"
                  alt="Жюри конкурса"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
                Введение
              </p>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance">
                Событие,
                <span className="italic"> которое</span>
                <br />
                запоминается
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  «Красавица города 2026» — главный конкурс красоты и таланта Республики Мордовия. 13 финалисток со всего региона соревнуются за право называться символом Саранска.
                </p>
                <p>
                  Мероприятие объединяет культурную, деловую и молодёжную элиту города, формируя уникальное пространство для взаимодействия брендов с активной аудиторией.
                </p>
              </div>

              {/* Место и дата */}
              <div className="mt-12 pt-12 border-t border-border space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-px h-12 bg-terracotta mt-1 shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Место проведения</p>
                    <p className="font-serif text-xl text-foreground">Огарев Арена</p>
                    <p className="text-muted-foreground text-sm mt-1">Главная концертная площадка Саранска в центре города. Вместимость свыше 3 000 человек, современное световое и звуковое оборудование, прямые трансляции.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-px h-12 bg-terracotta mt-1 shrink-0" />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Дата проведения</p>
                    <p className="font-serif text-xl text-foreground">11 июля 2026 года</p>
                    <p className="text-muted-foreground text-sm mt-1">Летний вечер в самом сердце города — максимальная посещаемость и праздничная атмосфера.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция: Целевая аудитория */}
      <section id="audience-detail" className="py-24 lg:py-32 px-6 lg:px-12 bg-sand/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Целевая аудитория</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">Кто придёт на шоу</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-background border border-border p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta to-rose" />
              <p className="font-serif text-5xl text-terracotta mb-4">18–50</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Возраст аудитории</p>
              <p className="text-muted-foreground leading-relaxed text-sm">Активные жители Саранска и Республики Мордовия в самом платёжеспособном возрасте.</p>
            </div>
            <div className="bg-background border border-border p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose to-indigo" />
              <p className="font-serif text-5xl text-rose mb-4">70%</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Женская аудитория</p>
              <p className="text-muted-foreground leading-relaxed text-sm">Профессионально активные женщины, следящие за модой, красотой и стилем жизни. Лидеры мнений в своём кругу.</p>
            </div>
            <div className="bg-background border border-border p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo to-sage" />
              <p className="font-serif text-5xl text-indigo mb-4">★★★</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Социальный статус</p>
              <p className="text-muted-foreground leading-relaxed text-sm">Средний и выше среднего. Гости, готовые к приобретению премиальных товаров и услуг.</p>
            </div>
          </div>

          <div className="mt-12 p-10 bg-foreground text-primary-foreground">
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">Почему это выгодно спонсорам</p>
            <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed">
              Аудитория конкурса — это люди, которые принимают решения о покупке и влияют на выбор окружающих. Ваш бренд появляется перед ними в момент праздника и эмоционального подъёма.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}