import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'ReactPlayer';

const myself = {
  firstname:'Zineb',
  lastname: 'Laanaya'
}

function capitalize(str){
  return str[0].toUpperCase()+str.slice(1).toLowerCase()
}

function App() {

  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>You are : {capitalize(myself.firstname)} {capitalize(myself.lastname)}</h2>
      <img src={logo} alt="img_react"/>
    </div>
  );
}

export default App;


