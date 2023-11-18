import { Route, Routes } from "react-router-dom";
import Lobby from "../pages/Lobby/Lobby";
import CodeBlock from "../pages/CodeBlock/CodeBlock";

function MainRoute(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/codeBlock/:id" element={<CodeBlock />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
