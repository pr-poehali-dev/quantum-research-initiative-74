import Icon from "@/components/ui/icon"

const socials = [
  {
    name: "ВКонтакте",
    handle: "@techstore",
    href: "#",
    icon: "MessageCircle",
    color: "hover:border-blue-500/50 hover:bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    name: "Telegram",
    handle: "@techstore_ru",
    href: "#",
    icon: "Send",
    color: "hover:border-sky-500/50 hover:bg-sky-500/10",
    iconColor: "text-sky-400",
  },
  {
    name: "Instagram",
    handle: "@techstore.ru",
    href: "#",
    icon: "Instagram",
    color: "hover:border-pink-500/50 hover:bg-pink-500/10",
    iconColor: "text-pink-400",
  },
  {
    name: "YouTube",
    handle: "TechStore Reviews",
    href: "#",
    icon: "Youtube",
    color: "hover:border-red-500/50 hover:bg-red-500/10",
    iconColor: "text-red-400",
  },
]

const contacts = [
  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-35-35", sub: "Бесплатно по России" },
  { icon: "Mail", label: "Email", value: "hello@techstore.ru", sub: "Ответим в течение часа" },
  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Тверская, 1", sub: "Пн–Вс, 10:00–21:00" },
]

export default function Contacts() {
  return (
    <section id="contact" className="bg-black py-20 px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Контакты</p>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
          Свяжитесь <span className="font-medium italic">с нами</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: contact info */}
          <div className="space-y-4">
            {contacts.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Icon name={c.icon} size={18} className="text-white/70" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">{c.label}</p>
                  <p className="text-white text-sm font-medium">{c.value}</p>
                  <p className="text-white/30 text-xs mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: socials */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Мы в соцсетях</p>
            <div className="grid grid-cols-2 gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className={`group flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${s.color}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors duration-300">
                    <Icon name={s.icon} size={18} className={s.iconColor} />
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">{s.name}</p>
                    <p className="text-white/30 text-xs">{s.handle}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white text-sm font-medium mb-1">Есть вопросы по заказу?</p>
              <p className="text-white/40 text-xs mb-4">Напишите нам — ответим быстро и поможем с выбором техники.</p>
              <button className="w-full py-3 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-colors duration-200 cursor-pointer">
                Написать в Telegram
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs">© 2024 TechStore. Все права защищены.</p>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors duration-200"
            >
              <Icon name={s.icon} size={14} className={s.iconColor} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
