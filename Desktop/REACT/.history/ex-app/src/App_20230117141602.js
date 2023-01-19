import logo from './logo.svg';
import './App.css';
import button from 'components/button';



function App() {
  return(
    <div className = "App">
      <StudentCard name="Mat" week={8} info={{ city: 'MIA', course: 'DATA' }} />
      <StudentCard name="Eva" week={7} info={{ city: 'BCN', course: 'WEB' }} />
      
    </div>
);
   
}




export default button;
