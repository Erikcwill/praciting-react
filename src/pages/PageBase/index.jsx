import Header from "../../components/Header";
import styles from "./PageBase.module.css";
import FavoritesProvider from "../../contexts/Favorites";
import Container from "../../components/Container";
import { Outlet } from "react-router-dom";

export default function PageBase() {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritesProvider>
    </main>
  );
}
