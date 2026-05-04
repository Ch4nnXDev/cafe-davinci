type Item = {
  name: string
  price: string
}

type Section = {
  title: string
  items: Item[]
}

const featured: Item[] = [
  { name: "Cappuccino", price: "950" },
  { name: "Iced Caramel Macchiato", price: "1300" },
  { name: "Mocha", price: "1150" }
]

const menu: Section[] = [
  {
    title: "Hot Coffee",
    items: [
      { name: "Cappuccino", price: "950" },
      { name: "Flat White", price: "975" },
      { name: "Café Latte", price: "950" },
      { name: "Café Mocha", price: "1150" },
      { name: "Caramel Latte", price: "1100" },
      { name: "Americano", price: "900" },
      { name: "Espresso", price: "700" },
      { name: "Espresso Double", price: "750" },
      { name: "Hot Chocolate", price: "1000" }
    ]
  },
  {
    title: "Cold Coffee",
    items: [
      { name: "Iced Americano", price: "950" },
      { name: "Iced Chocolate", price: "1200" },
      { name: "Iced Caramel Macchiato", price: "1300" },
      { name: "Iced Mocha", price: "1350" },
      { name: "Iced Latte", price: "1200" }
    ]
  },
  {
    title: "Add-ons",
    items: [
      { name: "Extra Shot", price: "250" },
      { name: "Almond Milk", price: "300" },
      { name: "Oat Milk", price: "300" },
      { name: "Whipped Cream", price: "200" },
      { name: "Flavoured Syrup", price: "200" }
    ]
  }
]

function ItemRow({ item }: { item: Item }) {
  return (
    <div className="flex items-baseline">
      <span className="text-gray-800">{item.name}</span>
      <span className="flex-1 border-b border-dotted border-gray-300 mx-3 translate-y-[-3px]" />
      <span className="text-sm text-gray-600 font-medium">
        Rs {item.price}
      </span>
    </div>
  )
}

function SectionBlock({ title, items }: Section) {
  return (
    <div className="mb-14">
      <h2 className="text-xl tracking-widest uppercase text-amber-900 mb-5">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <ItemRow key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-[#fdfaf6] min-h-screen">

      {/* HERO */}
      <div className="relative h-[60vh] flex items-center justify-center text-center">
        
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-6xl font-light tracking-wide">
            Cafe Davinci
          </h1>
          <p className="mt-4 text-sm tracking-widest">
            ARTISAN COFFEE EXPERIENCE
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* FEATURED */}
        <div className="mb-20">
          <h2 className="text-2xl text-amber-900 mb-6">
            Signature Picks
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-amber-700 mt-2">Rs {item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MENU LAYOUT */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <SectionBlock {...menu[0]} />
          </div>

          {/* RIGHT */}
          <div className="md:mt-20">
            <SectionBlock {...menu[1]} />
            <SectionBlock {...menu[2]} />
          </div>

        </div>

      </div>
    </div>
  )
}