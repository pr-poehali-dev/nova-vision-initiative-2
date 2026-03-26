export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">Красавица города <span className="text-sage">2026</span></p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Главный конкурс красоты Республики Мордовия. Огарев Арена, Саранск.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-sm text-foreground hover:text-sage transition-colors">О мероприятии</a>
              <a href="#benefits" className="text-sm text-foreground hover:text-sage transition-colors">Выгоды</a>
              <a href="#packages" className="text-sm text-foreground hover:text-sage transition-colors">Пакеты</a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">Контакты</a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Соцсети</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">ВКонтакте</a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">Instagram</a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">Telegram</a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Площадка</p>
            <nav className="flex flex-col gap-3">
              <p className="text-sm text-foreground">Огарев Арена</p>
              <p className="text-sm text-muted-foreground">Саранск, Мордовия</p>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Красавица города 2026. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">Саранск · Республика Мордовия</p>
        </div>
      </div>
    </footer>
  )
}