import React, {useEffect, useState} from 'react';
import {answersOshunOptions, questionsOshun, } from '../../Utils/Data';
import globoUser from '../../Images/user-globo.png';
import Oshun from '../../Images/vieja-mesa.png';
import Diosa from '../../Images/diosa.png';
import pocimaProt from '../../Images/pocionproteccion.png';
import pocimaDolor from '../../Images/pociondolor.png';
import pocimaAmor from '../../Images/pocionamor.png';
import pocimaFertilidad from '../../Images/pocionfertilidad.png';
import ambient from '../../Audio/inside.mp3';
import ambient2 from '../../Audio/inside.ogg';
import './style.css';


function Scene2(props){

    const {handleSalir} = props;

    useEffect(()=>{
        const audioInside = document.getElementById('scene-2');
        audioInside.play();
    }, [])


    const[question1, setQuestion1] = useState(true);
    const[question2, setQuestion2] = useState(false);
    const[question3, setQuestion3] = useState(false);
    const[question4, setQuestion4] = useState(false);
    const[question5, setQuestion5] = useState(false);
    const[question6, setQuestion6] = useState(false);
    const[question6A, setQuestion6A] = useState(false);
    const[question6B, setQuestion6B] = useState(false);
    const[question7, setQuestion7] = useState(false);
    const[question8, setQuestion8] = useState(false);

    const[diosa, setDiosa] = useState(true);
    const[oshun, setOshun] = useState(true);
    const[oshunPoseida, setOshunPoseida] = useState(false);

    const[futureQuestion1, setFutureQuestion1] = useState(false);
    const[futureQuestion2, setFutureQuestion2] = useState(false);
    const[futureQuestion3, setFutureQuestion3] = useState(false);
    const[futureQuestion4, setFutureQuestion4] = useState(false);

    const[help1, setHelp1] = useState(false);
    const[help2, setHelp2] = useState(false);
    const[help3, setHelp3] = useState(false);

    const [popup, setPopup] = useState(false);
    const [fertilidad, setFertilidad] = useState(false);
    const [amor, setAmor] = useState(false);
    const [dolor, setDolor] = useState(false);
    const [proteccion, setProteccion] = useState(false);


    return(
        <div className="scene-2">
            <main className="animate__animated animate__fadeIn">
                <audio loop id="scene-2">
                    <source src={ambient} type="audio/mpeg"/>
                    <source src={ambient2} type="audio/ogg"/>
                </audio>
                <div class="oshun-scene-2">
                    <img src={Oshun} alt="oshun"/>
                </div>
                <div class="diosa-scene-2">
                    <img src={Diosa} alt="diosa"/>
                </div>
                <div className="scene-2-textblock-oshun">
                    {question1 &&
                        <div>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-2s">{questionsOshun[0]}</p>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-3s">{questionsOshun[1]}</p>
                        </div>
                    }
                    {question2 &&
                        <div>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[2]}</p>
                        </div>
                    }
                    {question4 &&
                        <div>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[3]}</p>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-2s">{questionsOshun[4]}</p>
                        </div>
                    }
                    {question3 &&
                        <div>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[5]}</p>
                        </div>
                    }
                    {question5 &&
                        <div>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[6]}</p>
                        </div>
                    }
                    {question7 &&
                        <div>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[11]}</p>
                        </div>
                    }  
                    {question8 &&
                        <div>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[21]}</p>
                        </div>
                    } 
                    {question6 &&
                        <div>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[12]}</p>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-2s">{questionsOshun[13]}</p>
                        </div>
                    }
                    {question6A &&
                        <div>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[14]}</p>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-2s">{questionsOshun[15]}</p>
                        </div>
                    }
                    {question6B &&
                        <div>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[16]}</p>
                            <p className="scene-1-dialog animate__animated animate__fadeIn animate__delay-2s">{questionsOshun[17]}</p>
                        </div>
                    }


                </div>
                <div className="scene-2-textblock-user">
                    <img src={globoUser} alt="globo-user"/>

                    {question1 &&
                        <div className="answer-user">
                           <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion1(false);setQuestion2(true);}} >{answersOshunOptions[0]}</button>
                           <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion1(false);setQuestion3(true);}} >{answersOshunOptions[1]}</button>  
                        </div>
                    }

                    {question2 &&
                        <div className="answer-user">
                           <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion2(false);setQuestion4(true);}} >{answersOshunOptions[2]}</button>
                           <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion2(false);setQuestion3(true);}} >{answersOshunOptions[3]}</button>  
                        </div>
                    }

                    {question4 &&
                        <div className="answer-user">
                           <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion4(false);setQuestion3(true);}} >{answersOshunOptions[4]}</button>  
                        </div>
                    }

                    {question3 &&
                        <div className="answer-user">
                        <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion3(false);setQuestion5(true);}} >{answersOshunOptions[5]}</button>
                        <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion3(false);setQuestion6(true);}} >{answersOshunOptions[6]}</button>  
                     </div>
                    }

                    {question5 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion5(false);setPopup(true);setProteccion(true);}} >{answersOshunOptions[7]}</button>
                            <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion5(false);setPopup(true);setDolor(true);}} >{answersOshunOptions[8]}</button>  
                            <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion5(false);setPopup(true);setAmor(true);}} >{answersOshunOptions[9]}</button>
                            <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion5(false);setPopup(true);setFertilidad(true);}} >{answersOshunOptions[10]}</button>  
                        </div>
                    }

                    {(popup && proteccion )&&
                        <div className="popup-pocima animate__animated animate__animate__zoomIn">
                            <h5>Nueva Pócima obtenida</h5>
                            <img src={pocimaProt} alt="pocima" />
                            <p>{questionsOshun[7]}</p>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setPopup(false);setQuestion7(true);}} >Guardar</button>  
                        </div>
                    }
                    {(popup && dolor )&&
                        <div className="popup-pocima animate__animated animate__animate__zoomIn">
                            <h5>Nueva Pócima obtenida</h5>
                            <img src={pocimaDolor} alt="pocima" />
                            <p>{questionsOshun[8]}</p>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setPopup(false);setQuestion7(true);}} >Guardar</button>  
                        </div>
                    }
                    {(popup && amor )&&
                        <div className="popup-pocima animate__animated animate__animate__zoomIn">
                            <h5>Nueva Pócima obtenida</h5>
                            <img src={pocimaAmor} alt="pocima" />
                            <p>{questionsOshun[9]}</p>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setPopup(false);setQuestion7(true);}} >Guardar</button>  
                        </div>
                    }
                    {(popup && fertilidad )&&
                        <div className="popup-pocima animate__animated animate__animate__zoomIn">
                            <h5>Nueva Pócima obtenida</h5>
                            <img src={pocimaFertilidad} alt="pocima" />
                            <p>{questionsOshun[10]}</p>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setPopup(false);setQuestion7(true);}} >Guardar</button>  
                        </div>
                    }

                    {question7 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion7(false);setQuestion6(true);}} >{answersOshunOptions[11]}</button>
                            <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion7(false);setQuestion8(true);}} >{answersOshunOptions[12]}</button> 
                        </div>
                    }
                    {question8 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={handleSalir}>Muchas gracias por todo, hasta luego.</button>
                        </div>
                    }
                    {question6 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion6(false);setQuestion6A(true);}}>Invocar una diosa??</button>
                        </div>
                    }
                    {question6A &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion6A(false);setQuestion6B(true);}}>Entendido.</button>
                        </div>
                    }
                    {question6B &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-2s" onClick={() => {setQuestion6B(false);setFutureQuestion1(true);}}>Em... Ssi</button>
                        </div>
                    }
                   
                </div>
                
            </main>
        </div>
    )    
}

export default Scene2;
