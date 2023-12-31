import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import "./index.css";
import Boost from "./components/Boost";
import Advanced from "./components/Advanced";
import Shortener from "./components/Shortener";

//import TestComp from "./components/TestComp";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />

      <Shortener />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
}
