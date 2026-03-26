import type React from "react"
import { useState } from "react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <section id="contact" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
              Стать партнёром
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance">
              Обсудим сотрудничество?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Оставьте заявку, и мы свяжемся с вами в течение одного рабочего дня для обсуждения деталей партнёрства.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Площадка</p>
                <p className="text-foreground">Огарев Арена, Саранск</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Мероприятие</p>
                <p className="text-foreground">Красавица города 2026</p>
              </div>
              <div>
                <p className="text-xs tracking-widests uppercase text-muted-foreground mb-2">Почта</p>
                <a href="mailto:hello@krasavica2026.ru" className="text-foreground hover:text-sage transition-colors">
                  hello@krasavica2026.ru
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Компания
                </label>
                <input
                  type="text"
                  id="company"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                  placeholder="Название вашей компании"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Почта
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
                  placeholder="ваш@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors resize-none"
                  placeholder="Какой пакет вас интересует? Есть ли особые пожелания?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-colors duration-300"
              >
                Отправить заявку
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
