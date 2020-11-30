import React, {useState} from 'react';
import Home from './Components/Home/Home';
import Scene1 from './Components/Scene1/Scene1';
import Scene2 from './Components/Scene2/Scene2';
import Scene3 from './Components/Scene3/Scene3';
import Credits from './Components/Credits/Credits';
import './App.css';


function App() {

  const handleEmpezar = () => {
    setShowHome(false);
    setShowScene1(true);
    localStorage.setItem('userName', name);
    setTimeout(() => { localStorage.removeItem('userName') }, 1800000);    
  }

  
  const handleEntrar = () => {
    setShowScene1(false);
    setShowScene2(true);
  }
  

  
  const [name, setName] = useState("");

  const [showHome, setShowHome] = useState(true);
  const [showScene1, setShowScene1] = useState(false);
  const [showScene2, setShowScene2] = useState(false);
  const [showScene3, setShowScene3] = useState(false);
  const [showCredits, setShowCredits] = useState(false);


  return (
    <div className="App">
      {showHome && 
        <Home 
          handleEmpezar={handleEmpezar} 
          name={name} 
          handleInputChange={(e)=>setName(e.target.value)} 
        />
      }
      {showScene1 && 
        <Scene1 
          handleEntrar={handleEntrar} 
        />
      }
      {showScene2 && <Scene2/>}
      {showScene3 && <Scene3/>}
      {showCredits && <Credits/>}
    </div>
  );
}

export default App;