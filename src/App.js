import './App.css';
import {useState, useEffect} from 'react';
import Title from './components/Title';
import Search from './components/Search';
import NavBar from './components/NavBar';
import RecipeForm from './components/RecipeForm';
import RecipeContainer from './containers/RecipeContainer';

function App() {

// useState is a hook
// creates a local database contains a value and function 
// it allows us to refer to the data or its properties which we want to track throughout our application 

// cake is state -  call it to get access to the database 
// state is only accessible to wherever you initialise it 
// need to pass it through as a prop (property) through to another component - giving you access to that database
// function is setCakes 
// can now pass down the state to other bits in our app 

// the function is used throughout our js to make changes to our value 'cakes'
  const [cakes, setCakes] = useState([])

// can make a fetch request to get the database info
  useEffect(() => {
      fetch("http://localhost:8080/cakes")
      .then(response => response.json())
      .then(data => setCakes(data))
  }, [])

  // destructuing - can put all the elements in original array and storing it new variable 
  // 'submittedCake
  // spread operator ... e.g. ...cakes -- grabbing the whole array and putting it all inside the updatedCakes function 
  //
  // setCakes - used to update the state - in this case we are updating it with the new array 'updatedCakes'
    const addCake = (submittedCake) => {

      const updatedCakes = [...cakes, submittedCake]
      setCakes(updatedCakes);
  }



  // invoking 'handleCakeSubmit' prop and setting it the function of 'addCake'
// cakes={cake} - cakes at the start before = is the prop - within the {} is the state we are passing through 
// conditional rendering 
// everything between the ? and : means if its true -- if its not true then do whats after the :
  return (
    <>
      <Title />
      <Search />
      <NavBar />
      <RecipeForm handleCakeSubmit={(cake) => addCake(cake)}/> 
      { cakes ? <RecipeContainer cakes={cakes} /> : <p>Loading cakes...</p>} 
    </>
  );
}

export default App;
