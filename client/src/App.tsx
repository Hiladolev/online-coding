import "./App.css";
import { TextField, Button } from "@mui/material";
import io from "socket.io-client";
const socket = io("http://localhost:3001");

function App() {
  const codeBlock = `const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  let text = "";
  for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }`;
  const submitAnswer = () => {};
  return (
    <div className="App">
      <h1>For Loop</h1>
      <TextField
        fullWidth
        id="outlined-multiline-static"
        multiline
        label="code"
        defaultValue={codeBlock}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" onClick={submitAnswer}>
        submit
      </Button>
    </div>
  );
}

export default App;
