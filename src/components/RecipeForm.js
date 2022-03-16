// controlled component (form)

import {useState} from 'react';

const RecipeForm = ({handleCakeSubmit}) => {

    // setting all the states at empty at the start 
    const [cakeName, setcakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState("");

    // create onchange event handlers 
    // whatever the value we enter - set it as our state 
    const handleCakeNameChange = (event) => {
        setcakeName(event.target.value);
    }

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

 // form submit handler 
// preventDefault - stops refreshing the page 
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(!cakeName || !ingredients || !rating){
            return 
        }

        // what we are calling the addCake function 
        // this is are new cake that has been added 
        handleCakeSubmit({
            cakeName: cakeName,
            ingredients:[ingredients],
            rating: rating
        })

        //reset all input states 
        setcakeName("");
        setIngredients("");
        setRating("");
    }


    // creating our form
    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="cakeName">Cake name:</label>
                <input type="text" 
                id="cakename" 
                name="cakename" 
                value={cakeName} 
                onChange={handleCakeNameChange}/>

                <label htmlFor="ingredients">Ingredients:</label>
                <input type="text" 
                id="ingredients" 
                name="ingredients" 
                value={ingredients}
                onChange={handleIngredientsChange}/>

                <label htmlFor="rating">Rating:</label>
                <input type="text" 
                id="rating" 
                name="rating" 
                value={rating}
                onChange={handleRatingChange}/>

                <input type="submit" 
                value="Post"/>
            </form>
        </>
    )
}   

export default RecipeForm;