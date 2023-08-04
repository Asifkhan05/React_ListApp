import Header from "./Header"
import Contant from "./Contant"
import Footer from "./Footer"
import { useState } from "react"
import Additem from "./Additem"
import Search from "./Search"
function App(){


    let [items,reItem]=useState(JSON.parse(localStorage.getItem("tolist")))

   let [newItem,reNewItem]=useState("")
   let[search,newSearch]=useState("")

   const addId=(item)=>{
    let id = items.length ? items[items.length - 1].id + 1 : 1;
    let newlist ={id,checked:false,item}
    let listz = [...items,newlist]
    reItem(listz)
    localStorage.setItem("tolist",JSON.stringify(listz))
    
   }
   let inp =(e)=>{
     e.preventDefault()
     console.log(newItem);
     if (!newItem) return
     addId(newItem)
     reNewItem ("")
   }
   
    function click (id){
      let listx = items.map((item)=>
        (item.id === id ? {...item,checked:!item.checked}:item)
        
      )
    reItem(listx)
    localStorage.setItem("tolist",JSON.stringify(listx))
    }
    function dele (id){
      let listy = items.filter((item)=>(
        item.id !== id
      ))
      reItem(listy)
      localStorage.setItem("tolist",JSON.stringify(listy))
    }
    
   
 return (
  <div className="App">
    <Header />
    <Additem 
    newItem ={newItem}
    reNewItem={reNewItem}
    inp = {inp}/>
    <Search 
    search={search}
    newSerch={newSearch} />
    <Contant items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
    click={click}
    dele={dele}/>
    
    <Footer
    length={items.length}/>
 </div>)
}

export default App 