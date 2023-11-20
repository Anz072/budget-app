class TrackableCategory {
  constructor(name, icon) {
    this.icon = icon;
    this.name = name;
  }
}

//   const groceryCategory = new TrackableCategory("Groceries", "🍎");

export const expenseCategories = [
  { id: 1, name: "Groceries", icon: "🍎" },
  { id: 2, name: "Utilities", icon: "💡" },
  { id: 3, name: "Entertainment", icon: "🎮" },
  { id: 4, name: "Transportation", icon: "🚗" },
  { id: 5, name: "Health", icon: "🏥" },
  // Add more categories as needed
];
export const incomeCategories = [
  { id: 1, name: "Salary", icon: "💡" },
  { id: 2, name: "Side Hustle", icon: "🏥" },
  // Add more categories as needed
];
