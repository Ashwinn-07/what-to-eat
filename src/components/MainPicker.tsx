import { useState, useEffect } from "react";
import { Heart, Share2, RefreshCw, X } from "lucide-react";
import { dishes } from "../data/dishes";
import { type Dish, type Filters } from "../types/dish";

export default function MainPicker() {
  const [filters, setFilters] = useState<Filters>({
    mealType: "all",
    diet: "all",
    mood: "all",
    time: "all",
    price: "all",
    region: "all",
  });

  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const saveFavorites = (newFavorites: string[]) => {
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const filterDishes = () => {
    return dishes.filter((dish) => {
      if (
        filters.mealType !== "all" &&
        !dish.mealType.includes(filters.mealType as any)
      ) {
        return false;
      }
      if (filters.diet !== "all" && dish.diet !== filters.diet) {
        return false;
      }
      if (filters.mood !== "all" && !dish.mood.includes(filters.mood as any)) {
        return false;
      }
      if (filters.time !== "all") {
        const maxTime = parseInt(filters.time);
        if (dish.timeMinutes > maxTime) return false;
      }
      if (filters.price !== "all" && dish.priceLevel !== filters.price) {
        return false;
      }
      if (filters.region !== "all" && dish.region !== filters.region) {
        return false;
      }
      return true;
    });
  };

  const pickRandomDish = () => {
    const filtered = filterDishes();
    if (filtered.length === 0) {
      alert("No dishes match your filters. Try adjusting them!");
      return;
    }

    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * filtered.length);
      setSelectedDish(filtered[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  const toggleFavorite = (dishId: string) => {
    if (favorites.includes(dishId)) {
      saveFavorites(favorites.filter((id) => id !== dishId));
    } else {
      saveFavorites([...favorites, dishId]);
    }
  };

  const shareDish = () => {
    if (!selectedDish) return;
    const text = `I'm eating ${selectedDish.name} ${selectedDish.emoji}! ${selectedDish.description}`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    }
  };

  const FilterButton = ({
    label,
    isActive,
    onClick,
  }: {
    value: string;
    label: string;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all motion-reduce:transition-none active:scale-95 ${
        isActive
          ? "bg-orange-500 text-white shadow-md"
          : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-8 pb-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            What To Eat? 🍽️
          </h1>
          <p className="text-gray-600">
            Let us help you decide your next meal!
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-1 mb-2">
          <div className="h-16 bg-linear-to-r from-orange-100 to-amber-100 rounded-xl flex items-center justify-center">
            <p className="text-sm text-gray-600 px-4 text-center">
              Ad Space - Placeholder
            </p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Meal Type
              </h3>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  value="all"
                  label="All"
                  isActive={filters.mealType === "all"}
                  onClick={() => setFilters({ ...filters, mealType: "all" })}
                />
                <FilterButton
                  value="breakfast"
                  label="Breakfast"
                  isActive={filters.mealType === "breakfast"}
                  onClick={() =>
                    setFilters({ ...filters, mealType: "breakfast" })
                  }
                />
                <FilterButton
                  value="lunch"
                  label="Lunch"
                  isActive={filters.mealType === "lunch"}
                  onClick={() => setFilters({ ...filters, mealType: "lunch" })}
                />
                <FilterButton
                  value="dinner"
                  label="Dinner"
                  isActive={filters.mealType === "dinner"}
                  onClick={() => setFilters({ ...filters, mealType: "dinner" })}
                />
                <FilterButton
                  value="snack"
                  label="Snack"
                  isActive={filters.mealType === "snack"}
                  onClick={() => setFilters({ ...filters, mealType: "snack" })}
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Diet</h3>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  value="all"
                  label="All"
                  isActive={filters.diet === "all"}
                  onClick={() => setFilters({ ...filters, diet: "all" })}
                />
                <FilterButton
                  value="veg"
                  label="Veg"
                  isActive={filters.diet === "veg"}
                  onClick={() => setFilters({ ...filters, diet: "veg" })}
                />
                <FilterButton
                  value="vegan"
                  label="Vegan"
                  isActive={filters.diet === "vegan"}
                  onClick={() => setFilters({ ...filters, diet: "vegan" })}
                />
                <FilterButton
                  value="egg"
                  label="Egg"
                  isActive={filters.diet === "egg"}
                  onClick={() => setFilters({ ...filters, diet: "egg" })}
                />
                <FilterButton
                  value="non-veg"
                  label="Non-Veg"
                  isActive={filters.diet === "non-veg"}
                  onClick={() => setFilters({ ...filters, diet: "non-veg" })}
                />
                <FilterButton
                  value="pescatarian"
                  label="Pescatarian"
                  isActive={filters.diet === "pescatarian"}
                  onClick={() =>
                    setFilters({ ...filters, diet: "pescatarian" })
                  }
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Mood</h3>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  value="all"
                  label="All"
                  isActive={filters.mood === "all"}
                  onClick={() => setFilters({ ...filters, mood: "all" })}
                />
                <FilterButton
                  value="spicy"
                  label="Spicy"
                  isActive={filters.mood === "spicy"}
                  onClick={() => setFilters({ ...filters, mood: "spicy" })}
                />
                <FilterButton
                  value="healthy"
                  label="Healthy"
                  isActive={filters.mood === "healthy"}
                  onClick={() => setFilters({ ...filters, mood: "healthy" })}
                />
                <FilterButton
                  value="comfort"
                  label="Comfort"
                  isActive={filters.mood === "comfort"}
                  onClick={() => setFilters({ ...filters, mood: "comfort" })}
                />
                <FilterButton
                  value="quick"
                  label="Quick"
                  isActive={filters.mood === "quick"}
                  onClick={() => setFilters({ ...filters, mood: "quick" })}
                />
                <FilterButton
                  value="indulgent"
                  label="Indulgent"
                  isActive={filters.mood === "indulgent"}
                  onClick={() => setFilters({ ...filters, mood: "indulgent" })}
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Time to Cook
              </h3>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  value="all"
                  label="All"
                  isActive={filters.time === "all"}
                  onClick={() => setFilters({ ...filters, time: "all" })}
                />
                <FilterButton
                  value="10"
                  label="≤ 10 min"
                  isActive={filters.time === "10"}
                  onClick={() => setFilters({ ...filters, time: "10" })}
                />
                <FilterButton
                  value="30"
                  label="≤ 30 min"
                  isActive={filters.time === "30"}
                  onClick={() => setFilters({ ...filters, time: "30" })}
                />
                <FilterButton
                  value="60"
                  label="≤ 60 min"
                  isActive={filters.time === "60"}
                  onClick={() => setFilters({ ...filters, time: "60" })}
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Price Level
              </h3>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  value="all"
                  label="All"
                  isActive={filters.price === "all"}
                  onClick={() => setFilters({ ...filters, price: "all" })}
                />
                <FilterButton
                  value="cheap"
                  label="Cheap"
                  isActive={filters.price === "cheap"}
                  onClick={() => setFilters({ ...filters, price: "cheap" })}
                />
                <FilterButton
                  value="medium"
                  label="Medium"
                  isActive={filters.price === "medium"}
                  onClick={() => setFilters({ ...filters, price: "medium" })}
                />
                <FilterButton
                  value="expensive"
                  label="Expensive"
                  isActive={filters.price === "expensive"}
                  onClick={() => setFilters({ ...filters, price: "expensive" })}
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Region
              </h3>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  value="all"
                  label="All"
                  isActive={filters.region === "all"}
                  onClick={() => setFilters({ ...filters, region: "all" })}
                />
                <FilterButton
                  value="north-indian"
                  label="North Indian"
                  isActive={filters.region === "north-indian"}
                  onClick={() =>
                    setFilters({ ...filters, region: "north-indian" })
                  }
                />
                <FilterButton
                  value="south-indian"
                  label="South Indian"
                  isActive={filters.region === "south-indian"}
                  onClick={() =>
                    setFilters({ ...filters, region: "south-indian" })
                  }
                />
                <FilterButton
                  value="east-indian"
                  label="East Indian"
                  isActive={filters.region === "east-indian"}
                  onClick={() =>
                    setFilters({ ...filters, region: "east-indian" })
                  }
                />
                <FilterButton
                  value="west-indian"
                  label="West Indian"
                  isActive={filters.region === "west-indian"}
                  onClick={() =>
                    setFilters({ ...filters, region: "west-indian" })
                  }
                />
                <FilterButton
                  value="northeast-indian"
                  label="Northeast Indian"
                  isActive={filters.region === "northeast-indian"}
                  onClick={() =>
                    setFilters({ ...filters, region: "northeast-indian" })
                  }
                />
                <FilterButton
                  value="kerala"
                  label="Kerala"
                  isActive={filters.region === "kerala"}
                  onClick={() => setFilters({ ...filters, region: "kerala" })}
                />
                <FilterButton
                  value="chinese"
                  label="Chinese"
                  isActive={filters.region === "chinese"}
                  onClick={() => setFilters({ ...filters, region: "chinese" })}
                />
                <FilterButton
                  value="italian"
                  label="Italian"
                  isActive={filters.region === "italian"}
                  onClick={() => setFilters({ ...filters, region: "italian" })}
                />
                <FilterButton
                  value="mexican"
                  label="Mexican"
                  isActive={filters.region === "mexican"}
                  onClick={() => setFilters({ ...filters, region: "mexican" })}
                />
                <FilterButton
                  value="middle-eastern"
                  label="Middle Eastern"
                  isActive={filters.region === "middle-eastern"}
                  onClick={() =>
                    setFilters({ ...filters, region: "middle-eastern" })
                  }
                />
              </div>
            </div>
            <div className="max-w-4xl mx-auto flex gap-3">
              <button
                onClick={pickRandomDish}
                className="flex-1 bg-linear-to-r from-orange-500 to-amber-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all motion-reduce:transition-none active:scale-95"
              >
                Pick Something For Me! 🎲
              </button>
              <button
                onClick={() => setShowFavorites(!showFavorites)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-4 rounded-xl transition-all motion-reduce:transition-none active:scale-95 relative"
              >
                <Heart
                  className={
                    favorites.length > 0 ? "fill-red-500 text-red-500" : ""
                  }
                />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {selectedDish && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div
              className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transition-all motion-reduce:transition-none ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{selectedDish.emoji}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedDish.name}
                </h2>
                <p className="text-gray-600">{selectedDish.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                  {selectedDish.timeMinutes} min
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium capitalize">
                  {selectedDish.diet}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium capitalize">
                  {selectedDish.priceLevel}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => pickRandomDish()}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all motion-reduce:transition-none active:scale-95"
                >
                  <RefreshCw size={18} /> Re-Pick
                </button>
                <button
                  onClick={() => toggleFavorite(selectedDish.id)}
                  className={`flex-1 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all motion-reduce:transition-none active:scale-95 ${
                    favorites.includes(selectedDish.id)
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <Heart
                    size={18}
                    className={
                      favorites.includes(selectedDish.id) ? "fill-current" : ""
                    }
                  />
                  {favorites.includes(selectedDish.id) ? "Saved" : "Save"}
                </button>
                <button
                  onClick={shareDish}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all motion-reduce:transition-none active:scale-95"
                >
                  <Share2 size={18} /> Share
                </button>
              </div>

              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors motion-reduce:transition-none"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}

        {showFavorites && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  My Favorites
                </h2>
                <button
                  onClick={() => setShowFavorites(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors motion-reduce:transition-none"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {favorites.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <Heart size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>No favorites yet!</p>
                    <p className="text-sm mt-2">
                      Start picking dishes and save your favorites.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {favorites.map((favId) => {
                      const dish = dishes.find((d) => d.id === favId);
                      if (!dish) return null;
                      return (
                        <div
                          key={dish.id}
                          className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors motion-reduce:transition-none"
                        >
                          <div className="text-3xl">{dish.emoji}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">
                              {dish.name}
                            </h3>
                            <p className="text-xs text-gray-600">
                              {dish.timeMinutes} min
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedDish(dish);
                              setShowFavorites(false);
                            }}
                            className="text-orange-500 hover:text-orange-600 font-medium text-sm"
                          >
                            View
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-1 mt-6">
          <div className="h-24 bg-linear-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
            <p className="text-sm text-gray-600 px-4 text-center">
              Ad Space - Placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
