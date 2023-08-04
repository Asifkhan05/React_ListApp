

function search({search,newSerch}) {
  return (
    <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input type="text"
        id="search"
        role="searchbox"
        placeholder="Search Items" 
        value={search}
        onChange={(e)=>newSerch(e.target.value)}/>
    </form>
  )
}

export default search