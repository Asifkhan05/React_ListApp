import { FaPlus } from "react-icons/fa";

function Additem({newItem,reNewItem,inp}){

   return(
      <form className="addForm" onSubmit={inp} >
         <label htmlFor="addItem">Add Item</label>
         <input type="text"
         autoFocus
         placeholder="Add Item"
         required
         value={newItem}
         onChange={(e)=>reNewItem(e.target.value)} />
         
         <button type="submit"
         >
         <FaPlus />
         </button>
         
      </form>
   )
}
export default Additem