import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [red, setRedState] = useState(true);
  const [yellow, setYellowState] = useState(false);
  const [green, setGreenState] = useState(true);

  //cambia el estado de los useState siempre y cuando detecte algun cambio en green
  useEffect(() => {
    setRedState(false);
    setYellowState(true);
    setGreenState(false);
  }, [green]);
  //variable dodne esta almacenada la logica debooleanos
  const StartButton = (e) => {
    setGreenState(true);
    if (green === false) {
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

    setGreenState(false);
  };

  //FUNCION PARA EJECUTAR LA FUNCION CADA 2 SEGUNDOS
  setTimeout(StartButton, 2000);

  return (
    <div className="App">
      <h1>Semaforo</h1>
      <div className="semaforo">
        {yellow ? (
          <p className="light-circle"> </p>
        ) : (
          <p className="red light-circle"></p>
        )}
        {red ? (
          <p className="yellow light-circle"> </p>
        ) : (
          <p className="light-circle"> </p>
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

// POR CUESTIONES DE TIEMPO LO HICE CON EL SEMAFORO VERDE FIJO YA QUE NECESITABA UN POCO MAS DE TIMPO PaRA AGREGARLE MAS LOGICA EN EL SEMAFORO YA QUE TUVE QUE SALIR
// PERO PRACTICAMENTE LO HIZE TODO USANDO REACT CON USESTATE USEEFFECT, QUEDO AL PENDIENTE DE MIS RESULTADOS
