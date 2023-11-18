import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface CodeBlockProps {
  title: string;
}
function SingleCodeBlock({ title }: CodeBlockProps): JSX.Element {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary={title} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
export default SingleCodeBlock;
