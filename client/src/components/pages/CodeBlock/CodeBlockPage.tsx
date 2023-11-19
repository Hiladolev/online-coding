import { useParams } from "react-router";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import CodeBlockModel from "../../models/CodeBlock";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { socket } from "../../layout/Main";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

function CodeBlockPage(): JSX.Element {
  const params = useParams();
  const codeBlockId = params.id;
  const [codeBlockObj, setCodeBlockObj] = useState<
    CodeBlockModel | undefined
  >();

  const getCodeBlock = () => {
    //Requesting from the server the codeBlock object
    axios
      .get(
        `http://localhost:8080/api/v1/codeBlocks/codeBlockById/${codeBlockId}`
      )
      .then((response) => {
        const result = response.data[0];
        setCodeBlockObj(result);
        //Updating entrances by codeBlockId
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
  }, [codeBlockId]);

  //Sending codeChange event to the server
  const codeChange = (e: ChangeEvent<HTMLInputElement>) => {
    socket.emit("code change", e.target.value, codeBlockId);
  };

  //Receiving code changes back from the server : data + id (eventName, listener)
  useEffect(() => {
    socket.on("received code change", (data: string, id) => {
      if (codeBlockId !== id) return;
      setCodeBlockObj((prevCodeBlockObj) => {
        return { ...(prevCodeBlockObj as any), code: data };
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
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: "center",
              pt: 2,
              fontFamily: "'Roboto Slab', serif", // Specify the font
              color: "primary.main",
            }}
          >
            {codeBlockObj.title}
          </Typography>
          <pre>
            <code>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                multiline
                value={codeBlockObj.code}
                onChange={codeChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  readOnly: codeBlockObj.entrances === null,
                }}
                sx={{ pt: 1, width: "100vh" }}
              />
            </code>
          </pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default CodeBlockPage;
