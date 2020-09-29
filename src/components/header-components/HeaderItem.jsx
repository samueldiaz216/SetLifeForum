import React from "react";

function HeaderItem(props){
    return(
        <li className="nav-item">
          <a className="nav-link active header-item" href="#">{props.text}</a>
        </li>
    )
}

export default HeaderItem;