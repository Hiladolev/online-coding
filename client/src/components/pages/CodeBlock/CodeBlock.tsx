import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import CodeBlockModel from "../../models/CodeBlock";

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
    <div>
      {codeBlockObj ? (
        <div>
          <h2>{codeBlockObj.title}</h2>
          <p>{codeBlockObj.code}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CodeBlockPage;
