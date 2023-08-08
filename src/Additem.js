import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
function Additem({newItem,reNewItem,inp}){
const inps = useRef()
   return(
      <form className="addForm" onSubmit={inp} >
         <label htmlFor="addItem">Add Item</label>
         <input type="text"
         autoFocus
         ref={inps}
         placeholder="Add Item"
         required
         value={newItem}
         onChange={(e)=>reNewItem(e.target.value)} />
         
         <button type="submit"
         onClick={()=>inps.current.focus()}
         >
         <FaPlus />
         </button>
         
      </form>
   )
}
export default Additem