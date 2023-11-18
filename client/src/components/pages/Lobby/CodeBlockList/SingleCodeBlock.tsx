import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
function SingleCodeBlock(): JSX.Element {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="bye" />
        </ListItemButton>
      </ListItem>
    </>
  );
}
export default SingleCodeBlock;
