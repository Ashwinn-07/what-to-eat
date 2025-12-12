export interface Dish {
  id: string;
  name: string;
  emoji: string;
  description: string;
  mealType: ("breakfast" | "lunch" | "dinner" | "snack")[];
  diet: "veg" | "vegan" | "egg" | "non-veg" | "pescatarian";
  mood: ("spicy" | "healthy" | "comfort" | "quick" | "indulgent")[];
  timeMinutes: number;
  priceLevel: "cheap" | "medium" | "expensive";
  region:
    | "north-indian"
    | "south-indian"
    | "east-indian"
    | "west-indian"
    | "northeast-indian"
    | "kerala"
    | "chinese"
    | "italian"
    | "mexican"
    | "middle-eastern";
}

export interface Filters {
  mealType: string;
  diet: string;
  mood: string;
  time: string;
  price: string;
  region: string;
}
