import React ,{useEffect} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { Restaurant, FoodItem } from '../foodscroll'; 

const RestaurantsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const navigate = useNavigate();
  const handleCardClick = (restaurantName: string) => {
    navigate(`/restaurant/${restaurantName}`);
  };
    const location = useLocation();
    const { selectedFoodItem, selectedRestaurants }: { selectedFoodItem: FoodItem | null; selectedRestaurants: Restaurant[] } = location.state || { selectedFoodItem: null, selectedRestaurants: [] };
  
    if (!selectedFoodItem) {
      return <div>No food item selected</div>; 
    }
  
    return (
      <div className="ml-[120px] mt-[100px] mr-[120px] mt-16">
        <h1 className="text-2xl font-bold">{selectedFoodItem.itemName}</h1>
        <div className="grid grid-cols-4 mt-4">
          {selectedRestaurants.map((restaurant, index) => (
            <div key={index} className="m-4 rounded-[15px] p-1" onClick={() => handleCardClick(restaurant.name)}>
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="h-40 w-full object-cover rounded-md mb-2 rounded-[20px]" 
              />
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p className="text-gray-500">Rating: {restaurant.rating} stars, {restaurant.minutes} mins away</p>
              <p className="mt-2">{restaurant.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default RestaurantsPage;
