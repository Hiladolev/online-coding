import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";

interface CodeBlockProps {
  title: string;
  id: number;
}
function SingleCodeBlock({ title, id }: CodeBlockProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <ListItem disablePadding onClick={() => navigate(`/codeBlock/${id}`)}>
        <ListItemButton>
          <ListItemText inset primary={title} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
export default SingleCodeBlock;
