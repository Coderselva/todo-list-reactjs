import React from "react";
import LineItem from "./LineItem";


const ItemList = ({items,handleCheck,deleteItems}) =>{
   
   
    return(

        <ul>
                {items.map((item) => (

                    <LineItem
                    
                    item={item}
                    key={item.id}
                    handleCheck={handleCheck}
                    deleteItems={deleteItems}
                    
                    
                    />                       
                ))}
            </ul>

        
    )
}


export default ItemList