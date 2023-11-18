import Typography from "@mui/material/Typography";
import CodeBlockList from "./CodeBlockList";
function Lobby(): JSX.Element {
  return (
    <div>
      <Typography variant="h1" component="h2">
        Choose Block Code
      </Typography>
      <CodeBlockList />
    </div>
  );
}
export default Lobby;
