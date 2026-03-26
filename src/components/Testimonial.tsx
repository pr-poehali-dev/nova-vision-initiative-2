const reviews = [
  {
    quote: "Спонсорство городского конкурса красоты дало нам узнаваемость, которую мы не получили бы за те же деньги ни в одном другом канале. Нас запомнили — это главное.",
    name: "Алексей Морозов",
    role: "Директор по маркетингу, ювелирная сеть «Золотой ключ»",
  },
  {
    quote: "Три тысячи человек в зале — это три тысячи живых контактов с нашей аудиторией. После мероприятия мы зафиксировали рост обращений на 40% в течение месяца.",
    name: "Марина Сергеева",
    role: "Бренд-менеджер, сеть салонов красоты «Грация»",
  },
]

export function Testimonial() {
  return (
    <section className="py-32 lg:py-40 px-6 lg:px-12 bg-sage">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mb-6">Отзывы партнёров</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground">
            Говорят те, кто уже участвовал
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10">
          {reviews.map((review) => (
            <div key={review.name} className="bg-sage p-10 lg:p-14">
              <svg className="w-10 h-10 text-primary-foreground/25 mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="font-serif text-xl md:text-2xl font-light text-primary-foreground leading-relaxed mb-8">
                {review.quote}
              </blockquote>
              <div>
                <p className="text-sm tracking-widest uppercase text-primary-foreground/80">{review.name}</p>
                <p className="text-sm text-primary-foreground/50 mt-1">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
