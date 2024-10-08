import React from "react";

type Offer = {
  id: number;
  title: string;
  description: string;
  expiry: string;
  restaurant: string;
};

const OffersPage: React.FC = () => {
  const offers: Offer[] = [
    {
      id: 1,
      title: "50% Off on All Pizzas!",
      description: "Get half price on all pizza orders over the weekend!",
      expiry: "Expires: October 31, 2024",
      restaurant: "Pizza Hut",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free Burger",
      description: "Buy any burger and get another one free!",
      expiry: "Expires: November 15, 2024",
      restaurant: "Burger King",
    },
    {
      id: 3,
      title: "25% Off on Desserts",
      description: "Get a sweet 25% discount on all desserts.",
      expiry: "Expires: December 5, 2024",
      restaurant: "Dessert Bar",
    },
  ];

  return (
    <section className="ml-[120px] mt-[120px] mr-[120px]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Latest Offers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="border p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{offer.title}</h2>
              <p className="text-lg mb-2">{offer.description}</p>
              <p className="text-gray-500 mb-2">{offer.expiry}</p>
              <p className="text-sm text-gray-600">Restaurant: {offer.restaurant}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersPage;
