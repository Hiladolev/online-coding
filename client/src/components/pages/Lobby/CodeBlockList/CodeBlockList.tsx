import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SingleCodeBlock from "./SingleCodeBlock";
import CodeBlock from "../../../models/CodeBlock";

interface CodeBlockListProps {
  codeBlocksList: CodeBlock[] | [];
}

function CodeBlockList({ codeBlocksList }: CodeBlockListProps): JSX.Element {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff8c",
        margin: "auto",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          {codeBlocksList.map((codeBlock: CodeBlock) => (
            <SingleCodeBlock
              title={codeBlock.title}
              id={codeBlock.id}
              key={codeBlock.id}
            />
          ))}
        </List>
      </nav>
    </Box>
  );
}
export default CodeBlockList;
