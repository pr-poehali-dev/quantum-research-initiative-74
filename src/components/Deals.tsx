import Icon from "@/components/ui/icon"

const deals = [
  {
    id: 1,
    tag: "Именинникам",
    title: "5% скидка в день рождения",
    description:
      "Празднуешь день рождения? Получи скидку 5% на весь заказ! Просто покажи нам документ с датой рождения при оформлении — и праздник станет ещё приятнее.",
    details: ["Действует в день рождения и 3 дня после", "Применяется на весь ассортимент", "Суммируется с другими акциями"],
    cta: "Получить скидку",
    accent: "from-pink-500/20 to-purple-500/10",
    border: "border-pink-500/30",
    tagColor: "bg-pink-500/20 text-pink-300 border border-pink-500/30",
    image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/5a4ee6c6-4cf3-4850-802b-da2a7a221e60.jpg",
    icon: "Cake",
  },
  {
    id: 2,
    tag: "Комплект",
    title: "Мышка и клавиатура в подарок",
    description:
      "При покупке любого компьютера из нашего каталога — мышь Logitech и клавиатура HyperX достаются тебе бесплатно. Полноценный сет для работы и игр с первого дня.",
    details: ["Мышь Logitech G102 в подарок", "Клавиатура HyperX Alloy Core в подарок", "При покупке любого ПК от 80 000 ₽"],
    cta: "Выбрать компьютер",
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    tagColor: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
    image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/9256a227-ec86-45d6-bc0e-7b39aa40c00d.jpg",
    icon: "Gift",
  },
]

export default function Deals() {
  return (
    <section id="deals" className="bg-black py-20 px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Акции</p>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
          Специальные <span className="font-medium italic">предложения</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`rounded-2xl border ${deal.border} overflow-hidden bg-gradient-to-br ${deal.accent} backdrop-blur-sm`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${deal.tagColor}`}>
                  {deal.tag}
                </span>
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Icon name={deal.icon} size={20} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-medium text-lg mb-2">{deal.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed mb-5">{deal.description}</p>

                <ul className="space-y-2 mb-6">
                  {deal.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/60 text-xs">
                      <Icon name="Check" size={14} className="text-white/40 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-colors duration-200 cursor-pointer">
                  {deal.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
