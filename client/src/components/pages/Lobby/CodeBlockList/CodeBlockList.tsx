import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SingleCodeBlock from "./SingleCodeBlock";

const codeListNames: string[] = ["For", "While", "For In", "For Of"];
function CodeBlockList(): JSX.Element {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        margin: "auto",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          {codeListNames.map((codeBlockName) => (
            <SingleCodeBlock
              codeBlockName={codeBlockName}
              key={codeBlockName}
            />
          ))}
        </List>
      </nav>
    </Box>
  );
}
export default CodeBlockList;
