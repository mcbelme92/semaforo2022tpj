import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [red, setRedState] = useState(true);
  const [yellow, setYellowState] = useState(false);
  const [green, setGreenState] = useState(true);

  //cambia el estado de los useState siempre y cuando detecte algun cambio en green
  //ya nose usa este ya que chocaba con mi codigo de startButton
  // useEffect(() => {
  //   // setRedState(false);
  //   setYellowState(true);
  //   setGreenState(false);
  // }, [green]);
  //variable dodne esta almacenada la logica debooleanos
  const StartButton = () => {
    setGreenState(false);
    if (green === true) {
      setRedState(true);
      setYellowState(true);
    }
    if (red === true) {
      setYellowState(false);
      setGreenState(true);
    }
    if (yellow === false) {
      setRedState(false);
      setYellowState(true);
    }
  };

  //FUNCION PARA EJECUTAR LA FUNCION CADA 2 SEGUNDOS
  setTimeout(StartButton, 2000);

  return (
    <div className="App">
      <h1>Semaforo</h1>
      <div className="semaforo">
        {red ? (
          <p className="light-circle"> </p>
        ) : (
          <p className="red light-circle"></p>
        )}
        {yellow ? (
          <p className="light-circle"> </p>
        ) : (
          <p className="yellow light-circle"> </p>
        )}

        {green ? (
          <p className="light-circle"></p>
        ) : (
          <p className="green light-circle"></p>
        )}
      </div>
      {/* <button onClick={StartButton} /> */}
    </div>
  );
}

export default App;
//CODIGFO ACTULIZADO CON LA FUNCON AUTOMATICA CON ELSEMAFORO LISTO FUNCIONANDO CORRECTAMENTE
//SE HIZO UNAPEQUEÑA MODIFICACION AM I CODIGO PERO YA QUEDO LISTO ESTOY AL PENDIENTE DE SU RETROALIMENTACION
