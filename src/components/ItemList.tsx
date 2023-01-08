import React from "react";

//props

import {ItemListProps} from './ItemListProps';

export default function ItemList({ items, onItemClick }: ItemListProps)  {

  const handleClick = (event: React.MouseEvent): void => {
    const item = (event.target as HTMLButtonElement).value;
    onItemClick(item);
  };
  return (
    <div>
      {items.map((item: string, index: number) => (
        <button value={item} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}
