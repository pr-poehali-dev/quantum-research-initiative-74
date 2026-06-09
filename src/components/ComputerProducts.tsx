const computers = [
  {
    id: 1,
    name: "GamePro X9 RGB",
    description: "Intel Core i9 · RTX 4080 · 32 ГБ RAM · 2 ТБ SSD",
    price: "189 990 ₽",
    oldPrice: "219 990 ₽",
    badge: "Хит продаж",
    image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/3d8c8f93-ed5f-464c-a601-cb60f94d8ce3.jpg",
  },
  {
    id: 2,
    name: "DesignStation Pro",
    description: "Intel Core i7 · Iris Pro · 16 ГБ RAM · 1 ТБ SSD",
    price: "124 990 ₽",
    oldPrice: null,
    badge: "Новинка",
    image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/67a03e59-5649-40a2-8914-e0f172d733e4.jpg",
  },
  {
    id: 3,
    name: "WorkStation Ultra",
    description: "AMD Ryzen 9 · RTX 4090 · 64 ГБ RAM · 4 ТБ SSD",
    price: "289 990 ₽",
    oldPrice: "319 990 ₽",
    badge: "Топ выбор",
    image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/d6fa2516-522a-4551-92a7-8820b0ee5a28.jpg",
  },
]

export default function ComputerProducts() {
  return (
    <section className="bg-black py-16 px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Компьютеры</p>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
          Мощные <span className="font-medium italic">решения</span> для любых задач
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {computers.map((pc) => (
            <div
              key={pc.id}
              className="group rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52 bg-white/5">
                <img
                  src={pc.image}
                  alt={pc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {pc.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white text-black text-xs font-medium">
                    {pc.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-medium text-sm mb-1">{pc.name}</h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">{pc.description}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-white font-medium text-lg">{pc.price}</div>
                    {pc.oldPrice && (
                      <div className="text-white/30 text-xs line-through">{pc.oldPrice}</div>
                    )}
                  </div>
                  <button className="px-5 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-colors duration-200 cursor-pointer">
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
