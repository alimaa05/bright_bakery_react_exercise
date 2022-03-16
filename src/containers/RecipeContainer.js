import {useState} from 'react';
import Recipe from '../components/Recipe';

// passing in the state as a prop within RecipteContainer
const RecipeContainer = ({cakes}) => {
    
    const cakeList = cakes.map((cake, index) => {
        return (
            <Recipe cake={cake} 
                key={index}/>
        )
    })

        
    return(
        <>
        {cakeList}
        </>
        
    )
}


export default RecipeContainer;