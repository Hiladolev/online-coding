import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";
import { socket } from "../../../layout/Main";

interface CodeBlockProps {
  title: string;
  id: number;
}
function SingleCodeBlock({ title, id }: CodeBlockProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <ListItem
        disablePadding
        onClick={() => {
          socket.connect();
          navigate(`/codeBlock/${id}`);
        }}
      >
        <ListItemButton>
          <ListItemText inset primary={title} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
export default SingleCodeBlock;
