import Typography from "@mui/material/Typography";
import CodeBlockList from "./CodeBlockList/CodeBlockList";
import axios from "axios";
import { useEffect, useState } from "react";
import CodeBlock from "../../models/CodeBlock";
import { socket } from "../../layout/Main";

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
    // if (socket.connected) {
    //   socket.disconnect();
    // } else {
    //   console.log("Socket is not connected");
    // }
  }, []);

  return (
    <>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          textAlign: "center",
          pt: 3,
          fontFamily: "'Roboto Slab', serif", // Specify the font
          fontWeight: 700, // Specify the font weight
          color: "primary.main",
        }}
      >
        Choose Block Code
      </Typography>

      {codeBlocks.length > 0 ? (
        <CodeBlockList codeBlocksList={codeBlocks} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default LobbyPage;
