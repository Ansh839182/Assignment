import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import './App.css'
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} /> { " | "}
        <Route path="/Home" element={<Home />} />{ " | "}
        <Route path="/About" element={<About />} />{ " | "}
        <Route path="/Contact" element={<Contact />} />{ " | "}
      </Routes>
    </>
  );
}

export default App;