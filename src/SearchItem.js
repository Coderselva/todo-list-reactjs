import React from "react";

const SearchItem = ({search,setSearch}) =>{
    return(
        <form className="Search" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="Search">Search</label>
            <input
                id = 'Search'
                type="text"
                role='searchbox'
                placeholder="Search Items"
                value = {search}
                onChange={(e)=> setSearch(e.target.value)}

            
            />
            
        </form>

    )
}


export default SearchItem


