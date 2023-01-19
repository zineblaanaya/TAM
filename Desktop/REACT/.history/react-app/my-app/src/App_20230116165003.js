import logo from './logo.svg';
import './App.css';

const myself= {
  Fisrtname: "zineb",
  Lastname : "Laanaya"
}



function capitalize(str){
  return str[0].toUpperCase()+str.slice(1).toLowerCase()

}

function App(Name) {
  return (

    <div className="App">
    <h2>You are :{capitalize(myself.Fisrtname) (myself.astname)}</h2> 
    </div>
  );
}

export default App;
