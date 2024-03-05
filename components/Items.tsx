import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleItem from "./SingleItem";
import Search from "./Search";
type FoodItem = {
  idCategory: string;
  strCategoryThumb: string;
  strCategory: string;
  strCategoryDescription: string;
  // Add other properties as needed
};
const Items = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>([]);
  const calculatePrice = (item: string) => {
    return (200 * parseInt(item, 10)) / 2 + 79;
  };

  const getItems = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setFoodItems(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

const handleSearch = (value: string) => {
  const filterItems = foodItems.filter((item) =>
    item.strCategory.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredItems(filterItems);
};
  return (
    <section id="menu" className="bg-[#f1efef] w-full p-8 pt-14">
      
        <Search handleSearch={handleSearch} />
     
      <div className="flex flex-wrap justify-center mt-10">
        {(filteredItems.length > 0 ? filteredItems : foodItems).map(
          (item, i) => (
            <SingleItem
              key={i}
              itemNum={item.idCategory}
              burgerSrc={item.strCategoryThumb}
              price={calculatePrice(item.idCategory)}
              title={item.strCategory}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Items;
