import React from "react";
import List from "./List";

function ItemList({items,click,dele}) {
    
  return (
    <ul> {items.map((item)=>
       <List item={item}
       key={item.id}
       click={click}
    dele={dele} />
      )}</ul>
      
      
  )
}

export default ItemList