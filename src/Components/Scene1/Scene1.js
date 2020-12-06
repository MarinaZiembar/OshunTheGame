import React, {useEffect} from 'react';
import ambient from '../../Audio/outside.mp3';
import ambient2 from '../../Audio/outside.ogg';
import './style.css';
import './style-mobile.css';


function Scene1(props){

    const {handleEntrar} = props

    useEffect(()=>{
        const audioOutside = document.getElementById('scene-1');
        audioOutside.play();
    }, [])

    return(
        <div className="scene-1">
            <main className="animate__animated animate__fadeIn">
                <audio loop id="scene-1">
                    <source src={ambient} type="audio/mpeg"/>
                    <source src={ambient2} type="audio/ogg"/>
                </audio>
                <div className="scene-1-textblock">
                    <div>
                        <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-2s">Puedo sentir tu presencia ahi afuera...</p>
                        <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-4s">No tengas miedo, pasa. </p>
                    </div>
                    <div>
                        <button onClick={handleEntrar} className="scene-1-dialog animate__animated animate__fadeIn animate__delay-5s">ENTRAR</button>
                    </div>
                </div>
                
            </main>
        </div>
    )

}

export default Scene1;
