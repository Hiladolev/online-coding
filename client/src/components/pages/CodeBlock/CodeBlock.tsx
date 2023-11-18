import { useParams } from "react-router";

function CodeBlock(): JSX.Element {
  const codeBlockId = useParams();
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default CodeBlock;
