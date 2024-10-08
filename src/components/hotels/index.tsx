import React from "react";
import { useNavigate } from 'react-router-dom';
import { foodItems } from "../foodscroll";
import { Restaurant } from "../foodscroll";

export const restaurants: Restaurant[] = [];

  foodItems.forEach(foodItem => {
    foodItem.restaurants.forEach(restaurant => {
      if (!restaurants.some(r => r.name === restaurant.name)) {
        restaurants.push(restaurant);
      }
    });
  })
const Hotels: React.FC = () => {
  const navigate = useNavigate();
  const handleCardClick = (restaurantName: string) => {
    navigate(`/restaurant/${restaurantName}`);
  };
  return (
    <div className="ml-[120px] mt-[20px] mr-[120px]">
      <h1 className="text-2xl font-bold">Top restaurant chains in Hyderabad</h1>
      <div className="grid grid-cols-4 mt-4">
        {restaurants.map((hotel, index) => (
          <div
            key={index}
            className=" m-4 rounded-[15px]  p-1"
            onClick={() => handleCardClick(hotel.name)}
          >
            <img src={hotel.image} alt={hotel.name} className="h-40 w-full object-cover rounded-md mb-2 rounded-[20px]" />
            <h2 className="text-xl font-semibold">{hotel.name}</h2>
            <p className="text-gray-500">{hotel.getRestaurantInfo()}</p>
            <p className="mt-2">{hotel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
