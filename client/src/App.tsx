import "./App.css";
import { TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import io from "socket.io-client";
// const socket = io("http://localhost:3001");

function App() {
  const codeBlock = `const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  let text = "";
  for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }`;
  const [code, setCode] = useState(codeBlock);
  const codeChange = (e: ChangeEvent<HTMLInputElement>) => {
    // socket.emit("code change", e.target.value);
  };

  useEffect(() => {
    // socket.on("received code change", (data) => {
    // console.log(data);
    // setCode(`${data}`);
  });
  // }, []);
  return (
    <div className="App">
      <h1>For Loop</h1>
      <TextField
        fullWidth
        id="outlined-multiline-static"
        multiline
        label="code"
        value={code}
        onChange={codeChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

export default App;
