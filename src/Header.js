import React from "react";


function Header ({title}){

  return(
    <header>
     <h1>{title}</h1>
      </header>
  )
}
Header.defaultProps = {title:"Let to do"}



export default Header