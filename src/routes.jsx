import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";
import PageBase from "./pages/PageBase";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="Favorites" element={<Favorites />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
