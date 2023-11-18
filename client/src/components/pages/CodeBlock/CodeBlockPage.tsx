import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import CodeBlockModel from "../../models/CodeBlock";
import { TextField } from "@mui/material";

function CodeBlockPage(): JSX.Element {
  const params = useParams();
  const codeBlockId = params.id;
  const [codeBlockObj, setCodeBlockObj] = useState<
    CodeBlockModel | undefined
  >();

  useEffect(() => {
    const getCodeBlock = () => {
      axios
        .get(
          `http://localhost:8080/api/v1/codeBlocks/codeBlockById/${codeBlockId}`
        )
        .then((response) => {
          setCodeBlockObj(response.data[0]);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    };

    getCodeBlock();
  }, [codeBlockId]);

  return (
    <>
      {codeBlockObj ? (
        <div>
          <h1>{codeBlockObj.title}</h1>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            multiline
            value={codeBlockObj.code}
            // onChange={codeChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default CodeBlockPage;
