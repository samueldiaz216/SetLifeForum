import React from "react";
import Logo from "./header-components/Logo"
import HeaderItem from "./header-components/HeaderItem"

function Header(){
    return(
        <div>
      
        <ul class="nav">
        <Logo/>
        <div class=" nav justify-content-end">
        <HeaderItem
            text="Dashboard"
        />
        <HeaderItem
            text="Projects"
        />
        <HeaderItem
            text="Forum"
        />
        <HeaderItem
            text="Database"
        />
        <HeaderItem
            text="Search"
        />
        </div>
        
      </ul></div>
    )
    
}

export default Header;