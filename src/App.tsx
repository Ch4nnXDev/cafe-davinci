type Section = {
  title: string
  items: string[]
}

const menu: Section[] = [
  {
    title: "Coffee (Hot)",
    items: [
      "Cappuccino",
      "Flat White",
      "Café Latte",
      "Café Mocha",
      "Caramel Latte",
      "Americano",
      "Espresso",
      "Espresso Double",
      "Hot Chocolate"
    ]
  },
  {
    title: "Coffee (Cold)",
    items: [
      "Iced Americano",
      "Iced Chocolate",
      "Iced Caramel Macchiato",
      "Iced Mocha",
      "Iced Latte"
    ]
  },
  {
    title: "Milk Shakes",
    items: ["Chocolate Shake", "Oreo Shake"]
  },
  {
    title: "Mojitos & Sodas",
    items: [
      "Virgin Mojito",
      "Passion Mojito",
      "Lime Soda (Sprite, Mint, Lime)"
    ]
  },
  {
    title: "Frappes",
    items: [
      "Mocha Frappe",
      "Espresso Frappe",
      "Chocolate Crème Frappe"
    ]
  },
  {
    title: "Fresh Juices",
    items: [
      "Mango Juice",
      "Passion Fruit Juice",
      "Watermelon Juice"
    ]
  },
  {
    title: "Healthy Drinks",
    items: ["Red Antioxidant", "Detox Drink"]
  }
]

function SectionBlock({ title, items }: Section) {
  return (
    <div className="mb-14">
      {/* Section Title */}
      <h2 className="text-2xl font-light tracking-widest text-amber-900 mb-6 uppercase">
        {title}
      </h2>

      {/* Items */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-baseline">
            
            <span className="text-gray-800 text-lg">{item}</span>

            {/* Elegant flowing line */}
            <span className="flex-1 border-b border-dotted border-gray-300 mx-4 translate-y-[-4px]"></span>

            {/* price placeholder */}
            <span className="text-gray-400 text-sm">—</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] text-gray-900">

      {/* Layout */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl font-extralight tracking-wide text-amber-900">
            Cafe Davinci
          </h1>

          <p className="mt-4 text-gray-500 max-w-md leading-relaxed">
            A curated selection of handcrafted beverages, designed to slow
            your day and elevate your senses.
          </p>

          <div className="w-24 h-[1px] bg-amber-400 mt-6"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Column */}
          <div>
            <SectionBlock {...menu[0]} />
            <SectionBlock {...menu[2]} />
            <SectionBlock {...menu[4]} />
            <SectionBlock {...menu[6]} />
          </div>

          {/* Right Column */}
          <div className="md:mt-24">
            <SectionBlock {...menu[1]} />
            <SectionBlock {...menu[3]} />
            <SectionBlock {...menu[5]} />
          </div>

        </div>
      </div>
    </div>
  )
}