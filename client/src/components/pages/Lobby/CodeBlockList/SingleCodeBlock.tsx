import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";
import ListItemIcon from "@mui/material/ListItemIcon";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
          navigate(`/codeBlock/${id}`);
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <KeyboardArrowRightIcon />
          </ListItemIcon>
          <ListItemText inset primary={title} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
export default SingleCodeBlock;
