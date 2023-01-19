import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player/lazy'

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
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls = />
    </div>
  );
}

export default App;


