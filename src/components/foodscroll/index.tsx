import React, { useState, useRef } from "react";
import biriyani from '@/assets/biriyani.png';
import pizza from '@/assets/pizza.png';
import burger from '@/assets/burger.png';
import cake from '@/assets/cake.jpeg';
import dosa from '@/assets/dosa.png';
import coffee from '@/assets/coffee.png';
import idli from '@/assets/idli.png';
import kichidi from '@/assets/kichidi.jpg';
import momos from '@/assets/momos.png';
import noodles from '@/assets/noodles.png';
import pakoda from '@/assets/pakoda.png';
import parotta from '@/assets/parotta.jpg';
import pav from '@/assets/pav.png';
import samosa from '@/assets/samosa.png';
import shake from '@/assets/shake.png';
import shawarma from '@/assets/shawarma.png';
import tea from '@/assets/tea.png';
import utappam from '@/assets/utappam.jpg';
import vada from '@/assets/vada.png';
import kfc from '@/assets/kfc.png';
import dominos from '@/assets/dominos.png';
import hut from '@/assets/hut.png';
import onesta from '@/assets/onesta.png';
import lapinoz from '@/assets/lapinoz.png';
import cafeni from '@/assets/cafeni.png';
import wendy from '@/assets/wendy.png';
import king from '@/assets/king.png';
import pista from '@/assets/pista.png';
import moya from '@/assets/moya.png';
import mehfil from '@/assets/mehfil.png';
import grand from '@/assets/grand.png';
import zyqa from '@/assets/zyqa.png';
import bahar from '@/assets/bahar.png';
import stan from '@/assets/stan.png';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom';

class BaseItem {
  image: string;
  description: string;

  constructor(image: string, description: string) {
    this.image = image;
    this.description = description;
  }
}

export class Restaurant extends BaseItem {
  name: string;
  rating: number;
  minutes: number;

  constructor(name: string, image: string, rating: number, minutes: number, description: string) {
    super(image, description);
    this.name = name;
    this.rating = rating;
    this.minutes = minutes;
  }

  getRestaurantInfo(): string {
    return `Rating: ${this.rating} stars, ${this.minutes} mins away`;
  }
}

export class FoodItem {
  itemName: string;
  restaurants: Restaurant[];
  image: string;

  constructor(itemName: string, restaurants: Restaurant[], image: string) {
    this.itemName = itemName;
    this.restaurants = restaurants;
    this.image = image;
  }
}

export const foodItems = [
  new FoodItem("Pizza", [
    new Restaurant("Dominos", dominos, 4.7, 10, "Beautiful resort with beach access."),
    new Restaurant("Pizza hut", hut, 4.0, 5, "Convenient location near shopping centers."),
    new Restaurant("Onesta", onesta, 3.7, 40-45, "Italian, Desserts, Pizzas, American, SnacksBanjara Hills"),
    new Restaurant("La Pino'z Pizza", lapinoz, 4.3, 20-25, "Pizzas, Pastas, Italian, Desserts, BeveragesHimayath Nagar"),
    new Restaurant("Cafe Niloufer Classic", cafeni, 4.7, 25-30, "25-30 minsBakery, Beverages, Snacks, DessertsRed Hills"),
  ], pizza),

  new FoodItem("Cheeseburger", [
    new Restaurant(	"Wendy's Burgers"	,	wendy	,	4.7	,	20-25	,	"Burgers, American, Fast Food, Snacks, BeveragesAbids"	)	,
    new Restaurant(	"Burger King"	,	king	,	4.6	,	30-35	,	"minsBurgers, AmericanHimayath Nagar"	)	,
    new Restaurant(	"Pista House Bakery"	,	pista	,	4.6	,	40-45	,	" minsBakery, Pizzas, Snacks, Dessertschikkadapally"	)	,
    new Restaurant(	"Moyaaah"	,	moya	,	4.5	,	50-55	,	" minsBurgers, Beverages, Cafe, DessertsHimayath Nagar"	)	,
    new Restaurant(	"KFC"	,	kfc	,	4	,	60-65	,	" minsBurgers, American, Fast Food, ContinentalBanjara Hills"	)	,
  ], burger),

  new FoodItem("Biriyani", [
    new Restaurant(	"Grand Hotel"	,	grand	,	4.7	,	20-25	,	" minsBiryani, Chinese, Kebabs, TandoorAbids"	)	,
new Restaurant(	"Cafe Bahar since 1973"	,	bahar	,	4.6	,	30-35	,	" minsBiryani, Chinese, Indian, Kebabs, TandoorBasheer Bagh"	)	,
new Restaurant(	"Mehfil"	,	mehfil	,	4.6	,	40-45	,	" minsBiryani, Chinese, Kebabs, TandoorBanjara Hills"	)	,
new Restaurant(	"HILLSTAR RESTAURANT"	,	zyqa	,	4.5	,	50-55	,	" minsChinese, BiryaniKhairatabad"	)	,
new Restaurant(	"Imperial Multicuisine Restaurant"	,	stan	,	4	,	60-65	,	" minsBiryani, Chinese, Indian, Kebabs, TandoorRedhills"	)	,
  ], biriyani),

  new FoodItem("Cake", [
    new Restaurant("Dessert Bar", cake, 4.9, 10, "Delicious cakes with a variety of flavors."),
    new Restaurant("Cake Heaven", cake, 4.7, 12, "Heavenly cakes for every occasion."),
    new Restaurant("The Cake Shop", cake, 4.8, 11, "Freshly baked cakes daily with organic ingredients."),
    new Restaurant("Sweet Treats", cake, 4.6, 9, "Custom-made cakes perfect for any celebration."),
    new Restaurant("Bake Delight", cake, 4.5, 8, "Classic cakes with a modern twist, available for pickup."),
], cake),

new FoodItem("Chinese Noodles", [
  new Restaurant("Noodle Nook", noodles, 4.4, 14, "Authentic Chinese noodles with a modern twist."),
  new Restaurant("Wok Express", noodles, 4.5, 10, "Fast and delicious wok-fried noodles."),
  new Restaurant("Dragon Bowl", noodles, 4.6, 12, "Traditional noodles served in hearty portions."),
  new Restaurant("Spice & Noodles", noodles, 4.3, 11, "Spicy noodle dishes with bold flavors."),
  new Restaurant("Golden Wok", noodles, 4.7, 15, "Hand-pulled noodles made fresh daily."),
], noodles),

new FoodItem("Dosa", [
  new Restaurant("South India Delight", dosa, 4.8, 12, "Crispy dosa with authentic South Indian flavors."),
  new Restaurant("Dosa Point", dosa, 4.6, 15, "Variety of dosas made fresh to order."),
  new Restaurant("Dosa Hub", dosa, 4.7, 10, "Serving traditional dosas with modern variations."),
  new Restaurant("Golden Dosa", dosa, 4.9, 11, "Expertly crafted dosas with a selection of fillings."),
  new Restaurant("Spice & Dosa", dosa, 4.5, 9, "A fusion of classic dosa with unique spice blends."),
], dosa),

new FoodItem("Coffee", [
  new Restaurant("Coffee Corner", coffee, 4.9, 5, "Freshly brewed coffee from premium beans."),
  new Restaurant("Bean Bar", coffee, 4.7, 7, "Perfect espresso and coffee blends."),
  new Restaurant("Brewed Bliss", coffee, 4.8, 6, "Aromatic coffee with a relaxing ambiance."),
  new Restaurant("Café Aroma", coffee, 4.6, 8, "Rich and smooth coffee served with freshly baked pastries."),
  new Restaurant("The Espresso Room", coffee, 4.9, 4, "Specialty espresso drinks made by skilled baristas."),

], coffee),

new FoodItem("Idli", [
  new Restaurant("South Indian Kitchen", idli, 4.8, 10, "Soft idlis with traditional accompaniments."),
  new Restaurant("Idli Express", idli, 4.7, 12, "Quick and tasty idli options."),
  new Restaurant("Idli House", idli, 4.9, 8, "Authentic idlis made fresh every day."),
  new Restaurant("Tiffin Center", idli, 4.6, 9, "Classic South Indian tiffin with soft idlis."),
  new Restaurant("Fluffy Idli", idli, 4.8, 11, "Deliciously soft and fluffy idlis served with sambar and chutney."),
], idli),

new FoodItem("Kichidi", [
  new Restaurant("Home Comforts", kichidi, 4.5, 10, "Comfort food with the best kichidi."),
  new Restaurant("Kichidi Junction", kichidi, 4.4, 8, "A variety of kichidi to satisfy all cravings."),
  new Restaurant("The Kichidi Pot", kichidi, 4.6, 9, "Delicious and wholesome kichidi with a homestyle touch."),
  new Restaurant("Kichidi Express", kichidi, 4.3, 7, "Quick, nutritious kichidi for a healthy meal on the go."),
  new Restaurant("Spice & Lentil", kichidi, 4.7, 11, "Kichidi with a perfect blend of spices and lentils."),
], kichidi),

new FoodItem("Momos", [
  new Restaurant("Tibet Delight", momos, 4.9, 12, "Steamed momos with authentic Tibetan flavors."),
  new Restaurant("Momo Madness", momos, 4.7, 15, "Flavorsome momos with a variety of fillings."),
  new Restaurant("Himalayan Bites", momos, 4.8, 13, "Mouthwatering momos straight from the Himalayas."),
  new Restaurant("The Momo House", momos, 4.6, 10, "Freshly made momos served with spicy dipping sauces."),
  new Restaurant("Spice & Momo", momos, 4.5, 14, "Delicious momos with a perfect blend of spices."),
], momos),

new FoodItem("Pakoda", [
  new Restaurant("Crunchy Treats", pakoda, 4.6, 8, "Crispy and crunchy pakodas."),
  new Restaurant("Pakoda Palace", pakoda, 4.5, 10, "Delicious pakodas with a variety of flavors."),
  new Restaurant("Golden Bites", pakoda, 4.7, 9, "Golden-fried pakodas with perfect seasoning."),
  new Restaurant("Spice & Crunch", pakoda, 4.4, 7, "Spicy pakodas with a crispy exterior."),
  new Restaurant("Street Pakoda", pakoda, 4.6, 11, "Street-style pakodas served with chutney."),
], pakoda),

new FoodItem("Parotta", [
  new Restaurant("Fluffy Parotta", parotta, 4.7, 12, "Fluffy parottas served with rich gravies."),
  new Restaurant("Parotta House", parotta, 4.6, 10, "A variety of parottas freshly made."),
  new Restaurant("Crispy Layers", parotta, 4.8, 11, "Crispy, multi-layered parottas with flavorful curries."),
  new Restaurant("South Spice Parotta", parotta, 4.5, 9, "Classic South Indian parottas served hot."),
  new Restaurant("Parotta Junction", parotta, 4.6, 10, "Street-style parottas with spicy gravies."),
], parotta),

new FoodItem("Pav Bhaji", [
  new Restaurant("Pav Paradise", pav, 4.8, 8, "Authentic pav bhaji with soft buns."),
  new Restaurant("Street Bhaji", pav, 4.7, 10, "Delicious street-style pav bhaji."),
  new Restaurant("Bhaji Junction", pav, 4.6, 9, "Perfectly spiced bhaji with buttery pav."),
  new Restaurant("Spice & Pav", pav, 4.5, 11, "A fusion of traditional pav bhaji with bold spices."),
  new Restaurant("Mumbai Magic", pav, 4.9, 12, "Classic Mumbai-style pav bhaji with extra butter."),
], pav),


  new FoodItem("Samosa", [
    new Restaurant(	"Dadu's"	,	wendy	,	4.7	,	20-25	,	"minsSweets, Desserts, Chaat, Snacks, BakeryHimayatnagar"	)	,
new Restaurant(	"LunchBox - Meals and Thalis"	,	king	,	4.6	,	30-35	,	" minsBiryani, Punjabi, Healthy Food, Desserts, BeveragesAbids"	)	,
new Restaurant(	"Taj Mahal-Abids"	,	pista	,	4.6	,	40-45	,	" minsSouth Indian, North Indian, Biryani, SnacksAbids"	)	,
new Restaurant(	"Sri Narsing Bhelpuri & Pav Bhaji (Himayathnagar)"	,	moya	,	4.5	,	50-55	,	" minsChaat, ItalianKachiguda"	)	,
new Restaurant(	"Agra Sweets Banjara"	,	kfc	,	4	,	60-65	,	" minsSweets, Desserts, Chaat, Snacks, BeveragesMasab Tank"	)	,
  ], samosa),

  new FoodItem("Milkshake", [
    new Restaurant("Shake Shack", shake, 4.9, 5, "Creamy milkshakes with various flavors."),
    new Restaurant("Frosty Shakes", shake, 4.8, 7, "Delicious milkshakes served cold."),
    new Restaurant("Milkshake Heaven", shake, 4.7, 6, "Indulgent milkshakes made with premium ingredients."),
    new Restaurant("Shake It Up", shake, 4.6, 8, "Customizable milkshakes with endless flavor options."),
    new Restaurant("Choco Delight", shake, 4.8, 5, "Rich chocolate milkshakes topped with whipped cream."),
], shake),

new FoodItem("Shawarma", [
  new Restaurant("Shawarma King", shawarma, 4.8, 8, "Delicious shawarmas with tender meat."),
  new Restaurant("Wrap World", shawarma, 4.7, 10, "Freshly made shawarma wraps."),
  new Restaurant("Shawarma Palace", shawarma, 4.9, 9, "Authentic shawarmas with a variety of sauces."),
  new Restaurant("The Shawarma Spot", shawarma, 4.6, 11, "Juicy shawarmas served with fresh veggies."),
  new Restaurant("Middle Eastern Delights", shawarma, 4.5, 10, "Traditional shawarmas made with care."),
], shawarma),

new FoodItem("Tea", [
  new Restaurant("Tea Time", tea, 4.9, 5, "Freshly brewed tea with various blends."),
  new Restaurant("Herbal Tea House", tea, 4.8, 7, "Specialty herbal teas for relaxation."),
  new Restaurant("Chai Express", tea, 4.7, 6, "Authentic Indian chai served with snacks."),
  new Restaurant("Green Leaf", tea, 4.6, 8, "Refreshing green teas with unique flavors."),
  new Restaurant("The Tea Garden", tea, 4.8, 5, "A variety of teas in a serene setting."),
], tea),
new FoodItem("Utappam", [
  new Restaurant("Uttapam Hub", utappam, 4.6, 10, "Soft uttapams with fresh toppings."),
  new Restaurant("Uttapam Point", utappam, 4.5, 12, "Delicious uttapams served hot."),
  new Restaurant("Tasty Utappam", utappam, 4.8, 9, "Fluffy uttapams made with a variety of ingredients."),
  new Restaurant("South Indian Eats", utappam, 4.7, 11, "Authentic uttapams served with chutney and sambar."),
  new Restaurant("The Utappam Place", utappam, 4.6, 10, "Freshly made uttapams with seasonal veggies."),
], utappam),
new FoodItem("Vada", [
  new Restaurant("Vada Corner", vada, 4.7, 8, "Crispy vadas served with chutneys."),
  new Restaurant("Vada House", vada, 4.6, 10, "A variety of vadas freshly made."),
  new Restaurant("Vada Express", vada, 4.8, 9, "Hot vadas served with tangy sauces."),
  new Restaurant("Spicy Vada", vada, 4.5, 7, "Flavorful vadas with a spicy kick."),
  new Restaurant("Vada Station", vada, 4.6, 11, "Traditional vadas with modern twists."),
], vada)
];

const FoodList: React.FC = () => {
  const scrollRef = useRef<HTMLUListElement | null>(null);

  const handleItemClick = (foodItem: FoodItem) => {
    navigate(`/restaurants`, { state: { selectedFoodItem: foodItem, selectedRestaurants: foodItem.restaurants } });
  };
  

  const navigate = useNavigate();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className="ml-[120px] mt-[20px] mr-[120px]">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">What's on your mind?</h1>
          <div className="flex space-x-2 gap-2">
            <div className="p-2 bg-gray-200 rounded-full shadow cursor-pointer" onClick={scrollLeft}>
              <ArrowLeftIcon className="h-4 w-4 text-slate-600" />
            </div>
            <div className="p-2 bg-gray-200 rounded-full shadow cursor-pointer" onClick={scrollRight}>
              <ArrowRightIcon className="h-4 w-4 text-slate-600" />
            </div>
          </div>
        </div>

        <ul className="food-list flex overflow-x-auto mt-4" ref={scrollRef}>
          {foodItems.map((foodItem, index) => (
            <li
              key={index}
              className="food-item flex-shrink-0 mr-4 cursor-pointer"
              onClick={() => handleItemClick(foodItem)} 
            >
              <img
                src={foodItem.image}
                alt={foodItem.itemName}
                className="food-image w-[150px] h-[150px] object-cover rounded-lg"
              />
              <p className="text-center mt-2">{foodItem.itemName}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="mx-auto mt-6 md:mt-15 lg:mt-0 w-11/12 md:w-5/6 lg:w-3/4 border-t-2 border-gray-300" />
    </section>
  );
};

export default FoodList;
