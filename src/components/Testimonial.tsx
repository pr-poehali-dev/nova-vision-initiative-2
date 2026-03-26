export function Testimonial() {
  return (
    <section className="py-32 lg:py-40 px-6 lg:px-12 bg-sage">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10">
          <svg className="w-16 h-16 mx-auto text-primary-foreground/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-primary-foreground leading-relaxed mb-10 text-balance">
          Огарев Арена вмещает более 3000 человек и является главной концертно-событийной площадкой Саранска. Партнёрство с нашим конкурсом — это уникальная возможность заявить о своём бренде на весь регион.
        </blockquote>

        <div>
          <p className="text-sm tracking-widest uppercase text-primary-foreground/80">Организационный комитет</p>
          <p className="text-sm text-primary-foreground/60 mt-1">Красавица города 2026 · Саранск</p>
        </div>
      </div>
    </section>
  )
}
