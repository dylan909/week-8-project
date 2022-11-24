
import './App.css';

async function App() {
  const response = await fetch("http://4000:user/myProfile", {
    method: "GET", // HTTP Verb
    headers: {"Content-Type": "application/json"}, // Instructions for content
});
  return (
    <h1>{response}</h1>

  //  <div className="App">
  //     <div className='something' style={{top: '-18%', right: '0'}}></div>
  //     <div className='something' style={{top: '36%', left: '-8rem'}}></div>
  //     <Home/>
  //   </div>

  );

}

export default App;
