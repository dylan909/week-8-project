import React, { useEffect, useState } from 'react'
import './App.css';

const App = ()  =>  {  


  // Creating a state to store data from API
  // API returns an object, thus state should store object
  const [userData,setUserData] = useState({})

  // runs getData() only once when page is loaded due to the empty [] brackets
  useEffect(()=>{
    getData()
  },[])

  // getting data from server
  const getData = async () =>{
  
    const response = await fetch("http://localhost:4000/user/myProfile", {
      method: "GET", // HTTP Verb
      headers: {"Content-Type": "application/json"}, // Instructions for content
    })

    const body = await response.json()

    console.log(body)

    //Storing the API response in the state variable
    //Now we can reference the data through userData.
    setUserData(body)
  }

  

    
  return (
    <div>
         <h1>My name is: {userData.name}</h1>
         <p>{userData.biography}</p>
         <o>My email is: {userData.email}</o>
         <p>I have: {userData.followers} followers</p>
    </div>
   

  //  <div className="App">
  //     <div className='something' style={{top: '-18%', right: '0'}}></div>
  //     <div className='something' style={{top: '36%', left: '-8rem'}}></div>
  //     <Home/>
  //   </div>

  );

} 



export default App;
