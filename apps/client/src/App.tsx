import { Route, Routes } from "react-router-dom";
import Landing from "./screens/Landing";
import Game from "./screens/Game";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={"/game"} element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
