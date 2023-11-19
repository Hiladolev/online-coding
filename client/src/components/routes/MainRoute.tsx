import { Route, Routes } from "react-router-dom";
import Lobby from "../pages/Lobby/LobbyPage";
import CodeBlock from "../pages/CodeBlock/CodeBlockPage";

function MainRoute(): JSX.Element {
  return (
    <div style={{ marginBlock: "3%" }}>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/codeBlock/:id" element={<CodeBlock />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
