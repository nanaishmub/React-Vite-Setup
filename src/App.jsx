import "./styles/styles.css";
import H1 from "./components/h1";
import Header from "./components/header";
import Footer from "./components/footer";
import { FaBookDead } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <FaBookDead />
        <H1 />
        <Footer />
      </div>
    </>
  );
}

export default App;
