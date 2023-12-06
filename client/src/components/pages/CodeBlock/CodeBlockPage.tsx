import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import CodeBlockModel from "../../models/CodeBlock";
import Typography from "@mui/material/Typography";
import { socket } from "../../layout/Main";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";
import "./CodeBlock.css";

function CodeBlockPage(): JSX.Element {
  const params = useParams();
  const codeBlockId = params.id;
  const [codeBlockObj, setCodeBlockObj] = useState<
    CodeBlockModel | undefined
  >();

  const getCodeBlock = (id: string | undefined) => {
    //Requesting from the server the codeBlock object
    axios
      .get(`http://localhost:8080/api/v1/codeBlocks/codeBlockById/${id}`)
      .then((response) => {
        const result = response.data[0];
        setCodeBlockObj(result);
        //Updating entrances by codeBlockId
        if (!result.entrances) {
          socket.emit("user_entrance", id);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    getCodeBlock(codeBlockId);
  }, [codeBlockId]);

  //Sending codeChange event to the server
  const codeChange = (val: string) => {
    socket.emit("code change", val, codeBlockId);
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
  }, [codeBlockId]);

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
          <Editor
            value={codeBlockObj.code}
            onValueChange={(value) => codeChange(value)}
            highlight={(code) =>
              highlight(code, languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 20,
              marginBlockStart: 50,
            }}
            textareaClassName="textAreaStyles"
            readOnly={codeBlockObj.entrances === null}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default CodeBlockPage;
