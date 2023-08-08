import Header from "./Header"
import Contant from "./Contant"
import Footer from "./Footer"
import { useState,useEffect } from "react"
import Additem from "./Additem"
import Search from "./Search"
import Jadd from "./Jadd"
function App(){
 
  
 let API_URL ="http://localhost:3500/items"
    let [items,reItem]=useState([])

   let [newItem,reNewItem]=useState("")
   let[search,newSearch]=useState("")
   let [error,reError]=useState(null)
   let[load,reLoad] =useState(true)

   useEffect(()=>{
  let fetchData=async()=>{
    try{
      let responce = await fetch(API_URL)
      if(!responce.ok) throw Error("Data not found")
      let lisd =await responce.json()
      reItem(lisd)
      reError(null)

    }catch(err){
      reError(err.message)
    }finally{
      reLoad(false)
    }
  }
  setTimeout(()=>{
   fetchData()
   },2000)
  },[])
  
   const addId=async (item)=>{
    let id = items.length ? items[items.length - 1].id + 1 : 1;
    let newlist ={id,checked:false,item}
    let listz = [...items,newlist]
    reItem(listz)
    
    
    let host = {
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newlist)
    }
    let result = await Jadd(API_URL,host)
    if(result) reError(result)
    

   }
   let inp =(e)=>{
     e.preventDefault()
     if (!newItem) return
     addId(newItem)
     reNewItem ("")
   }
   
    let click =async  (id)=>{
      let listx = items.map((item)=>
        (item.id === id ? {...item,checked:!item.checked}:item)
        
      )
    reItem(listx)
   let update = listx.filter((item)=>item.id ===id)

    let hosts = {
      method:"PATCH",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:update[0].checked})
    }
    let res = `${API_URL}/${id}`
    let result = await Jadd(res,hosts)
    if(result) reError(result)
 
    }
    let dele=async (id)=>{
      let listy = items.filter((item)=>(
        item.id !== id
      ))
      reItem(listy)

      let hostss = {
        method:"DELETE",
       
      }
      let res = `${API_URL}/${id}`
      let result = await Jadd(res,hostss)
      if(result) reError(result)
   
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
    <main>
    {error && <p>{`Error:${error}`}</p>}
    {load && <p>Loading items....</p>}

   {!error && !load &&  <Contant items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
    click={click}
    dele={dele}/>}
    </main>
    <Footer
    length={items.length}/>
 </div>)
}

export default App 