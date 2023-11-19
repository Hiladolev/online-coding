import { url } from "inspector";
import MainRoute from "../routes/MainRoute";
import Footer from "./Footer";
import Header from "./Header";
import io from "socket.io-client";

export const socket = io("http://localhost:8080", {
  autoConnect: false,
});
export default function Main() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        flexDirection: "column",
        backgroundImage:
          "url('https://images.pexels.com/photos/8534389/pexels-photo-8534389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <header>
        <Header />
      </header>
      <main
        style={{
          flexGrow: 1,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "14px",
        }}
      >
        <MainRoute />
      </main>

      <Footer />
    </div>
  );
}
