export interface MenuItem {
    id: number;
    name: string;
    price: number;
    image?: string;
    description: string;
    category: string;
}

export const MENU_ITEMS: MenuItem[] = [
    {
        id: 1,
        name: "Paneer Tikka Burger",
        price: 199,
        image: "/menu-img/panner-tikka-burger.png",
        description: "Grilled paneer patty with lettuce, tomato, onion, and mint mayo in a toasted bun.",
        category: "Burgers"
    },
    {
        id: 2,
        name: "Margherita Pizza",
        price: 299,
        image: "/menu-img/margerita-pizza.png",
        description: "Wood-fired pizza topped with fresh mozzarella, basil leaves, and rich tomato sauce.",
        category: "Pizza"
    },
    {
        id: 3,
        name: "Crispy Veg Spring Rolls",
        price: 149,
        image: "/menu-img/crispy-veg-spring-roll.png",
        description: "Golden fried rolls stuffed with mixed vegetables, served with sweet chili sauce.",
        category: "Starters"
    },
    {
        id: 4,
        name: "Caesar Salad (Veg)",
        price: 249,
        image: "/menu-img/salad.png",
        description: "Fresh romaine lettuce, croutons, parmesan, olives, and creamy vegetarian Caesar dressing.",
        category: "Salads"
    },
    {
        id: 5,
        name: "Paneer Butter Masala",
        price: 349,
        image: "/menu-img/panner-butter-masala.png",
        description: "Soft paneer cubes cooked in rich tomato-butter gravy with Indian spices.",
        category: "Indian Mains"
    },
    {
        id: 6,
        name: "Dal Makhani",
        price: 299,
        image: "/menu-img/dal-makhni.jpg",
        description: "Slow-cooked black lentils in creamy buttery gravy, served with fresh coriander.",
        category: "Indian Mains"
    },
    {
        id: 7,
        name: "Mango Smoothie",
        price: 149,
        image: "/menu-img/mango-smoothie.jpg",
        description: "Fresh mango blended with yogurt and honey for a refreshing tropical drink.",
        category: "Drinks"
    },
    {
        id: 8,
        name: "Veg Biryani",
        price: 249,
        image: "/menu-img/veg-biryani.jpg",
        description: "Aromatic basmati rice cooked with mixed vegetables and authentic biryani spices.",
        category: "Indian Mains"
    },
    {
        id: 9,
        name: "Masala Dosa",
        price: 179,
        image: "/menu-img/masala-dosa.png",
        description: "Crispy South Indian dosa stuffed with spiced potato filling, served with chutney and sambar.",
        category: "South Indian"
    },
    {
        id: 10,
        name: "Butter Naan",
        price: 59,
        image: "/menu-img/butter-naan.png",
        description: "Soft refined flour bread brushed with melted butter.",
        category: "Breads"
    },
];
