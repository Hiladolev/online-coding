import Typography from "@mui/material/Typography";
import CodeBlockList from "./CodeBlockList/CodeBlockList";
import axios from "axios";
import { useEffect } from "react";

function Lobby(): JSX.Element {
  const fetchCodeBlocks = () => {
    console.log("getting code blocks from backend....");
    axios
      .get(`http://localhost:8080/api/v1/codeBlocks/allCodeBlocks`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    fetchCodeBlocks();
  }, []);
  return (
    <div>
      <Typography variant="h1" component="h2">
        Choose Block Code
      </Typography>
      <CodeBlockList />
    </div>
  );
}
export default Lobby;
