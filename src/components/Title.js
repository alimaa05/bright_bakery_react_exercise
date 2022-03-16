import {useState} from 'react';

const Title = () => {

    const [status, setStatus] = useState("open");

    const handleClick = () => {
        if (status === "open"){
            setStatus("closed");
        } else {
            setStatus("open");
        }
        // ternary operator - conditional rendering 
        // like an else if statemnet  
        // if this is true   ? then do this        : if not do this 
        // status === "open" ? setStatus("closed") : setStatus("open");

    }
    
    return (
// use the inbuilt eventListener for button i.e. 'onClick' and then perform the function 'handleClick'
        <>
            <h1>The Bright Bakery</h1>
            <p>est 2022</p>
            <h4 className="red">The bakery is now {status}!</h4>
            <button onClick= {handleClick}>Open/Closed</button>
            <br/>
        </>
    )

}

export default Title;