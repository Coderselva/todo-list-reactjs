import React from 'react'
import ItemList from './ItemList'



const Content = ({items,handleCheck,deleteItems}) => {

    
    return(
        <main>
            {(items.length) ? (

            <ItemList
                items={items}
                handleCheck={handleCheck}
                deleteItems={deleteItems}
             />


            ):

           

            (<p>empty list</p>)
            
            
            }
        
        </main>
    )
}


export default Content