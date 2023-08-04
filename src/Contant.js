import React from "react";
import ItemList from "./ItemList";



function Contant ({items,click,dele}){

  return(
    <main>
      {(items.length)?(<ItemList  items={items}
    click={click}
    dele={dele}/>)
      :(<h2 style={{textAlign:"center"}}>not found list</h2>)}
    </main>
  )
}

export default Contant
