import { useLocation, useParams } from "react-router";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import CodeBlockModel from "../../models/CodeBlock";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { socket } from "../../layout/Main";

function CodeBlockPage(): JSX.Element {
  const params = useParams();
  const codeBlockId = params.id;
  const [codeBlockObj, setCodeBlockObj] = useState<
    CodeBlockModel | undefined
  >();
  let location = useLocation();

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
          <TextField
            fullWidth
            id="outlined-multiline-static"
            multiline
            value={codeBlockObj.code}
            onChange={codeChange}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ pt: 1, width: "100vh" }}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default CodeBlockPage;
