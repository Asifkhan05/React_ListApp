import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function List({item,click,dele}) {
  return (
    <li className="item" >
         <input type="checkbox"
         checked={item.checked}
         onChange={()=>click(item.id)} />
         <label 
         style={(item.checked === true)?{textDecoration:"line-through"}:null}
          onClick={()=>click(item.id)} >
          {item.item}
         </label>
         <FaTrashAlt role="button" onClick={()=>dele(item.id)} />
        </li>
  )
}

export default List