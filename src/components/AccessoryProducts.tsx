const sections = [
  {
    id: "mice",
    label: "Мыши",
    title: "Мыши для игр и работы",
    cols: 3,
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
      {
        id: 3,
        brand: "Logitech",
        name: "G Pro X Superlight",
        description: "25 600 DPI · 61 г · Беспроводная · HERO сенсор",
        price: "12 490 ₽",
        oldPrice: "14 990 ₽",
        badge: "Про",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/023ad6c2-ac59-4e7c-9637-7307541fddcf.jpg",
      },
      {
        id: 4,
        brand: "HyperX",
        name: "Pulsefire Surge RGB",
        description: "16 000 DPI · RGB 360° · 6 кнопок · Pixart 3389",
        price: "4 490 ₽",
        oldPrice: null,
        badge: "Бюджет",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/17b20b2a-024e-4042-9628-07dc80a6a425.jpg",
      },
    ],
  },
  {
    id: "keyboards",
    label: "Клавиатуры",
    title: "Клавиатуры",
    cols: 3,
    items: [
      {
        id: 5,
        brand: "HyperX",
        name: "Alloy Origins Core",
        description: "Механика HyperX Red · RGB · TKL · USB-C",
        price: "9 490 ₽",
        oldPrice: "11 990 ₽",
        badge: "Топ выбор",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/63eb4adf-9533-4e6e-aed2-ec049f56f1d2.jpg",
      },
      {
        id: 6,
        brand: "Logitech",
        name: "G915 TKL Wireless",
        description: "GL Tactile · Bluetooth · RGB · Slim",
        price: "16 990 ₽",
        oldPrice: null,
        badge: "Премиум",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/f1c04c27-d878-410d-81ef-65ae62999d3a.jpg",
      },
      {
        id: 7,
        brand: "Logitech",
        name: "G213 Prodigy",
        description: "Мембранная · RGB зоны · Влагозащита · Full-size",
        price: "5 990 ₽",
        oldPrice: "7 490 ₽",
        badge: "Хит",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/10bdf1b5-1b15-4c66-a52f-8b5fda41c7a3.jpg",
      },
      {
        id: 8,
        brand: "HyperX",
        name: "Alloy Origins 60",
        description: "60% форм-фактор · Механика · RGB · PBT клавиши",
        price: "8 990 ₽",
        oldPrice: "10 490 ₽",
        badge: "Компакт",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/957e8720-131d-4844-ad31-817983562069.jpg",
      },
    ],
  },
  {
    id: "chairs",
    label: "Кресла",
    title: "Кресла",
    cols: 3,
    items: [
      {
        id: 9,
        brand: "HyperX",
        name: "Stealth Chair",
        description: "Поясничная поддержка · Регул. подлокотники · 150 кг",
        price: "34 990 ₽",
        oldPrice: "42 990 ₽",
        badge: "Акция",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/fb992a49-4d33-4a2b-8431-ff8acabb40bf.jpg",
      },
      {
        id: 10,
        brand: "Logitech",
        name: "G Ergo Pro",
        description: "Кожзам · Откидная спинка 180° · 4D подлокотники",
        price: "49 990 ₽",
        oldPrice: null,
        badge: "Бест селлер",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/fa0b9f99-7734-4dec-ad1d-e714fde08b64.jpg",
      },
      {
        id: 11,
        brand: "DXRacer",
        name: "Formula F08 Gold",
        description: "Гоночный стиль · Экокожа · 4D подлокотники · 180°",
        price: "39 990 ₽",
        oldPrice: "47 990 ₽",
        badge: "Стиль",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/86af10e0-fbdb-4196-9408-2c17de209495.jpg",
      },
    ],
  },
  {
    id: "headphones",
    label: "Наушники",
    title: "Наушники и гарнитуры",
    cols: 2,
    items: [
      {
        id: 12,
        brand: "HyperX",
        name: "Cloud III",
        description: "53 мм драйверы · 7.1 объёмный звук · USB-C · PC/PS",
        price: "9 990 ₽",
        oldPrice: "12 490 ₽",
        badge: "Хит",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/665c9cba-dc82-489a-a323-aacf1c953a7b.jpg",
      },
      {
        id: 13,
        brand: "Logitech",
        name: "G435 Wireless",
        description: "Bluetooth + LIGHTSPEED · 18ч · 165 г · Лёгкие",
        price: "7 490 ₽",
        oldPrice: null,
        badge: "Новинка",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/bc3819c6-b6d3-480d-9ca0-ef22434cac53.jpg",
      },
    ],
  },
  {
    id: "mousepads",
    label: "Коврики",
    title: "Коврики для мыши",
    cols: 2,
    items: [
      {
        id: 14,
        brand: "HyperX",
        name: "Fury S Pro XL",
        description: "900×420 мм · Тканевая поверхность · Прошитые края",
        price: "2 490 ₽",
        oldPrice: "3 490 ₽",
        badge: "XL",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/ce258aa7-7931-4930-9a13-f8e121ef7bd3.jpg",
      },
      {
        id: 15,
        brand: "Logitech",
        name: "G840 XL",
        description: "900×400 мм · Оптимизирован для DPI · Резиновая база",
        price: "3 490 ₽",
        oldPrice: null,
        badge: "Desk Mat",
        image: "https://cdn.poehali.dev/projects/42e631e5-d21d-4d8a-947b-dd168eb85e20/files/cc9ec991-9ece-4de7-a6a6-8c21eaee2545.jpg",
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
            <div className={`grid grid-cols-1 md:grid-cols-${section.cols} gap-6`}>
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
