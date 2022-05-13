
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[nayoks,setNakoys] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setNakoys(data))

  },[])

//const nayoks = [{name:"Sakib Khan" ,des:59},{name:"Rajib Khan",des:34},{name:"Manna Khan",des:646},{name : "Banna Khan",des:57},{name:"Tanna Khan",des:534}]


  return (
    <div className="App">

      <MovieCounter></MovieCounter>
     
        {
          nayoks.map(nk => <Nayoks name={nk.name} email={nk.email} username={nk.username} addr={nk.address.city}></Nayoks>)
        }
      <header className="App-header">
       <h1>Recap React Old Project</h1>
      </header>
    
    </div>
  );
}

function Nayoks (props){

  const nayokStyle = {
    border:"2px solid yellow",
    margin:"10px"
  }

  return (
    <div style={nayokStyle}>
      <h2>Ami Nayok - {props.name}</h2>
      <h3>Total Email {props.email} Movie</h3>
      <p> User  {props.username}</p>
      <p>City {props.addr}</p>
    </div>
  )
}

function MovieCounter(){
  const [count,setCount] = useState(0)
  
  return(
    <div>
      <button onClick={() => setCount(count+1)}>Add Move</button>
      <h4>Movie List : {count}</h4>
      <MovieDisplay movie={count}></MovieDisplay>
      <MovieDisplay movie={count+10}></MovieDisplay>
      <MovieDisplay movie={count+20}></MovieDisplay>
      <MovieDisplay movie={count+30}></MovieDisplay>
      <MovieDisplay movie={count+40}></MovieDisplay>
      <MovieDisplay movie={count+50}></MovieDisplay>
     
    </div>
  )
}
function MovieDisplay(props){
  return <h4>Total Movie Display : {props.movie} </h4>
}


export default App;
