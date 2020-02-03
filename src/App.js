import React from "react";
import "./App.css";
import InputForm from "./InputForm";
import { Grommet } from "grommet";

function App() {
  const calcAlcohol = value => {
    console.log("\nLog ->\n: functioncalcAlcohol -> value", value);
  };

  return (
    <Grommet>
      <InputForm formValues={value => calcAlcohol(value)} />
    </Grommet>
  );
}

export default App;
