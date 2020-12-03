import React, {useEffect} from 'react';
import logo from '../../Images/logo-color-01.png';
import './style.css';


function Home(props){

    const {handleEmpezar, handleInputChange, name} = props;


    useEffect(() => {

        var input = document.getElementById("name");

        input?.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("jugar-button").click();
            }
            });

    }, [])
   


    return(

        <div className="home" >
            <img src={logo} alt="logo" />
            <label htmlFor="name">Ingresá tu nombre</label>
            <input id="name" type="text" value={name} onChange={handleInputChange} autoComplete="off"/>
            {name && <button id="jugar-button" onClick={handleEmpezar} >Jugar</button>}
        </div>

    )
}

export default Home;