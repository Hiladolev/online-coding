import Box from "@mui/material/Box";
import List from "@mui/material/List";

function CodeBlockList(): JSX.Element {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List></List>
      </nav>
    </Box>
  );
}
export default CodeBlockList;
