import React, {useEffect, useState} from 'react';
import {answersOshunOptions, questionsOshun, questionsDiosa, answersDiosaOptions, futureAnswers} from '../../Utils/Data';
import globoUser from '../../Images/user-globo.png';
import OshunPoseida from '../../Images/vieja-vision.png';
import Oshun from '../../Images/vieja-mesa.png';
import Diosa from '../../Images/diosa.png';
import pocimaProt from '../../Images/pocionproteccion.png';
import pocimaDolor from '../../Images/pociondolor.png';
import pocimaAmor from '../../Images/pocionamor.png';
import pocimaFertilidad from '../../Images/pocionfertilidad.png';
import ambient from '../../Audio/inside.mp3';
import ambient2 from '../../Audio/inside.ogg';
import './style.css';
import './style-mobile.css';



function Scene2(props){

    const {handleSalir, name} = props;

    useEffect(()=>{
        const audioInside = document.getElementById('scene-2');
        audioInside.play();
    }, [])


    const[answer, setAnswer] = useState();
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
    const[question9, setQuestion9] = useState(false);
    const[question10, setQuestion10] = useState(false);

    const[diosa, setDiosa] = useState(true);
    const[oshun, setOshun] = useState(true);
    const[oshunPoseida, setOshunPoseida] = useState(false);
    const[oshunShake, setOshunShake] = useState(false);

    const[futureInput, setFutureInput] = useState("");

    const[futureQuestion1, setFutureQuestion1] = useState(false);
    const[futureAnswer1, setFutureAnswer1] = useState(false);
    const[futureAnswer2, setFutureAnswer2] = useState(false);

    const[help1, setHelp1] = useState(false);
    const[help2, setHelp2] = useState(false);

    const [popup, setPopup] = useState(false);
    const [fertilidad, setFertilidad] = useState(false);
    const [amor, setAmor] = useState(false);
    const [dolor, setDolor] = useState(false);
    const [proteccion, setProteccion] = useState(false);

    const getRandomAnswer = (min, max) => {
        const indexAnswer = Math.floor(Math.random() * (max - min)) + min;
        setAnswer(indexAnswer);
    }
    
    

    return(
        <div className="scene-2">
            <main className="animate__animated animate__fadeIn">
                <audio loop id="scene-2">
                    <source src={ambient} type="audio/mpeg"/>
                    <source src={ambient2} type="audio/ogg"/>
                </audio>
                {oshunPoseida &&
                    <div className="oshunposeida-scene-2 animate__animated animate__slideInUp">
                        <img src={OshunPoseida} className={oshunShake && "shake-little shake-constant"} alt="oshun-poseida"/>
                    </div>
                }
                {oshun &&
                    <div className="oshun-scene-2 animate__animated animate__fadeIn">
                        <img src={Oshun} alt="oshun"/>
                    </div>
                }
                {diosa &&
                    <div className="diosa-scene-2">
                        <img src={Diosa} alt="diosa"/>
                    </div>
                }
                <div className="scene-2-textblock-oshun">
                    {question1 &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">Adelante, te estaba esperando {name}.</p>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-2s">{questionsOshun[1]}</p>
                        </div>
                    }
                    {question2 &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[2]}</p>
                        </div>
                    }
                    {question4 &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[3]}</p>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-2s">{questionsOshun[4]}</p>
                        </div>
                    }
                    {question3 &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[5]}</p>
                        </div>
                    }
                    {question5 &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[6]}</p>
                        </div>
                    }
                    {question7 &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[11]}</p>
                        </div>
                    }  
                    {question8 &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[21]}</p>
                        </div>
                    } 
                    {question6 &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[12]}</p>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-2s">{questionsOshun[13]}</p>
                        </div>
                    }
                    {question6A &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[14]}</p>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-2s">{questionsOshun[15]}</p>
                        </div>
                    }
                    {question6B &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[16]}</p>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-2s">{questionsOshun[17]}</p>
                        </div>
                    }
                    {futureQuestion1 &&
                        <div>
                            <p className="diosa-dialog scene-2-dialog animate__animated animate__fadeIn animate__delay-1s"> Preguntame lo que quieras, {name}. </p>
                        </div>
                    }
                    {futureAnswer1 &&
                        <div>
                            <p className="diosa-dialog scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{futureAnswers[answer]}</p>
                            <br/>
                            <p className="diosa-dialog scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsDiosa[1]}</p>
                        </div>
                    }
                    {futureAnswer2 &&
                        <div>
                            <p className="diosa-dialog scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{futureAnswers[answer]}</p>
                            <br/>
                            <p className="diosa-dialog scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsDiosa[2]}</p>
                            <p className="diosa-dialog scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsDiosa[3]}</p>
                        </div>
                    }
                    {help1 &&
                        <div>
                            <p className="diosa-dialog scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsDiosa[4]}</p>
                        </div>
                    }
                    {help2 &&
                        <div>
                            <p className="diosa-dialog scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsDiosa[5]}</p>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsDiosa[2]}</p>
                        </div>
                    }
                    {question9 &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[18]}</p>
                        </div>
                    }
                    {question10 &&
                        <div>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">{questionsOshun[19]}</p>
                            <p className="scene-2-dialog animate__animated animate__fadeIn animate__delay-1s">Ahora debo pedirte que te vayas, es tarde y estoy agotada. Fue un placer, {name}. </p>
                        </div>
                    }


                </div>
                <div className="scene-2-textblock-user">
                    <img src={globoUser} alt="globo-user"/>

                    {question1 &&
                        <div className="answer-user">
                           <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion1(false);setQuestion2(true);}} >{answersOshunOptions[0]}</button>
                           <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion1(false);setQuestion3(true);}} >{answersOshunOptions[1]}</button>  
                        </div>
                    }

                    {question2 &&
                        <div className="answer-user">
                           <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion2(false);setQuestion4(true);}} >{answersOshunOptions[2]}</button>
                           <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion2(false);setQuestion3(true);}} >{answersOshunOptions[3]}</button>  
                        </div>
                    }

                    {question4 &&
                        <div className="answer-user">
                           <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion4(false);setQuestion3(true);}} >{answersOshunOptions[4]}</button>  
                        </div>
                    }

                    {question3 &&
                        <div className="answer-user">
                        <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion3(false);setQuestion5(true);}} >{answersOshunOptions[5]}</button>
                        <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion3(false);setQuestion6(true);}} >{answersOshunOptions[6]}</button>  
                     </div>
                    }

                    {question5 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion5(false);setPopup(true);setProteccion(true);}} >{answersOshunOptions[7]}</button>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion5(false);setPopup(true);setDolor(true);}} >{answersOshunOptions[8]}</button>  
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion5(false);setPopup(true);setAmor(true);}} >{answersOshunOptions[9]}</button>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion5(false);setPopup(true);setFertilidad(true);}} >{answersOshunOptions[10]}</button>  
                        </div>
                    }

                    {(popup && proteccion )&&
                        <div className="popup-pocima animate__animated animate__zoomIn">
                            <h5>Nueva Pócima obtenida</h5>
                            <img src={pocimaProt} alt="pocima" />
                            <p>{questionsOshun[7]}</p>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setPopup(false);setQuestion7(true);}} >Guardar</button>  
                        </div>
                    }
                    {(popup && dolor )&&
                        <div className="popup-pocima animate__animated animate__zoomIn">
                            <h5>Nueva Pócima obtenida</h5>
                            <img src={pocimaDolor} alt="pocima" />
                            <p>{questionsOshun[8]}</p>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setPopup(false);setQuestion7(true);}} >Guardar</button>  
                        </div>
                    }
                    {(popup && amor )&&
                        <div className="popup-pocima animate__animated animate__zoomIn">
                            <h5>Nueva Pócima obtenida</h5>
                            <img src={pocimaAmor} alt="pocima" />
                            <p>{questionsOshun[9]}</p>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setPopup(false);setQuestion7(true);}} >Guardar</button>  
                        </div>
                    }
                    {(popup && fertilidad )&&
                        <div className="popup-pocima animate__animated animate__zoomIn">
                            <h5>Nueva Pócima obtenida</h5>
                            <img src={pocimaFertilidad} alt="pocima" />
                            <p>{questionsOshun[10]}</p>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setPopup(false);setQuestion7(true);}} >Guardar</button>  
                        </div>
                    }

                    {question7 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion7(false);setQuestion6(true);}} >{answersOshunOptions[11]}</button>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion7(false);setQuestion8(true);}} >{answersOshunOptions[12]}</button> 
                        </div>
                    }
                    {question8 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={handleSalir}>-Muchas gracias por todo, hasta luego.</button>
                        </div>
                    }
                    {question6 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion6(false);setQuestion6A(true);}}>-Poseída dijo??</button>
                        </div>
                    }
                    {question6A &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion6A(false);setQuestion6B(true);}}>-Entendido.</button>
                        </div>
                    }
                    {question6B &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion6B(false);setFutureQuestion1(true);setDiosa(false);setOshun(false);setOshunPoseida(true);}}>-Em... Ssi</button>
                        </div>
                    }
                    {futureQuestion1 &&
                        <div className="answer-user">
                            <input id="futureInput" type="text" value={futureInput} onChange={(e) => setFutureInput(e.target.value)} placeholder="Escribe tu pregunta aquí..." autoComplete="off"/>
                            {futureInput && <button className="animate__animated animate__fadeIn" onClick={() => {setFutureQuestion1(false);setFutureAnswer1(true);setFutureInput("");getRandomAnswer(0,5);}}>Preguntar</button>}
                        </div>
                    }
                    {futureAnswer1 &&
                        <div className="answer-user">
                            <input id="futureInput" type="text" value={futureInput} onChange={(e) => setFutureInput(e.target.value)} placeholder="Escribe tu pregunta aquí..." autoComplete="off"/>
                            {futureInput && <button className="animate__animated animate__fadeIn" onClick={() => {setFutureAnswer1(false);setFutureAnswer2(true);setFutureInput("");getRandomAnswer(0,5);setOshunShake(true);}}>Preguntar</button>}
                        </div>
                    }
                    {futureAnswer2 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setFutureAnswer2(false);setHelp1(true);}}>{answersDiosaOptions[0] }</button>
                        </div>
                    }
                    {help1 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setHelp1(false);setHelp2(true);}}>{answersDiosaOptions[1] }</button>
                        </div>
                    }
                    {help2 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setHelp2(false);setQuestion9(true);setOshunShake(false);setOshunPoseida(false);setOshun(true);}}>{answersDiosaOptions[2] }</button>
                        </div>
                    }
                    {question9 &&
                        <div className="answer-user">
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion9(false);setQuestion8(true);}}>{answersOshunOptions[13] }</button>
                            <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={() => {setQuestion9(false);setQuestion10(true);}}>{answersOshunOptions[14] }</button>
                        </div>
                    }
                    {question10 &&
                        <div className="answer-user">
                        <button className="animate__animated animate__fadeIn animate__delay-1s" onClick={handleSalir}>-Muchas gracias por todo, hasta luego.</button>
                    </div>
                    }
                   
                </div>
                
            </main>
        </div>
    )    
}

export default Scene2;
