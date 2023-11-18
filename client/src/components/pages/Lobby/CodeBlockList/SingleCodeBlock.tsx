import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface CodeBlockNameProps {
  codeBlockName: string;
}
function SingleCodeBlock({ codeBlockName }: CodeBlockNameProps): JSX.Element {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary={codeBlockName} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
export default SingleCodeBlock;
