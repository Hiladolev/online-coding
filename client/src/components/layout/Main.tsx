import MainRoute from "../routes/MainRoute";
import Footer from "./Footer";
import Header from "./Header";
import io from "socket.io-client";

export const socket = io("http://localhost:8080", {
  autoConnect: false,
});
export default function Main() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <MainRoute />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
