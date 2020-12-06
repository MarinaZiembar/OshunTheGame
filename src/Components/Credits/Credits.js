import React, {useEffect} from 'react';
// import leyenda from '../../Utils/La-Leyenda-de-Oshun.pdf';
import ambient from '../../Audio/outside.mp3';
import ambient2 from '../../Audio/outside.ogg';
import './style.css';
import './style-mobile.css';



function Credits(){

    useEffect(()=>{
        const audioInside = document.getElementById('credits');
        audioInside.play();
    }, [])

    return(
        <div className="credits">
            <main className="animate__animated animate__fadeIn">
                <audio loop id="credits">
                    <source src={ambient} type="audio/mpeg"/>
                    <source src={ambient2} type="audio/ogg"/>
                </audio>
                <div className="main-title animate__animated animate__fadeIn animate__delay-1s">
                    <h1>Diseño Gráfico 1</h1>
                    <h2>Cat. Salomone</h2>
                </div>
                <div className="subtitle animate__animated animate__fadeIn animate__delay-1s">
                    <p><strong>ARTE Y SONIDO: </strong>Sol Fusco</p>
                    <br/>
                    <p><strong>DESARROLLO: </strong>Marina Ziembar</p>
                </div>

                <h3 className="animate__animated animate__fadeIn animate__delay-1s">TP Final - 2020</h3>

            </main>
        </div>
    )
}

export default Credits;