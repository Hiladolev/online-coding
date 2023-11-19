import { useLocation, useParams } from "react-router";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import CodeBlockModel from "../../models/CodeBlock";
import { TextField } from "@mui/material";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

function CodeBlockPage(): JSX.Element {
  const params = useParams();
  const codeBlockId = params.id;
  const [codeBlockObj, setCodeBlockObj] = useState<
    CodeBlockModel | undefined
  >();
  let location = useLocation();
  // const [code, setCode] = useState(codeBlock);

  const getCodeBlock = () => {
    axios
      .get(
        `http://localhost:8080/api/v1/codeBlocks/codeBlockById/${codeBlockId}`
      )
      .then((response) => {
        const result = response.data[0];
        setCodeBlockObj(result);
        if (!result.entrances) {
          axios.put(
            `http://localhost:8080/api/v1/codeBlocks/setMentorEntrance/${codeBlockId}`
          );
        } else {
          axios.put(
            `http://localhost:8080/api/v1/codeBlocks/addStudentEntrance/${codeBlockId}`
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    if (!codeBlockObj) getCodeBlock();
  }, [location, codeBlockId]);

  const codeChange = (e: ChangeEvent<HTMLInputElement>) => {
    socket.emit("code change", e.target.value);
  };

  useEffect(() => {
    socket.on("received code change", (data: string) => {
      console.log(data);
      setCodeBlockObj((prevCodeBlockObj) => {
        if (!prevCodeBlockObj) return prevCodeBlockObj; // return unchanged state if it's undefined
        return { ...prevCodeBlockObj, code: data };
      });
    });

    return () => {
      socket.off();
    };
  }, []);
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
            onChange={codeChange}
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
