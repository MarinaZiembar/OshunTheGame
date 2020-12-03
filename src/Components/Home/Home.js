import React from 'react';
import logo from '../../Images/logo-color-01.png';
import './style.css';


function Home(props){

    const {handleEmpezar, handleInputChange, name} = props;

    return(

        <div className="home" >
            <img src={logo} alt="logo" />
            <label htmlFor="name">Ingresá tu nombre</label>
            <input id="name" type="text" value={name} onChange={handleInputChange} autoComplete="off"/>
            {name && <button onClick={handleEmpezar} >Jugar</button>}
        </div>

    )
}

export default Home;