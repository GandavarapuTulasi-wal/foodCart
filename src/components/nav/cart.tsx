import React, { useEffect, useState } from 'react';

interface MenuItem {
  name: string;
  price: number;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartItems);
  }, []);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalPrice);
  }, [cart]);

  const removeFromCart = (itemToRemove: CartItem) => {
    const updatedCart = cart.filter(item => item.name !== itemToRemove.name);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  return (
    <div className="ml-[120px] mt-[120px] mr-[120px]">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <p className="font-bold mr-4">₹{item.price * item.quantity}</p>
                  <button 
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                    onClick={() => removeFromCart(item)} 
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </div>
        )}
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
