import React, { useState, useEffect } from "react";
import Kotakcart from "../components/KotakCart";
import qrcode from "../assets/qrcode.png";

function Cart({ isAuthenticated }) {
  const [items, setItems] = useState([{ id: 0, price: 1000 }]);
  const [totalPrice, setTotalPrice] = useState(1000);
  const [showImage, setShowImage] = useState(false);

  const handlePriceChange = (id, newPrice) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, price: newPrice } : item
      );
      const newTotalPrice = updatedItems.reduce(
        (acc, item) => acc + item.price,
        0
      );
      setTotalPrice(newTotalPrice);
      return updatedItems;
    });
  };

  const handleDelete = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      const newTotalPrice = updatedItems.reduce(
        (acc, item) => acc + item.price,
        0
      );
      setTotalPrice(newTotalPrice);
      return updatedItems;
    });
  };

  const addItem = () => {
    const newItem = { id: items.length, price: 1000 };
    setItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      const newTotalPrice = updatedItems.reduce(
        (acc, item) => acc + item.price,
        0
      );
      setTotalPrice(newTotalPrice);
      return updatedItems;
    });
  };

  const handleCheckout = () => {
    setShowImage(true);
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex flex-col h-full items-center">
        <div className="w-full mx-8">
          {items.map((item) => (
            <div key={item.id}>
              <Kotakcart
                id={item.id}
                onPriceChange={handlePriceChange}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-evenly">
          <div className="">
            <div>Total Harga: {totalPrice}</div>
          </div>
          <div>
            <button onClick={addItem}>add item</button>
            <button
              onClick={handleCheckout}
              className={`btn-checkout ${isAuthenticated ? "" : "disabled"}`}
              disabled={!isAuthenticated}
            >
              checkout
            </button>
          </div>
          {showImage && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <img src={qrcode} alt="Checkout" height={200} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
