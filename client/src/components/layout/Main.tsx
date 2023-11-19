import { useEffect } from "react";
import MainRoute from "../routes/MainRoute";
import Footer from "./Footer";
import Header from "./Header";
import io from "socket.io-client";

export const socket = io("http://localhost:8080", {
  autoConnect: false,
});

export default function Main() {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        flexDirection: "column",
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
