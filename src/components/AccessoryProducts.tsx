const sections = [
  {
    id: "mice",
    label: "Мыши",
    title: "Мыши для игр и работы",
    items: [
      {
        id: 1,
        brand: "HyperX",
        name: "Pulsefire Haste 2",
        description: "26 000 DPI · RGB · 61 г · USB-C",
        price: "5 990 ₽",
        oldPrice: "7 490 ₽",
        badge: "Хит",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/9ccee41d-1c7e-4901-add2-b49c432bc665.jpg",
      },
      {
        id: 2,
        brand: "Logitech",
        name: "MX Master 3S",
        description: "8 000 DPI · Беспроводная · Тихий клик · Эрго",
        price: "8 990 ₽",
        oldPrice: null,
        badge: "Новинка",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/4d1b63b6-66be-43a5-9782-1342c3e72b26.jpg",
      },
    ],
  },
  {
    id: "keyboards",
    label: "Клавиатуры",
    title: "Клавиатуры",
    items: [
      {
        id: 3,
        brand: "HyperX",
        name: "Alloy Origins Core",
        description: "Механика HyperX Red · RGB · TKL · USB-C",
        price: "9 490 ₽",
        oldPrice: "11 990 ₽",
        badge: "Топ выбор",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/63eb4adf-9533-4e6e-aed2-ec049f56f1d2.jpg",
      },
      {
        id: 4,
        brand: "Logitech",
        name: "G915 TKL Wireless",
        description: "GL Tactile · Bluetooth · RGB · Slim",
        price: "16 990 ₽",
        oldPrice: null,
        badge: "Премиум",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/f1c04c27-d878-410d-81ef-65ae62999d3a.jpg",
      },
    ],
  },
  {
    id: "chairs",
    label: "Кресла",
    title: "Кресла",
    items: [
      {
        id: 5,
        brand: "HyperX",
        name: "Stealth Chair",
        description: "Поясничная поддержка · Регул. подлокотники · 150 кг",
        price: "34 990 ₽",
        oldPrice: "42 990 ₽",
        badge: "Акция",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/fb992a49-4d33-4a2b-8431-ff8acabb40bf.jpg",
      },
      {
        id: 6,
        brand: "Logitech",
        name: "G Ergo Pro",
        description: "Кожзам · Откидная спинка 180° · 4D подлокотники",
        price: "49 990 ₽",
        oldPrice: null,
        badge: "Бест селлер",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/fa0b9f99-7734-4dec-ad1d-e714fde08b64.jpg",
      },
    ],
  },
]

export default function AccessoryProducts() {
  return (
    <div className="bg-black">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="py-16 px-8 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">{section.label}</p>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
              {section.title.split(" ")[0]}{" "}
              <span className="font-medium italic">{section.title.split(" ").slice(1).join(" ")}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-52 bg-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white text-black text-xs font-medium">
                      {item.badge}
                    </span>
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
                      {item.brand}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-medium text-sm mb-1">{item.name}</h3>
                    <p className="text-white/40 text-xs leading-relaxed mb-4">{item.description}</p>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-white font-medium text-lg">{item.price}</div>
                        {item.oldPrice && (
                          <div className="text-white/30 text-xs line-through">{item.oldPrice}</div>
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
      ))}
    </div>
  )
}
