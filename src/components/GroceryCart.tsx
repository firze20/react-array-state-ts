import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "../models/storeItem";

export default function GroceryCart() {
  // declare and initialize state
  const [cart, setCart] = useState<string[]>([]);

  const addItem = (item: string): void => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  const removeItem = (targetIndex: number): void => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={(e) => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
