import { useParams } from 'react-router-dom';
import { Restaurant } from '../foodscroll'; 
import { restaurants } from '../hotels';
import React, { useEffect } from 'react';

interface MenuItem {
  name: string;
  price: number;
}
interface CartItem extends MenuItem {
  quantity: number;
}


type RestaurantWithMenu = Partial<Restaurant> & { menu: MenuItem[] };


const restaurantMenus: Record<string, MenuItem[]> = {
    "Dominos": [
      { name: "Pepperoni Pizza", price: 200 },
      { name: "Cheese Burst", price: 250 },
      { name: "Margherita Pizza", price: 180 },
      { name: "BBQ Chicken Pizza", price: 240 },
    ],
    "Pizza hut": [
      { name: "Veggie Supreme", price: 180 },
      { name: "Chicken Supreme", price: 220 },
      { name: "Stuffed Crust Pizza", price: 250 },
      { name: "Margarita Pizza", price: 200 },
    ],
    "Onesta": [
      { name: "Margherita Pizza", price: 190 },
      { name: "Chocolate Lava Cake", price: 120 },
      { name: "Garlic Bread", price: 80 },
      { name: "Pasta Alfredo", price: 210 },
    ],
    "La Pino'z Pizza": [
      { name: "Classic Cheese Pizza", price: 210 },
      { name: "Paneer Tikka Pizza", price: 230 },
      { name: "Garlic Breadsticks", price: 90 },
      { name: "Chocolate Brownie", price: 150 },
    ],
    "Cafe Niloufer Classic": [
      { name: "Irani Chai", price: 40 },
      { name: "Osmania Biscuit", price: 20 },
      { name: "Hyderabadi Biryani", price: 180 },
      { name: "Cheese Omelette", price: 60 },
    ],
    "Wendy's Burgers": [
      { name: "Classic Burger", price: 200 },
      { name: "Cheese Burger", price: 220 },
      { name: "Spicy Chicken Sandwich", price: 250 },
      { name: "French Fries", price: 100 },
    ],
    "Burger King": [
      { name: "Whopper", price: 250 },
      { name: "Cheeseburger", price: 180 },
      { name: "Chicken Fries", price: 200 },
      { name: "Onion Rings", price: 90 },
    ],
    "Pista House Bakery": [
      { name: "Baklava", price: 120 },
      { name: "Rasmalai", price: 100 },
      { name: "Cheese Pizza", price: 200 },
      { name: "Bakery Snacks", price: 180 },
    ],
    "Moyaaah": [
      { name: "Moyaaah Burger", price: 230 },
      { name: "Moyaaah Fries", price: 120 },
      { name: "Moyaaah Chicken Sandwich", price: 250 },
      { name: "Milkshake", price: 150 },
    ],
    "KFC": [
      { name: "Zinger Burger", price: 150 },
      { name: "Chicken Popcorn", price: 100 },
      { name: "Original Recipe Chicken", price: 200 },
      { name: "Hot Wings", price: 180 },
    ],
    "Grand Hotel": [
      { name: "Hyderabadi Biryani", price: 300 },
      { name: "Chicken Kebab", price: 200 },
      { name: "Paneer Tikka", price: 250 },
      { name: "Chicken Tandoori", price: 270 },
    ],
    "Cafe Bahar since 1973": [
      { name: "Mutton Biryani", price: 320 },
      { name: "Chicken Biryani", price: 280 },
      { name: "Tandoori Chicken", price: 260 },
      { name: "Paneer Tandoori", price: 220 },
    ],
    "Mehfil": [
      { name: "Chicken Biryani", price: 280 },
      { name: "Mutton Kebab", price: 220 },
      { name: "Chicken Tikka", price: 240 },
      { name: "Veg Biryani", price: 250 },
    ],
    "HILLSTAR RESTAURANT": [
      { name: "Special Chicken Biryani", price: 300 },
      { name: "Chilli Chicken", price: 220 },
      { name: "Veg Fried Rice", price: 180 },
      { name: "Chicken Manchurian", price: 200 },
    ],
    "Imperial Multicuisine Restaurant": [
      { name: "Mutton Biryani", price: 350 },
      { name: "Chicken Biryani", price: 300 },
      { name: "Tandoori Roti", price: 40 },
      { name: "Paneer Butter Masala", price: 260 },
    ],
    "Dessert Bar": [
      { name: "Chocolate Cake", price: 200 },
      { name: "Red Velvet Cake", price: 220 },
      { name: "Lemon Cheesecake", price: 240 },
      { name: "Vanilla Cupcake", price: 120 },
    ],
    "Cake Heaven": [
      { name: "Black Forest Cake", price: 230 },
      { name: "Carrot Cake", price: 180 },
      { name: "Blueberry Cheesecake", price: 250 },
      { name: "Chocolate Fudge Cake", price: 260 },
    ],
    "The Cake Shop": [
      { name: "Fruit Cake", price: 250 },
      { name: "Chocolate Chip Cookie", price: 80 },
      { name: "Pineapple Upside-Down Cake", price: 180 },
      { name: "Almond Biscotti", price: 150 },
    ],
    "Sweet Treats": [
      { name: "Cheesecake", price: 240 },
      { name: "Custom Birthday Cake", price: 300 },
      { name: "Chocolate Eclair", price: 120 },
      { name: "Macarons", price: 200 },
    ],
    "Bake Delight": [
      { name: "Classic Chocolate Cake", price: 200 },
      { name: "Lemon Tart", price: 180 },
      { name: "Vanilla Pound Cake", price: 160 },
      { name: "Cinnamon Roll", price: 120 },
    ],
    "Noodle Nook": [
      { name: "Noodle Bowl", price: 160 },
      { name: "Chow Mein", price: 140 },
      { name: "Spring Rolls", price: 100 },
      { name: "Szechuan Noodles", price: 180 },
    ],
    "Wok Express": [
      { name: "Veg Wok", price: 150 },
      { name: "Chicken Wok", price: 200 },
      { name: "Noodle Salad", price: 130 },
      { name: "Fried Rice", price: 160 },
    ],
    "Dragon Bowl": [
      { name: "Beef Noodles", price: 220 },
      { name: "Shrimp Fried Noodles", price: 240 },
      { name: "Vegetable Noodles", price: 160 },
      { name: "Kung Pao Chicken", price: 210 },
    ],
    "Spice & Noodles": [
      { name: "Spicy Noodle Bowl", price: 190 },
      { name: "Chili Garlic Noodles", price: 200 },
      { name: "Lemon Pepper Noodles", price: 180 },
      { name: "Garlic Butter Noodles", price: 210 },
    ],
    "Golden Wok": [
      { name: "Stir-Fried Noodles", price: 170 },
      { name: "Wok-Fried Rice", price: 150 },
      { name: "Noodle Soup", price: 160 },
      { name: "Szechuan Fried Rice", price: 180 },
    ],
    "South India Delight": [
      { name: "Plain Dosa", price: 70 },
      { name: "Masala Dosa", price: 90 },
      { name: "Onion Dosa", price: 80 },
      { name: "Rawa Dosa", price: 100 },
    ],
    "Dosa Point": [
      { name: "Plain Dosa", price: 60 },
      { name: "Cheese Dosa", price: 100 },
      { name: "Paneer Dosa", price: 120 },
      { name: "Ghee Roast Dosa", price: 110 },
    ],
    "Dosa Hub": [
      { name: "Mini Dosa Platter", price: 150 },
      { name: "Set Dosa", price: 120 },
      { name: "Spring Onion Dosa", price: 90 },
      { name: "Tomato Dosa", price: 110 },
    ],
    "Golden Dosa": [
      { name: "Egg Dosa", price: 130 },
      { name: "Mysore Masala Dosa", price: 110 },
      { name: "Sambhar Dosa", price: 120 },
      { name: "Karam Dosa", price: 100 },
    ],
    "Spice & Dosa": [
      { name: "Spicy Masala Dosa", price: 140 },
      { name: "Pesarattu Dosa", price: 130 },
      { name: "Rawa Onion Dosa", price: 120 },
      { name: "Stuffed Dosa", price: 150 },
    ],
    "Coffee Corner": [
      { name: "Espresso", price: 150 },
      { name: "Latte", price: 180 },
      { name: "Cappuccino", price: 200 },
      { name: "Mocha", price: 210 },
    ],
    "Bean Bar": [
      { name: "Americano", price: 140 },
      { name: "Flat White", price: 160 },
      { name: "Cold Brew", price: 170 },
      { name: "Iced Coffee", price: 180 },
    ],
    "Brewed Bliss": [
      { name: "Vanilla Latte", price: 190 },
      { name: "Hazelnut Coffee", price: 200 },
      { name: "Irish Coffee", price: 220 },
      { name: "Affogato", price: 230 },
    ],
    "Café Aroma": [
      { name: "Caramel Macchiato", price: 210 },
      { name: "Chai Latte", price: 180 },
      { name: "Turmeric Latte", price: 190 },
      { name: "Espresso Con Panna", price: 200 },
    ],
    "The Espresso Room": [
      { name: "Ristretto", price: 160 },
      { name: "Café au Lait", price: 180 },
      { name: "Café Breve", price: 220 },
      { name: "Affogato al Caffè", price: 230 },
    ],  
    "South Indian Kitchen": [
    { name: "Idli", price: 70 },
    { name: "Sambar", price: 30 },
    { name: "Coconut Chutney", price: 20 },
    { name: "Tomato Chutney", price: 25 },
  ],
  "Idli Express": [
    { name: "Idli", price: 60 },
    { name: "Sambar", price: 30 },
    { name: "Coconut Chutney", price: 20 },
    { name: "Spicy Chutney", price: 25 },
  ],
  "Idli House": [
    { name: "Idli", price: 80 },
    { name: "Sambar", price: 35 },
    { name: "Coconut Chutney", price: 25 },
    { name: "Garlic Chutney", price: 30 },
  ],
  "Tiffin Center": [
    { name: "Idli", price: 70 },
    { name: "Sambar", price: 30 },
    { name: "Coconut Chutney", price: 20 },
    { name: "Tomato Chutney", price: 25 },
  ],
  "Fluffy Idli": [
    { name: "Idli", price: 75 },
    { name: "Sambar", price: 30 },
    { name: "Coconut Chutney", price: 20 },
    { name: "Chili Chutney", price: 25 },
  ],
  "Home Comforts": [
    { name: "Kichidi", price: 90 },
    { name: "Papad", price: 20 },
    { name: "Pickle", price: 15 },
    { name: "Curd", price: 30 },
  ],
  "Kichidi Junction": [
    { name: "Vegetable Kichidi", price: 85 },
    { name: "Moong Dal Kichidi", price: 80 },
    { name: "Lentil Kichidi", price: 75 },
    { name: "Masala Kichidi", price: 90 },
  ],
  "The Kichidi Pot": [
    { name: "Classic Kichidi", price: 95 },
    { name: "Jeera Kichidi", price: 85 },
    { name: "Ghee Kichidi", price: 100 },
    { name: "Kichidi with Fryums", price: 110 },
  ],
  "Kichidi Express": [
    { name: "Quick Kichidi", price: 70 },
    { name: "Healthy Kichidi", price: 75 },
    { name: "Spicy Kichidi", price: 80 },
    { name: "Mixed Vegetable Kichidi", price: 85 },
  ],
  "Spice & Lentil": [
    { name: "Spicy Lentil Kichidi", price: 90 },
    { name: "Masoor Kichidi", price: 80 },
    { name: "Paneer Kichidi", price: 95 },
    { name: "Spinach Kichidi", price: 85 },
  ],
  "Tibet Delight": [
    { name: "Steamed Veg Momos", price: 100 },
    { name: "Steamed Chicken Momos", price: 120 },
    { name: "Steamed Pork Momos", price: 130 },
    { name: "Momos with Spicy Sauce", price: 110 },
  ],
  "Momo Madness": [
    { name: "Paneer Momos", price: 90 },
    { name: "Veggie Mix Momos", price: 100 },
    { name: "Chicken Cheese Momos", price: 120 },
    { name: "Momos with Garlic Sauce", price: 110 },
  ],
  "Himalayan Bites": [
    { name: "Chicken Momos", price: 110 },
    { name: "Beef Momos", price: 130 },
    { name: "Veg Momos", price: 100 },
    { name: "Momos with Spicy Dip", price: 120 },
  ],
  "The Momo House": [
    { name: "Vegetable Momos", price: 80 },
    { name: "Chicken Momos", price: 110 },
    { name: "Pork Momos", price: 130 },
    { name: "Momos with Chutney", price: 100 },
  ],
  "Spice & Momo": [
    { name: "Spicy Chicken Momos", price: 120 },
    { name: "Spicy Veg Momos", price: 100 },
    { name: "Paneer Momos", price: 110 },
    { name: "Schezwan Momos", price: 130 },
  ],
  "Crunchy Treats": [
    { name: "Onion Pakoda", price: 70 },
    { name: "Potato Pakoda", price: 80 },
    { name: "Paneer Pakoda", price: 100 },
    { name: "Mixed Vegetable Pakoda", price: 90 },
  ],
  "Pakoda Palace": [
    { name: "Spinach Pakoda", price: 70 },
    { name: "Cauliflower Pakoda", price: 80 },
    { name: "Corn Pakoda", price: 90 },
    { name: "Paneer Pakoda", price: 100 },
  ],
  "Golden Bites": [
    { name: "Aloo Bonda", price: 60 },
    { name: "Vegetable Fritters", price: 75 },
    { name: "Chili Pakoda", price: 85 },
    { name: "Cheese Pakoda", price: 100 },
  ],
  "Spice & Crunch": [
    { name: "Spicy Onion Pakoda", price: 70 },
    { name: "Masala Pakoda", price: 80 },
    { name: "Spicy Paneer Pakoda", price: 90 },
    { name: "Mixed Vegetable Pakoda", price: 85 },
  ],
  "Street Pakoda": [
    { name: "Pav Bhaji Pakoda", price: 80 },
    { name: "Batata Vada", price: 70 },
    { name: "Bread Pakoda", price: 90 },
    { name: "Chutney Pakoda", price: 75 },
  ],
  "Fluffy Parotta": [
    { name: "Chicken Curry with Parotta", price: 220 },
    { name: "Vegetable Kurma with Parotta", price: 180 },
    { name: "Mutton Rogan Josh with Parotta", price: 250 },
    { name: "Egg Curry with Parotta", price: 200 },
  ],
  "Parotta House": [
    { name: "Plain Parotta", price: 50 },
    { name: "Egg Parotta", price: 70 },
    { name: "Chicken Parotta", price: 100 },
    { name: "Vegetable Parotta", price: 90 },
  ],
  "Crispy Layers": [
    { name: "Crispy Parotta with Salna", price: 80 },
    { name: "Layered Chicken Parotta", price: 120 },
    { name: "Paneer Parotta", price: 100 },
    { name: "Mutton Parotta", price: 150 },
  ],
  "South Spice Parotta": [
    { name: "Spicy Chicken Curry with Parotta", price: 240 },
    { name: "Fish Curry with Parotta", price: 200 },
    { name: "Dal Fry with Parotta", price: 130 },
    { name: "Sambar with Parotta", price: 70 },
  ],
  "Parotta Junction": [
    { name: "Parotta with Egg Curry", price: 150 },
    { name: "Spicy Chicken Gravy with Parotta", price: 220 },
    { name: "Vegetable Kurma with Parotta", price: 180 },
    { name: "Mutton Curry with Parotta", price: 250 },
  ],
  "Pav Paradise": [
    { name: "Classic Pav Bhaji", price: 150 },
    { name: "Extra Butter Pav Bhaji", price: 180 },
    { name: "Paneer Pav Bhaji", price: 200 },
    { name: "Spicy Pav Bhaji", price: 170 },
  ],
  "Street Bhaji": [
    { name: "Street-style Pav Bhaji", price: 140 },
    { name: "Spicy Pav Bhaji", price: 160 },
    { name: "Cheese Pav Bhaji", price: 190 },
    { name: "Maharaja Pav Bhaji", price: 220 },
  ],
  "Bhaji Junction": [
    { name: "Traditional Pav Bhaji", price: 160 },
    { name: "Vegetable Pav Bhaji", price: 150 },
    { name: "Masala Pav Bhaji", price: 180 },
    { name: "Pav with Chutney", price: 90 },
  ],
  "Spice & Pav": [
    { name: "Fusion Pav Bhaji", price: 170 },
    { name: "Tandoori Pav Bhaji", price: 200 },
    { name: "Methi Pav Bhaji", price: 190 },
    { name: "Schezwan Pav Bhaji", price: 210 },
  ],
  "Mumbai Magic": [
    { name: "Mumbai Pav Bhaji", price: 180 },
    { name: "Double Butter Pav Bhaji", price: 220 },
    { name: "Special Pav Bhaji", price: 210 },
    { name: "Pav with Papad", price: 100 },
  ],
  "Dadu's": [
    { name: "Sweets Platter", price: 150 },
    { name: "Chaat Combo", price: 120 },
    { name: "Bakery Snacks", price: 100 },
    { name: "Dessert Delight", price: 180 },
  ],
  "LunchBox - Meals and Thalis": [
    { name: "Biryani Meal", price: 250 },
    { name: "Punjabi Thali", price: 300 },
    { name: "Healthy Bowl", price: 220 },
    { name: "Dessert of the Day", price: 100 },
  ],
  "Taj Mahal-Abids": [
    { name: "South Indian Thali", price: 200 },
    { name: "North Indian Thali", price: 220 },
    { name: "Biryani Special", price: 280 },
    { name: "Snacks Platter", price: 150 },
  ],
  "Sri Narsing Bhelpuri & Pav Bhaji (Himayathnagar)": [
    { name: "Bhelpuri", price: 80 },
    { name: "Pav Bhaji", price: 100 },
    { name: "Chaat Sampler", price: 120 },
    { name: "Italian Pasta", price: 200 },
  ],
  "Agra Sweets Banjara": [
    { name: "Assorted Sweets", price: 180 },
    { name: "Dessert Combo", price: 150 },
    { name: "Chaat Delight", price: 90 },
    { name: "Refreshing Beverages", price: 100 },
  ],
  "Shake Shack": [
    { name: "Classic Milkshake", price: 120 },
    { name: "Vanilla Dream", price: 130 },
    { name: "Chocolate Overload", price: 140 },
    { name: "Strawberry Bliss", price: 130 },
  ],
  "Frosty Shakes": [
    { name: "Mango Shake", price: 110 },
    { name: "Vanilla Shake", price: 100 },
    { name: "Mixed Berry Shake", price: 120 },
    { name: "Cookies & Cream", price: 150 },
  ],
  "Milkshake Heaven": [
    { name: "Oreo Shake", price: 140 },
    { name: "Banana Split Shake", price: 150 },
    { name: "Peanut Butter Shake", price: 160 },
    { name: "Tropical Shake", price: 130 },
  ],
  "Shake It Up": [
    { name: "Build Your Own Shake", price: 120 },
    { name: "Nutella Shake", price: 140 },
    { name: "Salted Caramel Shake", price: 150 },
    { name: "Mint Chocolate Chip", price: 130 },
  ],
  "Choco Delight": [
    { name: "Chocolate Classic", price: 130 },
    { name: "Mocha Shake", price: 140 },
    { name: "Chocolate Fudge", price: 150 },
    { name: "Chocolate Chip Cookie Shake", price: 160 },
  ],
  "Shawarma King": [
    { name: "Classic Chicken Shawarma", price: 150 },
    { name: "Beef Shawarma", price: 170 },
    { name: "Spicy Chicken Shawarma", price: 160 },
    { name: "Veg Shawarma", price: 140 },
  ],
  "Wrap World": [
    { name: "Grilled Chicken Wrap", price: 180 },
    { name: "Lamb Shawarma Wrap", price: 200 },
    { name: "Falafel Wrap", price: 150 },
    { name: "Pita Shawarma", price: 170 },
  ],
  "Shawarma Palace": [
    { name: "Mixed Meat Shawarma", price: 190 },
    { name: "Chicken Shawarma", price: 160 },
    { name: "Garlic Sauce Shawarma", price: 175 },
    { name: "Beef Shawarma Wrap", price: 180 },
  ],
  "The Shawarma Spot": [
    { name: "Shawarma with Fries", price: 150 },
    { name: "Grilled Shawarma Wrap", price: 170 },
    { name: "Chicken & Veg Shawarma", price: 160 },
    { name: "Shawarma Plate", price: 180 },
  ],
  "Middle Eastern Delights": [
    { name: "Classic Middle Eastern Shawarma", price: 160 },
    { name: "Spicy Shawarma", price: 170 },
    { name: "Veggie Shawarma", price: 150 },
    { name: "Garlic Chicken Shawarma", price: 180 },
  ],
  "Tea Time": [
    { name: "Masala Chai", price: 50 },
    { name: "Earl Grey Tea", price: 60 },
    { name: "Lemon Ginger Tea", price: 55 },
    { name: "Iced Tea", price: 70 }
  ],
  "Herbal Tea House": [
    { name: "Chamomile Tea", price: 65 },
    { name: "Peppermint Tea", price: 70 },
    { name: "Lemongrass Tea", price: 60 },
    { name: "Rooibos Tea", price: 75 }
  ],
  "Chai Express": [
    { name: "Classic Indian Chai", price: 40 },
    { name: "Adrak Chai", price: 50 },
    { name: "Kashmiri Chai", price: 70 },
    { name: "Iced Masala Chai", price: 65 }
  ],
  "Green Leaf": [
    { name: "Jasmine Green Tea", price: 60 },
    { name: "Mint Green Tea", price: 55 },
    { name: "Lemon Green Tea", price: 65 },
    { name: "Sencha Green Tea", price: 70 }
  ],
  "The Tea Garden": [
    { name: "Darjeeling Tea", price: 80 },
    { name: "Assam Tea", price: 70 },
    { name: "Fruit Infused Tea", price: 75 },
    { name: "Herbal Blends", price: 85 }
  ],
  "Uttapam Hub": [
    { name: "Classic Uttapam", price: 80 },
    { name: "Vegetable Uttapam", price: 90 },
    { name: "Cheese Uttapam", price: 100 },
    { name: "Onion Uttapam", price: 85 }
  ],
  "Uttapam Point": [
    { name: "Plain Uttapam", price: 70 },
    { name: "Tomato Uttapam", price: 95 },
    { name: "Paneer Uttapam", price: 110 },
    { name: "Mixed Veg Uttapam", price: 90 }
  ],
  "Tasty Utappam": [
    { name: "Spicy Uttapam", price: 95 },
    { name: "Corn Uttapam", price: 90 },
    { name: "Herb Uttapam", price: 100 },
    { name: "Mushroom Uttapam", price: 110 }
  ],
  "South Indian Eats": [
    { name: "Masala Uttapam", price: 85 },
    { name: "Chili Uttapam", price: 95 },
    { name: "Schezwan Uttapam", price: 110 },
    { name: "Rawa Uttapam", price: 90 }
  ],
  "The Utappam Place": [
    { name: "Seasonal Veg Uttapam", price: 90 },
    { name: "Egg Uttapam", price: 100 },
    { name: "Paneer Tikka Uttapam", price: 115 },
    { name: "Dosa Uttapam", price: 95 }
  ],
  "Vada Corner": [
    { name: "Plain Vada", price: 50 },
    { name: "Medu Vada", price: 60 },
    { name: "Sambar Vada", price: 70 },
    { name: "Masala Vada", price: 65 }
  ],
  "Vada House": [
    { name: "Onion Vada", price: 55 },
    { name: "Aloo Vada", price: 65 },
    { name: "Cheese Vada", price: 75 },
    { name: "Spinach Vada", price: 70 }
  ],
  "Vada Express": [
    { name: "Pav Vada", price: 70 },
    { name: "Dahi Vada", price: 75 },
    { name: "Rawa Vada", price: 60 },
    { name: "Vada Pav Combo", price: 80 }
  ],
  "Spicy Vada": [
    { name: "Chili Vada", price: 65 },
    { name: "Pepper Vada", price: 70 },
    { name: "Garlic Vada", price: 75 },
    { name: "Mixed Vada", price: 80 }
  ],
  "Vada Station": [
    { name: "Stuffed Vada", price: 75 },
    { name: "Crispy Vada", price: 70 },
    { name: "Pudina Vada", price: 60 },
    { name: "Vada with Chutney", price: 65 }
  ]

};

const RestaurantDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const { name } = useParams<{ name: string }>();

  const restaurant = restaurants.find((r) => r.name === name) as Restaurant;

  if (!restaurant) {
    return <div>Restaurant not found!</div>;
  }

  
  const menuItems = restaurantMenus[restaurant.name] as MenuItem[];

  const restaurantWithMenu: RestaurantWithMenu = {
    ...restaurant,
    menu: menuItems,
  };

  const addToCart = (item: MenuItem) => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cartItems.find((cartItem: CartItem) => cartItem.name === item.name);
    
    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      cartItems.push({ ...item, quantity: 1 }); 
    }
    
    localStorage.setItem('cart', JSON.stringify(cartItems)); 
  };

  return (
    <div className="ml-[120px] mt-[100px] mr-[120px]">
      <h1 className="text-2xl font-bold">{restaurantWithMenu.name}</h1>
      <img src={restaurantWithMenu.image} alt={restaurantWithMenu.name} className="h-40 w-full object-cover rounded-md mb-4" />
      <p className="text-gray-500">{restaurant.getRestaurantInfo()}</p>
      <p className="mt-2">{restaurant.description}</p>

      <h2 className="text-xl font-semibold mt-4">Menu</h2>
      <ul>
    {restaurantWithMenu.menu.map((item, index) => (
      <li key={index} className="flex justify-between items-center mt-4 p-2 border-b border-gray-200">
        <div className="flex flex-col">
          <span className=" text-xl font-bold">{item.name}</span>
          <span className="text-gray-500 text-xl">₹{item.price}</span>
          <p className="text-gray-400 text-lg mt-1  text-1xl">Delicious {item.name} made fresh daily.</p> 
        </div>
        <div className="flex flex-col items-center">
          <img 
            src={restaurantWithMenu.image} 
            alt={item.name} 
            className="h-[150px] w-[150px] object-cover rounded-md mr-4 mb-3" 
          />
          <button className=" font-bold text-green-500 border  py-2 px-6 rounded-md pl-10 pr-10" onClick={() => addToCart(item)}>
  Add
</button>
        </div>
      </li>
    ))}
  </ul>
    </div>
  );
};

export default RestaurantDetail;
