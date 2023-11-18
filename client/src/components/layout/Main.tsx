import MainRoute from "../routes/MainRoute";
import Footer from "./Footer";
import Header from "./Header";

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
