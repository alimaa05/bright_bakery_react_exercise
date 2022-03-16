
const Recipe = ({cake}) => {
    
    
    
    return (
    <div>
        <h3>{cake.cakeName}</h3>
        <p>Ingredients:</p>
        <ul>
            {cake.ingredients.map((ingredients, index)=> {
                return(
                    <li key={index}>{ingredients.name}</li>
                )

            })}
        </ul>
        <h6>Rating: {cake.rating}</h6>
    </div>
    );
}





export default Recipe;