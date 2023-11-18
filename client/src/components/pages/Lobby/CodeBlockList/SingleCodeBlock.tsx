import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";

interface CodeBlockProps {
  title: string;
}
function SingleCodeBlock({ title }: CodeBlockProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <ListItem disablePadding onClick={() => navigate("/codeBlock/1")}>
        <ListItemButton>
          <ListItemText inset primary={title} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
export default SingleCodeBlock;
