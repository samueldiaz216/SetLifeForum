import React from "react";

function SearchDiv(){

    
    return(
        <div className="search-div">
            <form>
                <input className="form-control" placeholder="SEARCH">

                </input>
                <button type="button" class="btn btn-primary">Create New</button>
            </form>

            <h5>TAGS</h5>
            <button className="btn tag"type="button">ALL</button>
            <button className="btn tag"type="button">ACCESSORIES</button>
            <button className="btn tag"type="button">TOPS</button>
            <button className="btn tag"type="button">BOTTOMS</button>
            <button className="btn tag"type="button">ASSISTANT</button>
        </div>
    )
}

export default SearchDiv;