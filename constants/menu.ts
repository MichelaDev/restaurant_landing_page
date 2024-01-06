export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export type MenuCourses = "appetizers" | "pasta" | "salads" | "desserts" | "drinks";

type MenuCategory = {[ COURSES in MenuCourses ]: MenuItem[];}

const MENU: MenuCategory = {
  appetizers: [
    { name: "Caprese Tower", description: "Buffalo mozzarella, heirloom tomatoes, and fresh basil drizzled with aged balsamic reduction.", price: 18 },
    { name: "Truffle-infused Arancini", description: "Crispy risotto balls filled with black truffle, fontina cheese, and served with saffron aioli.", price: 22 },
    { name: "Seared Scallops with Porcini Risotto", description: "Pan-seared diver scallops atop a bed of creamy porcini mushroom risotto.", price: 28 },
  ],
  pasta: [
    { name: "Lobster Ravioli in Champagne Cream Sauce", description: "Homemade lobster-filled ravioli served in a luxurious champagne-infused cream sauce.", price: 36 },
    { name: "Black Truffle Tagliatelle", description: "Fresh tagliatelle pasta tossed in a decadent black truffle and wild mushroom cream sauce.", price: 32 },
    { name: "Saffron Pappardelle with Shrimp", description: "Saffron-infused pappardelle pasta with sautéed shrimp, cherry tomatoes, and garlic in a white wine reduction.", price: 30 },
  ],
  salads: [
    { name: "Grilled Peach and Prosciutto Salad", description: "Mixed greens, grilled peaches, prosciutto di Parma, burrata cheese, and honey balsamic vinaigrette.", price: 16 },
    { name: "Kale and Quinoa Caesar Salad", description: "Tuscan kale, quinoa, cherry tomatoes, shaved Parmesan, and Caesar dressing with a hint of truffle.", price: 14 },
    { name: "Insalata di Mare", description: "A medley of marinated seafood including calamari, shrimp, and octopus with lemon and extra virgin olive oil.", price: 26 },
  ],
  desserts: [
    { name: "Tiramisu Martini", description: "Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa served in a martini glass.", price: 12 },
    { name: "Chocolate Hazelnut Torta", description: "Flourless chocolate-hazelnut cake with a molten center, served with vanilla gelato.", price: 18 },
    { name: "Lemon Panna Cotta with Berry Compote", description: "Silky lemon-infused panna cotta topped with a vibrant mixed berry compote.", price: 14 },
  ],
  drinks: [
    { name: "Negroni Elegante", description: "A refined twist on the classic Negroni with premium gin, Campari, and sweet vermouth.", price: 16 },
    { name: "Bella Bellini", description: "Prosecco infused with fresh peach puree, garnished with a white peach slice.", price: 14 },
    { name: "Italian Velvet Martini", description: "Vanilla-infused vodka, Frangelico, and a touch of amaretto, shaken to perfection.", price: 18 },
  ],
};


export default MENU;
