import React, { useState } from "react";
import ProductItem from "./components/ProductItem";
import OrderSummary from "./components/OrderSummary";

const initialProducts = [
  {
    id: 1,
    name: "MID GREY SHARKSKIN SUIT",
    price: 1930,
    size: 48,
    color: "GRAY",
    image: "https://tse2.mm.bing.net/th?id=OIP.2uKT4gWYDIA3CjWGyn42nQHaHa&pid=Api&P=0&h=180",
    quantity: 3,
  },
  {
    id: 2,
    name: "BROWN PRINCE OF WALES LINEN SPORT COAT",
    price: 1455,
    size: 52,
    color: "BROWN",
    image: "https://tse2.mm.bing.net/th?id=OIP.AWu3zOZacuVod09Cop_3DwHaJQ&pid=Api&P=0&h=180",
    quantity: 2,
  },
];

const ShoppingBag = () => {
  const [cart, setCart] = useState(initialProducts);

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };


  const updateImage = (id, newImageUrl) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, image: newImageUrl } : item
      )
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = "FREE";
  const postage = 20;
  const total = subtotal + (shipping === "FREE" ? 0 : postage);

  return (
    <div className="shopping-bag">
      <h1>SHOPPING BAG</h1>
      <div className="shopping-content">
        <div className="product-list">
          {cart.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              updateQuantity={updateQuantity}
              updateImage={updateImage}
            />
          ))}
        </div>
        <OrderSummary subtotal={subtotal} shipping={shipping} postage={postage} total={total} />
      </div>
    </div>
  );
};

export default ShoppingBag;
