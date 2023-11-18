import Typography from "@mui/material/Typography";
import CodeBlockList from "./CodeBlockList/CodeBlockList";
import axios from "axios";
import { useEffect, useState } from "react";
import CodeBlock from "../../models/CodeBlock";

function LobbyPage(): JSX.Element {
  const [codeBlocks, setCodeBlocks] = useState<CodeBlock[] | []>([]);
  const fetchCodeBlocks = () => {
    console.log("getting code blocks from backend....");
    axios
      .get(`http://localhost:8080/api/v1/codeBlocks/allCodeBlocks`)
      .then((response) => {
        setCodeBlocks(response.data);
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
      {codeBlocks.length > 0 ? (
        <CodeBlockList codeBlocksList={codeBlocks} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default LobbyPage;