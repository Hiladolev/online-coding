import { Route, Routes } from "react-router-dom";
import Lobby from "../pages/Lobby/Lobby";

function MainRoute(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Lobby />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
