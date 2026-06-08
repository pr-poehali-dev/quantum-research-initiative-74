import Icon from "@/components/ui/icon"

const categories = [
  {
    icon: "Monitor",
    title: "Компьютеры",
    description: "Десктопы, моноблоки и комплектующие",
    count: "120+ товаров",
  },
  {
    icon: "Mouse",
    title: "Мыши",
    description: "Игровые, офисные и беспроводные",
    count: "80+ товаров",
  },
  {
    icon: "Keyboard",
    title: "Клавиатуры",
    description: "Механические, мембранные, компактные",
    count: "60+ товаров",
  },
  {
    icon: "Armchair",
    title: "Кресла",
    description: "Игровые и офисные кресла для работы",
    count: "40+ товаров",
  },
]

export default function Catalog() {
  return (
    <section id="catalog" className="bg-black py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Каталог</p>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
          Выберите <span className="font-medium italic">категорию</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.title}
              className="group text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <Icon name={cat.icon} size={20} className="text-white" />
              </div>
              <h3 className="text-white font-medium text-sm mb-1">{cat.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-3">{cat.description}</p>
              <span className="text-white/30 text-xs">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
